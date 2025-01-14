import { Menu, X } from 'lucide-react'; // Import X for the close icon
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react'; // Import useState for managing mobile menu state
import logo from '../images/logo3.webp';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link to="/" className="ml-4 font-serif text-xl text-gray-900">
              <div className="flex flex-row items-center justify-between">
                <img src={logo} style={{ width: 50, marginRight: 10 }} alt="Logo" />
                <h3 className="text-gray-600">Essence</h3>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" text="Home" active={location.pathname === '/'} />
            <NavLink to="/gallery" text="Gallery" active={location.pathname === '/gallery'} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 mt-4 pb-4">
              <NavLink to="/" text="Home" active={location.pathname === '/'} />
              <NavLink to="/gallery" text="Gallery" active={location.pathname === '/gallery'} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, text, active = false }: { to: string; text: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium ${active
          ? 'text-gray-900 bg-gray-100'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }`}
    >
      {text}
    </Link>
  );
}