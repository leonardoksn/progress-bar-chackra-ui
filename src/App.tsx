import { useEffect, useState } from 'react'
import { Box, HStack, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { ProgressBar } from './components/ProgressBar'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count < 100) {


      const timer = setTimeout(() => {
        setCount(value => value + 1)
      }, 50)

      return () => clearInterval(timer)

    }
  }, [count])

  const handleCount = (value: number) => {
    if (value < 100) {
      const paramValue = count + 5
      paramValue < 100 ? setCount(value => value + 5) : setCount(value => value = 100)
    }

  }


  return (

    <Box className='App'>
      <Text fontSize='20px' align='center'>Barra de progresso</Text>
      <Box>
        <ProgressBar value={count} />

      </Box>
      <HStack marginLeft="42%">
        <Button colorScheme='blue' onClick={() => handleCount(count)} />
        <Button colorScheme='red' onClick={() => setCount(0)} />
      </HStack>
    </Box>

  )
}

export default App
