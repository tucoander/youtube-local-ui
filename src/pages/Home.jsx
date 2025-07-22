import {
  Container,
  Box,
  SimpleGrid,
  Image,
  Text,
  Spinner,
} from "@chakra-ui/react";

export default function Home({ videos, loading }) {
  const handleDownload = (videoId) => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(
      `http://localhost:5000/aguardando?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  return (
    <Container maxW="container.xl" p={10} bg="#0f0f0f" minH="100vh">
      {loading && (
        <Box textAlign="center" mt={10}>
          <Spinner size="xl" color="red.400" />
        </Box>
      )}

      {!loading && videos.length > 0 && (
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={6}
          mt={8}
        >
          {videos.map((video) => (
            <Box
              key={video.id}
              bg="#121212"
              borderRadius="lg"
              overflow="hidden"
              _hover={{
                transform: "scale(1.02)",
                transition: "0.2s",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
              }}
              onClick={() => handleDownload(video.id)} // <- Adicione isso
              cursor="pointer"
            >
              <Box
                position="relative"
                width="100%"
                aspectRatio="16/9"
                overflow="hidden"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
                <Text
                  position="absolute"
                  bottom="1"
                  right="1"
                  fontSize="xs"
                  bg="rgba(0,0,0,0.75)"
                  color="white"
                  px={1}
                  borderRadius="sm"
                >
                  {video.duration}
                </Text>
              </Box>

              <Box p={4}>
                <Text
                  fontSize="md"
                  fontWeight="bold"
                  color="white"
                  noOfLines={2}
                >
                  {video.title}
                </Text>
                <Text fontSize="sm" color="gray.400" mt={1}>
                  {video.channelTitle}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {video.publishedAt}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}
