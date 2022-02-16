import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';
import Context from '../Context/Context';

const customRender = (ui) => {
  return render(
    <Context.Provider>{ui}</Context.Provider>,
  );
};

test('Test if there are two inputs on the forms', () =>{
  customRender(<App />);
  const button = screen.getByTestId('FormButton');
  fireEvent.click(button);
  const inputTitle = screen.getByTestId('inputTitle');
  const inputTask = screen.getByTestId('inputTask');
  expect(inputTitle).toBeInTheDocument();
  expect(inputTask).toBeInTheDocument();
});

test('Test if the "inputTitle" is an input of type text', () =>{
  customRender(<App />);
  const button = screen.getByTestId('FormButton');
  fireEvent.click(button);
  const inputTitle = screen.getByTestId('inputTitle');
  expect(inputTitle).toHaveAttribute('type', 'text');
});

test('Test if the "inputTask" is a textarea', () =>{
  customRender(<App />);
  const button = screen.getByTestId('FormButton');
  fireEvent.click(button);
  const textarea = document.getElementsByTagName('textarea');
  expect(textarea[0]).toBeInTheDocument();
});