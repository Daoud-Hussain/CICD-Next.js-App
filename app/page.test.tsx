import { render, screen } from '@testing-library/react';
import Page from './page'; // Adjust the import if necessary

describe("App Router", () => {
  it("Works with Server Components", () => {
    render(<Page />);
    
    // Check for specific heading (e.g., <h1> text)
    expect(screen.getByRole('heading', { name: /Next\.js Site/i })).toBeInTheDocument();

    // Alternatively, you can check for other headings or count the number of heading elements
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(8);  // Ensure there are 7 headings
  });
});
