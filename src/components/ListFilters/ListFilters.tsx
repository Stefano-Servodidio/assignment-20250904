import React from 'react'
import { Flex, Input, Select } from '@chakra-ui/react'

interface ListFiltersProps {
  filterValue: string
  onFilterChange: (value: string) => void
  selectValue: string
  onSelectChange: (value: string) => void
  selectOptions: { value: string; label: string }[]
}

const ListFilters: React.FC<ListFiltersProps> = ({
  filterValue,
  onFilterChange,
  selectValue,
  onSelectChange,
  selectOptions
}) => (
  <Flex
    gap={4}
    align="center"
    width={'100%'}
    direction={{ base: 'column', md: 'row' }}
  >
    <Input
      placeholder="Filter..."
      value={filterValue}
      onChange={(e) => onFilterChange(e.target.value)}
      width={{ base: '100%', md: '200px' }}
      flexGrow={1}
    />
    <Select
      value={selectValue}
      onChange={(e) => onSelectChange(e.target.value)}
      width={{ base: '100%', md: '150px' }}
    >
      {selectOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  </Flex>
)

export default ListFilters
