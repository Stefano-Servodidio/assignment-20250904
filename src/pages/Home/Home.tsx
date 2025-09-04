import React from 'react'
import {
  Button,
  GridItem,
  VStack,
  HStack,
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
  const { leagues, fetchLeagues, leagueBadges, fetchLeagueBadges } =
    useAppContext()
  const { visibleItems, showMore, updateItems, hasMore } = usePagination(10)
  const [filterValue, setFilterValue] = React.useState('')
  const [selectValue, setSelectValue] = React.useState('')

  React.useEffect(() => {
    fetchLeagues()
  }, [fetchLeagues])

  React.useEffect(() => {
    const filteredLeagues = leagues.filter((league) => {
      const matchesFilter = league.strLeague
        .toLowerCase()
        .includes(filterValue.toLowerCase())
      const matchesSelect = selectValue ? league.strSport === selectValue : true
      return matchesFilter && matchesSelect
    })
    updateItems(filteredLeagues)
  }, [leagues, updateItems, filterValue, selectValue])

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
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            selectOptions={selectOptions}
            selectValue={selectValue}
            onSelectChange={setSelectValue}
          />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {!visibleItems.length && (
              <>
                {Array.from({ length: 10 }).map((_, idx) => (
                  <GridItem key={'placeholder' + idx}>
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
                  <GridItem key={'league' + index}>
                    <ListItem
                      title={(league as League).strLeague}
                      info={[
                        { label: 'Sport', value: (league as League).strSport },
                        {
                          label: 'Alternate Name',
                          value: (league as League).strLeagueAlternate || 'N/A'
                        }
                      ]}
                      badge={leagueBadges[(league as League).idLeague] || ''}
                      onClick={() => {
                        fetchLeagueBadges((league as League).idLeague)
                      }}
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
