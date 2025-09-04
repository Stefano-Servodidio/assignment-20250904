import React from 'react';
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
} from '@chakra-ui/react';
import { Rocket, Code, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  const features = [
    {
      icon: Rocket,
      title: 'Fast Development',
      description: 'Built with Vite for lightning-fast development experience with hot module replacement.',
      iconBg: 'blue.100',
      iconColor: 'blue.600',
    },
    {
      icon: Code,
      title: 'Type Safety',
      description: 'Full TypeScript support with strict type checking and excellent developer experience.',
      iconBg: 'green.100',
      iconColor: 'green.600',
    },
    {
      icon: Zap,
      title: 'Modern Tooling',
      description: 'Equipped with ESLint, Prettier, Vitest, and React Router for a complete development setup.',
      iconBg: 'purple.100',
      iconColor: 'purple.600',
    },
  ];

  const techStack = [
    'React 18',
    'TypeScript',
    'Vite',
    'Vitest',
    'React Router',
    'ESLint',
    'Prettier',
    'Chakra UI'
  ];

  return (
    <VStack spacing={12} align="stretch">
      {/* Hero Section */}
      <VStack spacing={6} textAlign="center">
        <Heading
          as="h1"
          size={{ base: 'xl', sm: '2xl', md: '3xl' }}
          color="gray.900"
          lineHeight="shorter"
        >
          Welcome to React App
        </Heading>
        <Text
          fontSize="xl"
          color="gray.600"
          maxW="2xl"
          mx="auto"
        >
          A modern React 18 application built with TypeScript, Vite, and the latest development tools.
        </Text>
        <Box>
          <Button
            colorScheme="blue"
            size="lg"
            px={8}
            py={3}
            fontWeight="semibold"
            shadow="lg"
            _hover={{
              shadow: 'xl',
              transform: 'translateY(-1px)',
            }}
            transition="all 0.2s"
          >
            Get Started
          </Button>
        </Box>
      </VStack>

      {/* Features Grid */}
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={8}
        mt={16}
      >
        {features.map((feature, index) => (
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
              <Box
                bg={feature.iconBg}
                w={12}
                h={12}
                rounded="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={4}
              >
                <Icon as={feature.icon} w={6} h={6} color={feature.iconColor} />
              </Box>
              <Heading as="h3" size="md" color="gray.900" mb={2}>
                {feature.title}
              </Heading>
              <Text color="gray.600">
                {feature.description}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* Tech Stack */}
      <Box
        bg={cardBg}
        rounded="xl"
        p={8}
        shadow="sm"
        border="1px"
        borderColor={borderColor}
      >
        <Heading as="h2" size="lg" color="gray.900" mb={6} textAlign="center">
          Tech Stack
        </Heading>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }}
          gap={4}
          textAlign="center"
        >
          {techStack.map((tech) => (
            <GridItem key={tech}>
              <Box
                bg="gray.50"
                py={3}
                px={4}
                rounded="lg"
                fontWeight="medium"
                color="gray.700"
                _hover={{ bg: 'gray.100' }}
                transition="background 0.2s"
              >
                {tech}
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </VStack>
  );
};

export default Home;