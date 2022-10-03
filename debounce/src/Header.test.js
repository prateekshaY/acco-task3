import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders heading for todo list', () => {
    render(<Header />);
    const heading = screen.getByText(/Todo List/i);
    expect(heading).toBeInTheDocument();
})