import App from './App';
import { render } from '@testing-library/react';

test('should App be loadable', () => {
    const { getByTestId } = render(<App />);
    const container = document.body;
    expect(getByTestId(container, 'App')).toStrictEqual(<App />);
})

