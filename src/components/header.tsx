import React from 'react';
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <header className="bg-primary text-black p-4 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-cactus">
          DaniloMartinez
        </div>
        {/* Renderiza apenas em dispositivos desktop */}
        <nav className="hidden md:flex space-x-6 font-inter text-medium">
          <a href="#home" className="hover:text-secondary">Home</a>
          <a href="#about" className="hover:text-secondary">Equipment</a>
          <a href="#services" className="hover:text-secondary">About us</a>
          <a href="#contact" className="hover:text-secondary">Contact</a>
        </nav>
        {/* Renderiza apenas em dispositivos móveis */}
        <div className="md:hidden flex items-center justify-center font-semibold text-lg">
          <CgProfile /><span className="pl-2 text-sm">Account</span>
        </div>
      </div>
    </header>
  );
}
