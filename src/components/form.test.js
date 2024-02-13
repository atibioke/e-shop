import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Form from './Form';

// Mock currencyJson data
const currencyJson = [
  {code: 'USD', symbol: '$'},
  {code: 'EUR', symbol: '€'},
];

test('Form renders correctly,handles input changes and handle submit working fine', () => {
  const handleChange = jest.fn();
  const handleSelect = jest.fn();
  const handleSubmit = jest.fn();

  const formData = {
    productName: 'Test Product',
    price: 1000,
    currencyCode: 'USD',
    currencySymbol: '$',
    quantity: 5,
    imageURL: 'https://example.com/image.jpg',
    productDetails: 'Test product details',
  };

  const {getByLabelText, getByPlaceholderText, getByText} = render(
    <Form
      handleChange={handleChange}
      handleSelect={handleSelect}
      handleSubmit={handleSubmit}
      formData={formData}
      currencyJson={currencyJson}
    />,
  );

  // Test input change
  fireEvent.change(getByLabelText('Product name'), {
    target: {value: 'Updated Product Name'},
  });

  fireEvent.change(getByLabelText('Price'), {
    target: {value: 23},
  });

  fireEvent.change(getByLabelText('Quantity'), {
    target: {value: 23},
  });

  fireEvent.change(getByLabelText('Image URL'), {
    target: {value: 'https://example.com/image.png'},
  });

  expect(handleChange).toHaveBeenCalledTimes(4);

  // Test select change
  fireEvent.change(getByLabelText('Select currency code'), {
    target: {value: 'EUR'},
  });
  expect(handleSelect).toHaveBeenCalledTimes(1);

  // Test form submission
  fireEvent.submit(getByLabelText('Product details'));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
