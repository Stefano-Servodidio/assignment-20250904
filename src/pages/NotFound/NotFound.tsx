import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <Box minH="60vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={6} textAlign="center">
        <VStack spacing={2}>
          <Heading
            as="h1"
            fontSize="9xl"
            fontWeight="bold"
            color="gray.200"
            lineHeight="none"
          >
            404
          </Heading>
          <Heading as="h2" size="xl" color="gray.900">
            Page Not Found
          </Heading>
          <Text
            fontSize="lg"
            color="gray.600"
            maxW="md"
            mx="auto"
          >
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </Text>
        </VStack>

        <HStack spacing={4} flexDirection={{ base: 'column', sm: 'row' }}>
          <Button
            as={RouterLink}
            to="/"
            leftIcon={<Icon as={Home} />}
            colorScheme="blue"
            size="lg"
            fontWeight="semibold"
            shadow="lg"
            _hover={{ shadow: 'xl' }}
          >
            Go Home
          </Button>
          
          <Button
            leftIcon={<Icon as={ArrowLeft} />}
            variant="outline"
            size="lg"
            fontWeight="semibold"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </HStack>

        <Box pt={8}>
          <Alert status="info" rounded="lg" maxW="md" mx="auto">
            <AlertIcon />
            <Box>
              <Text fontSize="sm">
                <Text as="strong">Tip:</Text> Use the navigation above or these buttons to get back on track.
              </Text>
            </Box>
          </Alert>
        </Box>
      </VStack>
    </Box>
  );
};

export default NotFound;