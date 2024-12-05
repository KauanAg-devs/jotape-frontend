import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className="h-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {children}
    </header>
  );
}
