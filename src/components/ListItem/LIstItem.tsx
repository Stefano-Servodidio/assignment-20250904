// List Item component
import {
  Box,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useColorModeValue,
  Spinner,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'

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
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
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
        >
          <Heading as="h3" size="md" color="gray.900" mb={2}>
            {title}
          </Heading>
          {info.map((item, index) => (
            <Flex key={index} alignItems="center" mb={1}>
              <Text
                key={index}
                color="gray.600"
                fontWeight={'semibold'}
                minWidth={'120px'}
              >
                {item.label}:
              </Text>
              <Text key={index} color="gray.600" flexGrow={1} ml={2}>
                {item.value}
              </Text>
            </Flex>
          ))}
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          {!badge && <Spinner />}
          {badge && (
            <img
              src={badge}
              alt={`${title} Badge`}
              style={{
                maxWidth: '80px',
                maxHeight: '80px',
                borderRadius: '8px'
              }}
            />
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default ListItem
