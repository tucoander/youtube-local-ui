import { Box, Image, Text, HStack, VStack } from '@chakra-ui/react'

function VideoCard({ title, thumbnail, duration, onClick }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      cursor="pointer"
      _hover={{ bg: 'gray.700' }}
      onClick={onClick}
    >
      <Image src={thumbnail} alt={title} />
      <VStack align="start" p={3} spacing={1}>
        <Text fontWeight="bold" noOfLines={2}>
          {title}
        </Text>
        <HStack fontSize="sm" color="gray.900">
          <Text>{duration}</Text>
        </HStack>
      </VStack>
    </Box>
  )
}

export default VideoCard
