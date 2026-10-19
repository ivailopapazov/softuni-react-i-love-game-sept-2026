import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router';

it('should render the App component correctly', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByText('ALL new games are')).toBeInTheDocument();
});

describe('Navigation tests', () => {
    it('Should navigate to the login page correctly', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        // Click on the login link
        fireEvent.click(screen.getByText('Login'));

        // Assert
        expect(screen.getByRole('heading', { name: 'Login', level: 1 })).toBeInTheDocument();
    });
});

