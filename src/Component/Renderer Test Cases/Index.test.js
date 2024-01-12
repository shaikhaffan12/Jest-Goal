import { render, screen, fireEvent } from '@testing-library/react';
import { Index } from './Index';


// test('Input Textbox Test Case', () => {
//   render(<Index />);
//   const { getByTestId } = render(<Index />)
//   const inputElement = getByTestId('userInput');
//   const inputElementPlaceholder = screen.getByPlaceholderText('Enter User Name')
//   expect(inputElement).toBeInTheDocument();
//   expect(inputElementPlaceholder).toBeInTheDocument();
// });


test('both input fields are visible', () => {
    const { getByTestId } = render(<Index />);
    
    // Check if both input fields are visible on the screen
    const userNameInput = getByTestId('userInput');
    const passwordInput = getByTestId('userPassword');
  
    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

test('check input field have only umeric values', ()=> {
  const {getByTestId} = render(<Index />);
  const inputField = getByTestId('userInput');

  fireEvent.change(inputField, {target: {value: "123"}})
  expect(inputField.value).toBe("123");


})

test('check input field have only numeric values', ()=> {
  const {getByTestId} = render(<Index />);
  const inputField = getByTestId('userInput');

  fireEvent.change(inputField, { target: { value: 'abc' } });
  expect(inputField.value).toBe('');
})