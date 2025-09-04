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
  SimpleGrid,
  Card,
  CardBody,
  Skeleton
} from '@chakra-ui/react'
import { useAppContext } from '../../context/AppContext'
import ListItem from '../../components/ListItem'
import ListFilters from '../../components/ListFilters'
import usePagination from '../../hooks/usePagination'
import { League } from '../../types/api'

const Home: React.FC = () => {
  const { leagues, fetchLeagues } = useAppContext()
  const { visibleItems, showMore, updateItems, hasMore } = usePagination(10)
  React.useEffect(() => {
    fetchLeagues()
  }, [fetchLeagues])

  React.useEffect(() => {
    updateItems(leagues)
  }, [leagues, updateItems])

  const selectOptions = React.useMemo(() => {
    const results = Array.from(
      new Set(leagues.map((league) => league.strSport))
    ).map((sport) => ({ value: sport, label: sport }))
    return [{ value: '', label: 'All Sports' }, ...results]
  }, [leagues])

  return (
    <Card>
      <CardBody>
        <VStack spacing={12} align="stretch">
          <ListFilters
            filterValue=""
            onFilterChange={() => {}}
            selectValue=""
            onSelectChange={() => {}}
            {...{ selectOptions }}
          />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {!visibleItems.length && (
              <>
                {Array.from({ length: 10 }).map((_, idx) => (
                  <GridItem key={idx}>
                    <Skeleton
                      height="20px"
                      width="30%"
                      rounded="md"
                      minH="150px"
                      w="100%"
                    />
                  </GridItem>
                ))}
              </>
            )}
            {!!visibleItems.length && (
              <>
                {visibleItems.map((league, index) => (
                  <GridItem key={index}>
                    {/* <Box
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
            </Box> */}
                    <ListItem
                      title={(league as League).strLeague}
                      info={[
                        { label: 'Sport', value: (league as League).strSport },
                        {
                          label: 'Alternate Name',
                          value: (league as League).strLeagueAlternate || 'N/A'
                        }
                      ]}
                      badge={''}
                      onClick={() => {}}
                    />
                  </GridItem>
                ))}
              </>
            )}
          </SimpleGrid>

          {hasMore && (
            <HStack justify="center">
              <Button onClick={showMore} variant="outline" colorScheme="blue">
                Load More
              </Button>
            </HStack>
          )}
        </VStack>
      </CardBody>
    </Card>
  )
}

export default Home
