import { render, screen } from '@testing-library/react';
import App from './App';

// This test checks to see that a hyperlink is rendered with the expected url and text values
test('renders link', () => {
  render(<App />);
  const expectedLinkText = 'From local source code to fully tested and deployed application in a single push';
  const expectedLinkUrl = 'https://www.redhat.com/en/topics/devops/what-is-ci-cd'
  const linkElement = screen.getByText(expectedLinkText);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.closest('a')).toHaveAttribute('href', expectedLinkUrl);
});
