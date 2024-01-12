// MyFunctionalComponent.test.js
import React from 'react';
import { render, act } from '@testing-library/react';
import MyFunctionalComponent from './modifires';

describe('MyFunctionalComponent', () => {
  it('resolves with data when fetchData is successful', async () => {
    const fetchDataMock = jest.fn().mockResolvedValue('Data fetched successfully');
    const { getByText } = render(<MyFunctionalComponent fetchDataFunction={fetchDataMock} />);
    
    await act(async () => {
      // Wait for fetchData to complete
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(getByText('Data fetched successfully: Data fetched successfully')).toBeInTheDocument();
  });


  it('renders the component with loading text initially', () => {
    const fetchDataMock = jest.fn();
    const { getByText } = render(<MyFunctionalComponent fetchDataFunction={fetchDataMock} />);
    
    expect(getByText('Loading...')).toBeInTheDocument();
  });

});
