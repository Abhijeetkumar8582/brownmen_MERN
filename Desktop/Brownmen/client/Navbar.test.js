import { render } from '@testing-library/react';
import MyComponent from './pages/articles/Navbar.js';

test('renders "Hello, World!"', () => {
    const { getByText } = render(<MyComponent />);
    const helloWorldElement = getByText(/Hello, World!/i);
    expect(helloWorldElement).toBeInTheDocument();
  });