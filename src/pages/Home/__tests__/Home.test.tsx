import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from '../Home';

const HomeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

describe('Home', () => {
  it('renders the welcome message', () => {
    render(
      <HomeWrapper>
        <Home />
      </HomeWrapper>
    );
    
    expect(screen.getByText('Welcome to React App')).toBeInTheDocument();
  });

  it('renders the tech stack section', () => {
    render(
      <HomeWrapper>
        <Home />
      </HomeWrapper>
    );
    
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();
    expect(screen.getByText('React 18')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Vite')).toBeInTheDocument();
  });
});