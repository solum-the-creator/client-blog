'use client';

import { Button as ButtonComponent } from '@solumzy/ui-lib-client-blog';

type ButtonProps = {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <ButtonComponent variant="primary" onClick={() => console.log('click')}>
      {children}
    </ButtonComponent>
  );
};
