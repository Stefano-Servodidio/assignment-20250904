import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NotFound from '../NotFound';

const NotFoundWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </ChakraProvider>
);

describe('NotFound', () => {
  it('renders 404 error message', () => {
    render(
      <NotFoundWrapper>
        <NotFound />
      </NotFoundWrapper>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });

  it('renders navigation buttons', () => {
    render(
      <NotFoundWrapper>
        <NotFound />
      </NotFoundWrapper>
    );

    expect(screen.getByText('Go Home')).toBeInTheDocument();
    expect(screen.getByText('Go Back')).toBeInTheDocument();
  });
});