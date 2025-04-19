import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">
          <Link to="/">COLONAiVE™</Link>
        </div>
        <div className="space-x-4 text-sm font-medium">
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/advisory-board" className="text-gray-700 hover:text-blue-600">Advisory Board</Link>
          <Link to="/get-screened" className="text-gray-700 hover:text-blue-600">Get Screened</Link>
          <Link to="/partner" className="text-gray-700 hover:text-blue-600">Partner With Us</Link>
          <Link to="/knowledge-hub" className="text-gray-700 hover:text-blue-600">Knowledge Hub</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
