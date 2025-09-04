import React from 'react'
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react'
import { Rocket, Code, Zap } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'

const Home: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.100', 'gray.700')

  const { leagues, fetchLeagues } = useAppContext()

  React.useEffect(() => {
    fetchLeagues()
  }, [])

  return (
    <VStack spacing={12} align="stretch">
      {/* Features Grid */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={16}>
        {leagues.map((league, index) => (
          <GridItem key={index}>
            <Box
              bg={cardBg}
              p={6}
              rounded="xl"
              shadow="sm"
              border="1px"
              borderColor={borderColor}
              _hover={{ shadow: 'md' }}
              transition="shadow 0.2s"
            >
              <Heading as="h3" size="md" color="gray.900" mb={2}>
                {league.strLeague}
              </Heading>
              <Text color="gray.600" minH={'24px'}>
                {league.strSport}
              </Text>
              <Text color="gray.600" minH={'24px'}>
                {league.strLeagueAlternate}
              </Text>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default Home
