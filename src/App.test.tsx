import React from 'react';
import { render , screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('check if  Pig Latin Translator renders', () => {
  const { getByText } = render(<App />);
  const StyledHead5 = getByText(/Pig Latin Translator/i);
  expect(StyledHead5).toBeInTheDocument();
});

test('check if  Translate renders', () => {
  const { getByText } = render(<App />);
  const butonTranslate = getByText(/Translate/i);
  expect(butonTranslate).toBeInTheDocument();
});

test('check if  Translate renders as button', () => {
  const { getByText } = render(<App />);
  const butonTranslate = getByText(/Translate/i);
  expect(butonTranslate.tagName).toBe("BUTTON");
});

test('check if left left text area1 1 renders ', () => {
  const { getByTestId } = render(<App />);
  const lefttextbox1 = getByTestId(/lefttextarea1/i);
  expect(lefttextbox1).toBeInTheDocument();
});

test('check if left right text area1 renders ', () => {
  const { getByTestId } = render(<App />);
  const righttextarea1 = getByTestId(/righttextarea1/i);
  expect(righttextarea1).toBeInTheDocument();
});

test('check if left left text area1 1 renders with readOnly null', () => {
  const { getByTestId } = render(<App />);
  const lefttextbox1 = getByTestId(/lefttextarea1/i);
  expect(lefttextbox1.getAttribute('readOnly')).toBeNull();
});

test('check if left right text area 1 renders as readonly', () => {
  const { getByTestId } = render(<App />);
  const righttextarea1 = getByTestId(/righttextarea1/i);
  expect(righttextarea1.getAttribute('readOnly')).not.toBeNull();
});
