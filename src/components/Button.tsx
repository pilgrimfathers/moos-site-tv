import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[#00D3F1] hover:bg-[#00bcd8] text-white focus:ring-[#00D3F1]',
    secondary: 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-800',
    outline: 'border border-[#00D3F1] text-[#00D3F1] hover:bg-[#00D3F1]/10 focus:ring-[#00D3F1]',
  };

  const sizeClasses = 'px-4 py-2 text-sm md:px-6 md:py-3 md:text-base';
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;