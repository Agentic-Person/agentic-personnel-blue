import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ContainerProps } from '@/types';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, ContainerProps {}

const Container = forwardRef<HTMLDivElement, Props>(
  ({ className, children, maxWidth = '7xl', ...props }, ref) => {
    const maxWidthClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '4xl': 'max-w-4xl',
      '6xl': 'max-w-6xl',
      '7xl': 'max-w-7xl',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto px-4 sm:px-6 lg:px-8',
          maxWidthClasses[maxWidth],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;