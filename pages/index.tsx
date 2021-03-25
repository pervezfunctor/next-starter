import React from 'react'
import { Text } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Text fontSize="xl">Hello, World</Text>
    </ChakraProvider>
  )
}

export default App
