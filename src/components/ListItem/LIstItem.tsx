// List Item component
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export type ListInfo = {
  label: string
  value: string
}

const ListItem: React.FC<{ title: string; info: ListInfo[] }> = ({
  title,
  info
}) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.100', 'gray.700')

  return (
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
  )
}

export default ListItem
