import React, { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps): ReactNode => {
  const handleOnClick = () => alert('you click a SSR React component');
  return (
    <button
      className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900  rounded-lg border-2 border-solid border-slate-300"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;
