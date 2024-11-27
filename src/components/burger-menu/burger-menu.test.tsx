import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { BurgerMenu } from './burger-menu';

describe('BurgerMenu', () => {
  it('should render', () => {
    render(<BurgerMenu />);

    const menu = screen.getByTestId('burger-menu');

    expect(menu).toBeInTheDocument();
  });
});
