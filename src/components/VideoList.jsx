// src/components/VideoList.jsx
import { Box, Image, Text, VStack, HStack, Link } from "@chakra-ui/react";

function VideoList({ videos }) {
  return (
    <VStack spacing={4} align="stretch" mt={4}>
      {videos.map((video) => {
        const { id, snippet, contentDetails } = video;
        const videoId = typeof id === "string" ? id : id.videoId;
        return (
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="gray.800"
            color="white"
            w="100%"
          >
            <Image src={video.thumbnailUrl} alt={video.title} w="100%" />
            <Box p="4">
              <Text fontWeight="bold" fontSize="lg" noOfLines={2}>
                {video.title}
              </Text>
              <Text fontSize="sm" color="gray.400">
                {video.channelTitle}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {video.publishedAt} • {video.duration}
              </Text>
            </Box>
          </Box>
        );
      })}
    </VStack>
  );
}

export default VideoList;
