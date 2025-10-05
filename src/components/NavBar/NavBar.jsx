'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#creative-archive', label: 'Creative Archive' },
    { href: '#collaborations-and-impact', label: 'Collaborations & Impact' },
    { href: '#about', label: 'About Me' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-2xl">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/aroan-logo.svg" alt="Aroan's logo" className="h-auto w-20" />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex space-x-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink href={item.href} className="transition-colors duration-300">
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 pb-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 text-shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default NavBar
