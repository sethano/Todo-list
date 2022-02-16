import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';
import Context from '../Context/Context';

const customRender = (ui) => {
  return render(
    <Context.Provider>{ui}</Context.Provider>,
  );
};

test('Test the Form Button', () => {
  customRender (<App />);
  const button = screen.getByTestId('FormButton');
  expect(button).toBeInTheDocument();
});

test('Test if the button clicks open the forms', () =>{
  customRender(<App />);
  const button = screen.getByTestId('FormButton');
  fireEvent.click(button);
  const forms = screen.getByTestId('FormsToAdd');
  expect(forms).toBeInTheDocument();
});