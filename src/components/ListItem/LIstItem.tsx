// List Item component
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import ListItemPopover from './ListItemPopover'

export type ListInfo = {
  label: string
  value: string
}

const ListItem: React.FC<{
  title: string
  info: ListInfo[]
  badge: string
  onClick: () => void
}> = ({ title, info, badge, onClick }) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const cardBg = useColorModeValue('gray.100', 'gray.800')
  const borderColor = useColorModeValue('gray.300', 'gray.700')

  const handleClick = () => {
    onToggle()
    onClick()
  }
  return (
    <ListItemPopover
      title={title}
      badge={badge}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Box
        bg={cardBg}
        p={6}
        rounded="xl"
        shadow="sm"
        border="1px"
        borderColor={borderColor}
        _hover={{ shadow: 'md' }}
        transition="shadow 0.2s"
        onClick={handleClick}
        cursor={'pointer'}
      >
        <Heading as="h3" size="md" color="gray.900" mb={2}>
          {title}
        </Heading>
        {info.map((item, index) => (
          <Flex key={'listItemInfo' + index} alignItems="center" mb={1}>
            <Text color="gray.600" fontWeight={'semibold'} minWidth={'120px'}>
              {item.label}:
            </Text>
            <Text color="gray.600" flexGrow={1} ml={2}>
              {item.value}
            </Text>
          </Flex>
        ))}
      </Box>
    </ListItemPopover>
  )
}

export default ListItem
