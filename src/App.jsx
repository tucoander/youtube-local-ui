import { useState } from "react";
import { ChakraProvider, Box, useToast } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const formatDate = (isoDate) =>
    new Date(isoDate).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const formatDuration = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return "";
    const [, h, m, s] = match.map((t) => parseInt(t) || 0);
    return [
      h > 0 ? h : null,
      m.toString().padStart(2, "0"),
      s.toString().padStart(2, "0"),
    ]
      .filter((v) => v !== null)
      .join(":");
  };

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          query
        )}&type=video&maxResults=12&key=${apiKey}`
      );
      const data = await res.json();

      const videoIds = data.items.map((item) => item.id.videoId).join(",");
      const detailsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${apiKey}`
      );
      const detailsData = await detailsRes.json();

      const enrichedVideos = data.items.map((item, index) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.high.url,
        publishedAt: formatDate(item.snippet.publishedAt),
        duration: formatDuration(
          detailsData.items[index]?.contentDetails?.duration || ""
        ),
      }));

      setVideos(enrichedVideos);
    } catch (err) {
      console.error(err);
      toast({
        title: "Erro ao buscar vídeos",
        description: "Verifique a chave da API ou sua conexão.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChakraProvider>
      <Box bg="#0f0f0f" minH="100vh">
        <Header onSearch={handleSearch} />
        <Home videos={videos} loading={loading} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
