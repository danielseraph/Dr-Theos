import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'whiteOutline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-gold text-white border-2 border-gold hover:bg-gold/90 focus:ring-gold",
      secondary: "bg-navy text-white border-2 border-navy hover:bg-navy/90 focus:ring-navy",
      accent: "bg-gold text-navy border-2 border-gold hover:bg-gold/90 focus:ring-gold font-bold",
      outline: "border-2 border-gold text-gold hover:bg-gold/5 focus:ring-gold",
      whiteOutline: "border-2 border-white text-white hover:bg-white hover:text-navy focus:ring-white",
      white: "bg-white text-gold border-2 border-white hover:bg-white/90 focus:ring-white",
      ghost: "text-navy hover:bg-navy/5 focus:ring-navy",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
