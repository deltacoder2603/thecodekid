"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LineShadowText } from "./ui/line-shadow-text";
import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface DropdownItem {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navLinks: NavLink[] = [
  { name: "About", href: "/about" },
  { 
    name: "Benefits", 
    dropdown: [
      { name: "For Schools", href: "/schools" },
      { name: "For Teachers", href: "/teachers" },
      { name: "For Parents", href: "/parents" }
    ]
  },
  { name: "NEP & NCF", href: "/nep" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" } 
];

const Navbar: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const shadowColor = resolvedTheme === "dark" ? "white" : "black";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isBenefitsOpen, setIsBenefitsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsBenefitsOpen(false);
      }
    };

    // Handle scroll
    const handleScroll = (): void => {
      if (isBenefitsOpen) {
        setIsBenefitsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isBenefitsOpen]);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isBenefitsOpen) setIsBenefitsOpen(false);
  };

  const toggleBenefitsMenu = (): void => {
    setIsBenefitsOpen(!isBenefitsOpen);
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsBenefitsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-50 px-4 py-3 md:px-6 md:py-4 shadow-md bg-orange-100">
      {/* Logo */}
      <Link href="/" className="text-balance text-3xl md:text-4xl font-semibold leading-none tracking-tighter z-50">
       TheCode
        <LineShadowText className="italic" shadowColor={shadowColor}>
          Kid
        </LineShadowText>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-4 md:space-x-6 text-gray-600 text-base md:text-lg font-semibold">
        {navLinks.map((item, index) => (
          item.dropdown ? (
            <motion.li 
              key={index} 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <button 
                ref={buttonRef}
                onClick={toggleBenefitsMenu} 
                className="flex items-center gap-1 hover:text-orange-500 transition-colors"
                aria-expanded={isBenefitsOpen}
              >
                {item.name} <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isBenefitsOpen && (
                  <motion.ul 
                    ref={dropdownRef}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {item.dropdown.map((benefit, idx) => (
                      <motion.li 
                        key={idx} 
                        className="px-4 py-2 hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Link href={benefit.href}>{benefit.name}</Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ) : (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href ?? '/'} className="hover:text-orange-500 transition-colors">
                {item.name}
              </Link>
            </motion.li>
          )
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu} 
        className="md:hidden text-gray-600 focus:outline-none z-50"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Links */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 left-0 w-full bg-orange-100 shadow-lg rounded-b-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <ul className="flex flex-col space-y-2 p-4 text-gray-600 text-base font-semibold">
              {navLinks.map((item, index) => (
                item.dropdown ? (
                  <motion.li 
                    key={index} 
                    className="relative cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <button 
                      onClick={toggleBenefitsMenu} 
                      className="flex items-center gap-1 hover:text-orange-500 transition-colors w-full"
                    >
                      {item.name} <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {isBenefitsOpen && (
                        <motion.ul 
                          className="ml-4 mt-2 bg-white shadow-lg rounded-lg py-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {item.dropdown.map((benefit, idx) => (
                            <motion.li 
                              key={idx} 
                              className="px-4 py-2 hover:bg-gray-200 transition-colors"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Link 
                                href={benefit.href} 
                                onClick={toggleMobileMenu}
                                className="block w-full"
                              >
                                {benefit.name}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ) : (
                  <motion.li 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link 
                      href={item.href ?? '/'} 
                      onClick={toggleMobileMenu} 
                      className="hover:text-orange-500 transition-colors block w-full"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                )
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;