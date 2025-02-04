"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LineShadowText } from "./ui/line-shadow-text";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
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

const Navbar = () => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleBenefitsMenu = () => {
    setIsBenefitsOpen(!isBenefitsOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-50 px-4 py-3 md:px-6 md:py-4 shadow-md bg-orange-100">
      {/* Logo */}
      <Link href="/"></Link>

        <h1 className="text-balance text-3xl md:text-4xl font-semibold leading-none tracking-tighter">
          Code
          <LineShadowText className="italic" shadowColor={shadowColor}>
            Kid
          </LineShadowText>
        </h1>
      </a>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-4 md:space-x-6 text-gray-600 text-base md:text-lg font-semibold">
        {navLinks.map((item, index) => (
          item.dropdown ? (
            <motion.li 
              key={index} 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <button onClick={toggleBenefitsMenu} className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                {item.name} <ChevronDown className="w-4 h-4" />
              </button>
              {isBenefitsOpen && (
                <motion.ul 
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {item.dropdown.map((benefit, idx) => (
                    <motion.li 
                      key={idx} 
                      className="px-4 py-2 hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Link href={benefit.href}>{benefit.name}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
          ) : (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.1, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href} className="hover:text-orange-500 transition-colors">
                {item.name}
              </Link>
            </motion.li>
          )
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-gray-600 focus:outline-none">
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-16 left-0 w-full bg-orange-100 shadow-lg rounded-b-lg max-h-[calc(100dvh - 4rem)] overflow-y-auto"
        >
          <ul className="flex flex-col space-y-2 md:space-y-4 p-4 md:p-6 text-gray-600 text-base md:text-lg font-semibold">
            {navLinks.map((item, index) => (
              item.dropdown ? (
                <motion.li 
                  key={index} 
                  className="relative cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <button onClick={toggleBenefitsMenu} className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                    {item.name} <ChevronDown className="w-4 h-4" />
                  </button>
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
                          whileHover={{ scale: 1.1 }}
                        >
                          <Link href={benefit.href} onClick={toggleMobileMenu}>{benefit.name}</Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.li>
              ) : (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link href={item.href} onClick={toggleMobileMenu} className="hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                </motion.li>
              )
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
