import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navigation from './Navigation';

const Layout: React.FC = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <Navigation />
      <Box as="main" maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} py={8}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;