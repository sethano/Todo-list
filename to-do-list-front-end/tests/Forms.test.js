import { describe, it } from 'mocha';
import { screen } from '@testing-library/react';
import { expect } from 'chai';

describe('Test the forms to add a new task on the list', () => {
  it('Verify if there is a button on screen that open the forms', () => {
    const button = screen.getAllByTestId('formsButton');
    expect(button).to.exist;
  });
});