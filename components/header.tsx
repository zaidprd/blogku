import { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from './container';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk mendeteksi posisi gulir
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Angka 50 adalah jumlah piksel setelah header berubah
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Fungsi pembersih untuk menghindari memory leak
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar Desktop */}
      <div
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled ? 'bg-white bg-opacity-90 shadow-md backdrop-blur-sm' : 'bg-transparent'}
        `}
      >
        <Container>
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            {/* Logo atau Judul Situs */}
            <div className="flex justify-start lg:w-0 lg:flex-1 transition-all duration-300">
              <h2
                className={`
                  font-bold tracking-tighter leading-tight
                  ${isScrolled ? 'text-xl' : 'text-2xl'}
                `}
              >
                <Link href="/" className="hover:text-gray-900 transition duration-300">
                  CuriousByte
                </Link>
              </h2>
            </div>

            {/* Tautan Navigasi (Desktop) */}
            <nav className="hidden md:flex space-x-10">
              <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900 transition duration-300">
                Home
              </Link>
              <Link href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900 transition duration-300">
                Blog
              </Link>
            </nav>

            {/* Tombol Hamburger (Mobile) */}
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Buka menu utama</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Backdrop Transparan (Mobile) */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-40"
          aria-hidden="true"
        ></div>
      )}

      {/* Menu Mobile (Slide-in) */}
      <div
        className={`
          md:hidden fixed top-0 right-0 z-50 w-4/5 h-[70vh] transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="bg-white bg-opacity-90 h-full shadow-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-end">
              <button
                onClick={toggleMenu}
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Tutup menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="mt-6 flex flex-col space-y-4">
              <Link href="/" onClick={toggleMenu} className="text-lg font-medium text-gray-700 hover:text-gray-900 transition duration-300">
                Home
              </Link>
              <Link href="/blog" onClick={toggleMenu} className="text-lg font-medium text-gray-700 hover:text-gray-900 transition duration-300">
                Blog
              </Link>
            </nav>
          </div>

          {/* Bagian Bawah Menu (Teks & Tombol) */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Dapatkan website modern dan profesional untuk bisnis Anda.
            </p>
            <a href="#harga" onClick={toggleMenu} className="block text-center bg-blue-700 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-800 transition duration-300">
              Lihat Paket Harga
            </a>
          </div>
        </div>
      </div>
    </>
  );
}