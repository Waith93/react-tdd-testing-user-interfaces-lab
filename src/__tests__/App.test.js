import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
      });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image of yourself with alt text", () => {
    render(<App />);
    const image = screen.getByAltText(/my profile picture/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });

  test("displays a second-level heading with the text 'About Me'", () => {
    render(<App />);
    const aboutHeading = screen.getByRole('heading', {
      name: /about me/i,
      level: 2,
    });
    expect(aboutHeading).toBeInTheDocument();
  });

  test("displays a paragraph with a short biography", () => {
    render(<App />);
    const paragraph = screen.getByText(/i'm a passionate web developer/i);
    expect(paragraph).toBeInTheDocument();
  });

  test("displays a link to the GitHub page", () => {
    render(<App />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Waith');
  });

  test("displays a link to the LinkedIn page", () => {
    render(<App />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/Stacy Waithera');
  });
   