import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // Import this line to extend Jest expect functionality

// Your test cases...

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/your name/i);
  expect(image).toBeInTheDocument();
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    exact: false,
    level: 2,
  });
  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/biography/i);
  expect(paragraph).toBeInTheDocument();
});

test("displays two links, one to your GitHub page and one to your LinkedIn page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(githubLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();
});
