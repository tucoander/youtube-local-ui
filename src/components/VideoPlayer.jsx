import { AspectRatio } from '@chakra-ui/react'

function VideoPlayer({ src }) {
  if (!src) return null

  return (
    <AspectRatio ratio={16 / 9} w="100%">
      <video src={src} controls autoPlay />
    </AspectRatio>
  )
}

export default VideoPlayer
