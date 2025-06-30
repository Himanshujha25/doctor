import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-10  shadow-2xl border-t border-gray-700">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                {/* Logo & Company */}
                <div className="flex items-center space-x-3 mb-6 md:mb-0">
                    <span className="text-2xl font-bold tracking-tight text-white">Dr. Serena Blake</span>
                </div>
                {/* Navigation */}
                <nav className="flex flex-wrap gap-6 mb-6 md:mb-0 text-sm font-medium">
                    <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                    <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
                    <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                   
                </nav>
                {/* Social Icons */}
                <div className="flex space-x-4">
                    <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
                        <FaFacebookF size={18} />
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                        <FaTwitter size={18} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors">
                        <FaLinkedinIn size={18} />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
                        <FaInstagram size={18} />
                    </a>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6 text-xs text-gray-400">
                <span>
                    &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                </span>
                <span className="mt-2 md:mt-0">
                    Built by <span className="font-semibold text-blue-400">Himanshu Jha</span>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
