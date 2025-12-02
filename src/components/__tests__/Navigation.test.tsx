import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation';

const NavigationWithRouter = () => (
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
);

describe('Navigation Component', () => {
  test('renders navigation links', () => {
    render(<NavigationWithRouter />);
    
    expect(screen.getByText('🏠 Accueil')).toBeInTheDocument();
    expect(screen.getByText('👥 Utilisateurs')).toBeInTheDocument();
    expect(screen.getByText('🛒 Produits')).toBeInTheDocument();
  });

  test('contains correct navigation links', () => {
    render(<NavigationWithRouter />);
    
    const homeLink = screen.getByRole('link', { name: /accueil/i });
    const usersLink = screen.getByRole('link', { name: /utilisateurs/i });
    const productsLink = screen.getByRole('link', { name: /produits/i });
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(usersLink).toHaveAttribute('href', '/users');
    expect(productsLink).toHaveAttribute('href', '/products');
  });
});