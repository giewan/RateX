// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RateXLend title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RateXLend/i);
    expect(titleElement).toBeInTheDocument();
});
