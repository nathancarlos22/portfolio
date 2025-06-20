import React, { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#experience', label: 'Experiência' },
    { href: '#projects', label: 'Projetos' },
    { href: '#education', label: 'Formação' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white z-50 backdrop-filter backdrop-blur-md shadow-lg">
      <div className="max-w-screen-lg mx-auto flex items-center justify-center px-6 py-4 space-x-12 relative">
        {/* Botão hamburger em mobile */}
        <button
          className="absolute left-6 md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? '✕' : '☰'}
        </button>

        {/* Marca centralizada */}
        <div className="text-2xl font-bold">Nathan Carlos</div>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-2 py-1 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu móvel */}
      {open && (
        <ul className="md:hidden bg-black bg-opacity-95 text-center space-y-4 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-lg hover:text-gray-300"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
);

}

export default Navbar;
