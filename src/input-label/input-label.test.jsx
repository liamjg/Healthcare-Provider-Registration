import { render, screen } from '@testing-library/react';

import InputLabel from './input-label';

test('Renders text without error', () => {
  const testName = 'testName';
  const labelText = 'Test Label Text';
  const error = false;
  const errorText = 'Test error text';

  render(
    <InputLabel
      name={testName}
      labelText={labelText}
      error={error}
      errorText={errorText}
    />
  );

  const labelComponent = screen.queryByText(labelText);
  const inputComponent = screen.queryByPlaceholderText(labelText);
  const errorComponent = screen.queryByText(errorText);

  expect(labelComponent).toBeInTheDocument();
  expect(inputComponent).toBeInTheDocument();
  expect(errorComponent).not.toBeInTheDocument();
});

test('Renders text with error', () => {
  const testName = 'testName';
  const labelText = 'Test Label Text';
  const error = true;
  const errorText = 'Test error text';

  render(
    <InputLabel
      name={testName}
      labelText={labelText}
      error={error}
      errorText={errorText}
    />
  );

  const labelComponent = screen.queryByText(labelText);
  const inputComponent = screen.queryByPlaceholderText(labelText);
  const errorComponent = screen.queryByText(errorText);

  expect(labelComponent).toBeInTheDocument();
  expect(inputComponent).toBeInTheDocument();
  expect(errorComponent).toBeInTheDocument();
});
