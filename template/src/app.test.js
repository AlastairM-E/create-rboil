import React from 'react';
import App from './App';
import { render } from '@testing-library/react';


test('should App be loadable', () => {
   const { getByTestId } = render(<App />);
   expect(getByTestId('App').textContent).toStrictEqual('Hello world');
})