import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navigation from '../Navigation';

const NavigationWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </ChakraProvider>
);

describe('Navigation', () => {
  it('renders the app title', () => {
    render(
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
    );

    expect(screen.getByText('React App')).toBeInTheDocument();
  });

  it('renders the Home navigation link', () => {
    render(
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});