import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Trophy } from 'lucide-react'
import { NavigationProps } from '../../types'

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const location = useLocation()
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const navItems = []

  return (
    <Box
      as="nav"
      bg={bg}
      borderBottom="1px"
      borderColor={borderColor}
      shadow="sm"
      className={className}
    >
      <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
        <Flex justify="space-between" h="16" align="center">
          <Link
            as={RouterLink}
            to="/"
            display="flex"
            alignItems="center"
            gap={2}
            fontSize="xl"
            fontWeight="bold"
            color="gray.900"
            _hover={{ color: 'blue.600', textDecoration: 'none' }}
            transition="colors 0.2s"
          >
            <Trophy size={24} />
            <Text>Sport Leagues</Text>
          </Link>

          <HStack spacing={8}>
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                as={RouterLink}
                to={path}
                display="flex"
                alignItems="center"
                gap={1}
                px={3}
                py={2}
                rounded="md"
                fontSize="sm"
                fontWeight="medium"
                color={location.pathname === path ? 'blue.600' : 'gray.700'}
                bg={location.pathname === path ? 'blue.50' : 'transparent'}
                _hover={{
                  color: 'blue.600',
                  bg: location.pathname === path ? 'blue.50' : 'gray.50',
                  textDecoration: 'none'
                }}
                transition="all 0.2s"
              >
                <Icon size={16} />
                <Text>{label}</Text>
              </Link>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}

export default Navigation
