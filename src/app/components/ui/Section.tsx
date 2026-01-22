import React from 'react';
import { cn } from './Button';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  containerClassName,
  fullWidth = false,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 relative overflow-hidden', className)}
      {...props}
    >
      <div
        className={cn(
          'mx-auto px-5 md:px-10',
          fullWidth ? 'w-full' : 'max-w-[1200px]',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};
