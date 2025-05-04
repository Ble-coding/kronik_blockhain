import React, { ReactNode } from 'react';

export function Popover({ children }: { children: ReactNode }) {
  return <div className="relative inline-block">{children}</div>;
}

export function PopoverTrigger({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
}

export function PopoverContent({ children }: { children: ReactNode }) {
  return (
    <div className="absolute z-10 mt-2 w-32 bg-white dark:bg-gray-800 rounded shadow-md p-2">
      {children}
    </div>
  );
}
