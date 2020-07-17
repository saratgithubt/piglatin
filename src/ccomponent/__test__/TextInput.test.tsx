import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react'; //wait,waitfor
import userEvent from '@testing-library/user-event'
import TextInput from '../TextInput';
import { shallow } from "enzyme";//mount

afterEach(cleanup);

test('check if  Translate renders', () => {
  const { getByText } = render(<TextInput />);
  const butonTranslate = getByText(/Translate/i);
  expect(butonTranslate).toBeInTheDocument();
});

test('check if  Translate renders as button', () => {
  const { getByText } = render(<TextInput />);
  const butonTranslate = getByText(/Translate/i);
  expect(butonTranslate.tagName).toBe("BUTTON");
});

test('check if left left text area1 1 renders ', () => {
  const { getByTestId } = render(<TextInput />);
  const lefttextbox1 = getByTestId(/lefttextarea1/i);
  expect(lefttextbox1).toBeInTheDocument();
});

test('check if left right text area1 renders ', () => {
  const { getByTestId } = render(<TextInput />);
  const righttextarea1 = getByTestId(/righttextarea1/i);
  expect(righttextarea1).toBeInTheDocument();
});

test('check if left left text area1 1 renders with readOnly null', () => {
  const { getByTestId } = render(<TextInput />);
  const lefttextbox1 = getByTestId(/lefttextarea1/i);
  expect(lefttextbox1.getAttribute('readOnly')).toBeNull();
});

test('check if left right text area 1 renders as readonly', () => {
  const { getByTestId } = render(<TextInput />);
  const righttextarea1 = getByTestId(/righttextarea1/i);
  expect(righttextarea1.getAttribute('readOnly')).not.toBeNull();
});

test('Integration Test ', async () => {
  const { getByText, getByTestId } = render(<TextInput />);
  const lefttextbox1 = getByTestId(/lefttextarea1/i);
  const butonTranslate = getByText(/Translate/i);
  lefttextbox1.setAttribute('value', 'There-is-towel in bathroom');
  userEvent.click(butonTranslate);
  fireEvent.click(getByText(/Translate/i));
  //console.log(lefttextbox1.getAttribute('value'))
  //console.log(screen.getByTestId('righttextarea1').getAttribute('value'))
  await (
    console.log(getByTestId('righttextarea1').getAttribute('value'))
  )
  expect(lefttextbox1).toBeInTheDocument();
  expect(butonTranslate).toBeInTheDocument();
})

// describe("Executes a handler function", () => {
//   it("must call the mock method with button click", () => {
//     const { getByText } = render(<TextInput />);
//     const wrapper = shallow(<TextInput />);
//     const button = wrapper.find("#button");//screen.getByTestId('righttextarea1')
//     const lefttextarea1 = wrapper.find("#lefttextarea1");
//     const righttextarea1 = wrapper.find("#righttextarea1");  
//     const instance = wrapper.instance();    
//     fireEvent.click(getByText(/Translate/i));
//     console.log(lefttextarea1.text());
//     console.log(righttextarea1.text());
   
//   });
// });




