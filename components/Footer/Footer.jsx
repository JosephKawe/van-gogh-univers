import React from "react";

export default function Footer() {
  return (
    <footer className="bg-main/10 backdrop-blur-md shadow-2xl w-full fixed bottom-0 text-white text-center py-2">
      <div className="container mx-auto">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} KHK. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}