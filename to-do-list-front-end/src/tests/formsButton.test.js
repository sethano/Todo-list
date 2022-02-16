import React from "react";
import { screen, render } from "@testing-library/react";
import App from '../App';

test('Test the Form Button', () => {
  render (<App />);
  const button = screen.getAllByTestId('FormButton');
  expect(button).toBeInTheDocument();
});