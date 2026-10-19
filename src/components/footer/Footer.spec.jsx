import { expect, it,  } from 'vitest';
import Footer from './Footer';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { render, screen } from '@testing-library/react';

it('should render the Footer component correctly - old school', () => {
    // Create html container element
    const container = document.createElement('div');

    // Attach container to DOM
    document.body.append(container);

    // Create react root
    const root = createRoot(container);

    // Render footer
    act(() => {
        root.render(<Footer />);
    });

    // Find the footer html element inside the dom tree
    const resultElement = document.querySelector('footer > p');

    // Assert
    expect(resultElement.textContent).to.include('SoftUni');

    // Manual cleanup
    root.unmount();
    container.remove();
});

it('should render the Footer component correctly - using testing library', () => {
    // Render footer
    render(<Footer />);

    // Find the footer html element inside the dom tree
    const resultElement = screen.getByRole('paragraph');

    // Assert
    expect(resultElement.textContent).to.include('SoftUni');
});

it('should render the Footer component correctly - using jest-dom matchers', () => {
    // Render footer
    render(<Footer />);

    // Assert
    expect(screen.getByText(/SoftUni/i)).toBeInTheDocument();
});

it('should match the snapshot', () => {
    render(<Footer />);

    const element = screen.getByText(/SoftUni/i);
    
    expect(element).toMatchSnapshot();
});
