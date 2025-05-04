import React, { useState, useEffect } from 'react'
import { usePage, Link } from '@inertiajs/react'
import { Lock, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import AppLogo from '@/components/app-logo'
import LanguageSelector from '@/components/language-selector'
import { useLanguage} from '@/contexts/LanguageContext';



type User = {
  id: number
  name: string
  email: string
}

type PageProps = {
  auth: {
    user: User | null
  }
}


export function AppMenu() {
    const { t } = useLanguage();
  const { props, url } = usePage<PageProps>()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { auth } = props


const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('health_packs'), href: '/health-packs' },
    { name: t('about_blockchain'), href: '/blockchain' },
    { name: t('how_it_works'), href: '/how-it-works' },
    { name: t('contact'), href: '/contact' },
  ]

  const isActive = (href: string) => {
    return href === '/' ? url === '/' : url.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [url])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 dark:bg-[#070504]/90 backdrop-blur-md shadow-sm'
          : 'bg-white dark:bg-[#070504]'
      )}
    >
      <div className="container flex items-center justify-between">
      <AppLogo />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={ cn(
                'py-2 font-bold  text-[hsl(var(--color-text-2))] hover:text-[hsl(var(--color-hover))]',
                isActive(link.href) && 'text-[hsl(var(--color-active))]'
              )}

            >
              {link.name}
            </Link>
          ))}

<LanguageSelector />

          {!auth.user && (
            <>
              <Button
                variant="outline"
                size="sm"
                className="border-[hsl(var(--xh-blue))] text-[hsl(var(--xh-blue))] hover:bg-[hsl(var(--xh-blue))] hover:text-white"
                asChild
              >
                <a href={route('login')} target="_blank">
                  Se connecter
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-[hsl(var(--xh-green))] text-[hsl(var(--color-text-2))] hover:bg-[hsl(var(--xh-green))/0.9]"
                asChild
              >
                <a href={route('register')} target="_blank">
                  S’inscrire
                </a>
              </Button>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[hsl(var(--xh-blue))]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#070504] backdrop-blur-lg shadow-md animate-fade-in">
          <nav className="container py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                    'py-2 px-4 rounded-md font-medium text-[hsl(var(--color-text-2))] hover:text-[hsl(var(--color-hover))]',
                    isActive(link.href) && 'text-[hsl(var(--color-active))]'
                  )}
              >
                {link.name}
              </Link>
            ))}

<LanguageSelector />
            {!auth.user ? (
              <a
                href={route('login')}
                target="_blank"
                className="py-2 px-4 rounded-md font-medium flex items-center text-[hsl(var(--xh-blue))] border border-[hsl(var(--xh-blue))/0.3] hover:bg-[hsl(var(--xh-blue))/0.1]"
              >
                <Lock className="w-4 h-4 mr-2" /> Se connecter
              </a>
            ) : (
              <Link
                href={route('dashboard')}
                className="py-2 px-4 rounded-md font-medium flex items-center text-[hsl(var(--xh-blue))] border border-[hsl(var(--xh-blue))/0.3] hover:bg-[hsl(var(--xh-blue))/0.1]"
              >
                <Lock className="w-4 h-4 mr-2" /> Admin
              </Link>
            )}

            {!auth.user && (
              <a
                href={route('register')}
                target="_blank"
                className="py-2 px-4 rounded-md font-medium text-white bg-[hsl(var(--xh-green))] hover:bg-[hsl(var(--xh-green))/0.9] text-center"
              >
                S’inscrire
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
