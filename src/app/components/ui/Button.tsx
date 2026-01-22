import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, HTMLMotionProps } from 'motion/react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

// Combining standard button props with motion props manually if needed, 
// but for now, wrapping a motion.button is easier.
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps & HTMLMotionProps<"button">>(
  ({ className, variant = 'primary', size = 'md', children, icon, ...props }, ref) => {
    const variants = {
      primary: 'bg-[#3B82F6] text-white hover:bg-[#2563EB] shadow-lg shadow-blue-500/20',
      outline: 'bg-transparent border border-[#3B82F6] text-[#3B82F6] hover:bg-blue-500/10 hover:border-[#2563EB]',
      ghost: 'bg-transparent text-[#CBD5E1] hover:text-[#3B82F6] hover:bg-blue-500/10',
      link: 'bg-transparent text-[#3B82F6] hover:underline p-0 h-auto',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200 cursor-pointer',
          variants[variant],
          variant !== 'link' && sizes[size],
          className
        )}
        whileHover={{ scale: 1.02, translateY: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
