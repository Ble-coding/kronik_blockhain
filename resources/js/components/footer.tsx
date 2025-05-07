import React from 'react';
import { Link } from '@inertiajs/react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(var(--color-bg))] text-[hsl(var(--color-text))]  py-10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
          <Link href="/" className="inline-block mb-4">
  <span className="block dark:hidden">
    <img
      src="/logo.png"
      alt="XH Health Logo"
      className="h-12 bg-white p-1 rounded"
    />
  </span>
  <span className="hidden dark:block">
    <img
      src="/logo-dark.png"
      alt="XH Health Logo Dark"
      className="h-12 bg-[hsl(var(--color-xh-black))] p-1 rounded"
    />
  </span>
</Link>

            <p className="text-sm opacity-80 mt-2">
              KRONIKS-X HEALTH - Blockchain solutions for chronic disease care management
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('navigation')}</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link href="/" className="text-sm opacity-80 hover:opacity-100">{t('home')}</Link>
              <Link href="/health-packs" className="text-sm opacity-80 hover:opacity-100">{t('health_packs')}</Link>
              <Link href="/blockchain" className="text-sm opacity-80 hover:opacity-100">{t('about_blockchain')}</Link>
              <Link href="/how-it-works" className="text-sm opacity-80 hover:opacity-100">{t('how_it_works')}</Link>
              <Link href="/simulator" className="text-sm opacity-80 hover:opacity-100">{t('simulator')}</Link>
              <Link href="/contact" className="text-sm opacity-80 hover:opacity-100">{t('contact')}</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p>Email: contact@xh-health.com</p>
              <p>Tel: +123 456 789</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} KRONIKS-X HEALTH. {t('all_rights_reserved')}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm opacity-70 hover:opacity-100">
              {t('privacy_policy')}
            </Link>
            <Link href="/terms" className="text-sm opacity-70 hover:opacity-100">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
