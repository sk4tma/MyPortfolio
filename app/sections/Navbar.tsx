import { useState } from 'react';

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)
  const scrollToSection = (sectionId: string) =>{
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64
      const offsetPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return(
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-gray-800"
          >
            MyPortfolio
          </button>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('player')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Player
            </button>
            <button
              onClick={() => scrollToSection('setter')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Setter
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </button>
          </div>

          {/* ハンバーガーボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="py-4 space-y-2">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('player')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              Player
            </button>
            <button
              onClick={() => scrollToSection('setter')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              Setter
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}