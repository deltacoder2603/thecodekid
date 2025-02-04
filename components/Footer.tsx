"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  LinkedinIcon as LinkedIn,
  YoutubeIcon as YouTube,
} from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription here
    console.log("Subscribed:", email)
    setEmail("")
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/yourcompany" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/yourcompany" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/yourcompany" },
    { name: "LinkedIn", icon: LinkedIn, url: "https://linkedin.com/company/yourcompany" },
    { name: "YouTube", icon: YouTube, url: "https://youtube.com/c/yourcompany" },
  ]

  return (
    <footer className="bg-orange-100 text-orange-900">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-3xl font-bold mb-6 md:mb-0 text-center md:text-left">
              Ready to Build a Coding Culture?
              <br />
              <span className="text-orange-200">Let's Connect Today!</span>
            </h2>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button
                variant="secondary"
                className="w-full md:w-auto bg-white text-orange-600 hover:bg-orange-100 rounded-xl transition-transform hover:scale-105"
              >
                Partner with Us
              </Button>
              <Button
                variant="outline"
                className="w-full md:w-auto border-white text-white hover:bg-orange-500 rounded-xl transition-transform hover:scale-105"
              >
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">Quick Links</h3>
            <ul className="space-y-2">
              {["Programs", "NEP 2020", "Resources", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-orange-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-orange-600" />
                info@example.com
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-orange-600" />
                +1 (123) 456-7890
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-orange-600" />
                123 Coding Street, Tech City, 12345
              </li>
            </ul>
          </div>

          {/* Social Proof */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">As Seen In</h3>
            <ul className="space-y-2">
              {["TechCrunch", "Forbes", "EdTech Magazine", "Coding Weekly"].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white text-orange-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-colors duration-200"
              >
                Subscribe <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 transition-colors duration-200"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-orange-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>

            {/* Legal */}
            <div className="mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm hover:text-orange-600 transition-colors duration-200 mr-4"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-orange-600 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

