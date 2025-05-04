
import React from 'react';
import AppLayoutTemplate from '@/layouts/app/app-menu-layout';
import { Head } from '@inertiajs/react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/contact-form';


const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
        <AppLayoutTemplate>
             <Head title={t('contact')} />
             <div className="container mx-auto px-4 py-16">

{/* <div className="text-center mt-20 mb-12">
  <h1 className="text-3xl font-bold mb-4 text-[hsl(var(--xh-black-2))]">
    {t('how_it_works')}
  </h1>
  <p className="text-lg text-[hsl(var(--xh-gray-600))] max-w-2xl mx-auto">
    {t('how_blockchain_works')}
  </p>
</div> */}

<div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-[hsl(var(--xh-black-2))]">
            {t('title')}
          </h1>
          <p className="text-lg text-[hsl(var(--xh-gray-600))]">
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-6 text-[hsl(var(--color-active))]">
              {t('send_message')}
            </h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6 text-[hsl(var(--color-hover))]">
              {t('contact_info')}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[hsl(var(--xh-black)]">
                  {t('address')}
                </h3>
                <p className="text-[hsl(var(--xh-gray-600))] mt-1">
                  123 Blockchain Way<br />
                  Health District<br />
                  10001 Digital City
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[hsl(var(--xh-black)]">{t('email')}</h3>
                <p className="text-[hsl(var(--xh-gray-600))] mt-1">contact@xh-health.com</p>
              </div>

              <div>
                <h3 className="font-medium text-[hsl(var(--xh-black)]">
                  {t('phone')}
                </h3>
                <p className="text-[hsl(var(--xh-gray-600))] mt-1">+123 456 789</p>
              </div>

              <div className="pt-6">
                <h3 className="font-medium text-[hsl(var(--xh-black)] mb-3">
                  {t('office_hours')}
                </h3>
                <div className="text-[hsl(var(--xh-gray-600))]">
                  <p>
                    {t('monday_friday')}:
                    <span className="ml-2">9:00 - 18:00</span>
                  </p>
                  <p>
                    {t('saturday')}:
                    <span className="ml-2">10:00 - 14:00</span>
                  </p>
                  <p>
                    {t('sunday')}:
                    <span className="ml-2">{t('closed')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

        </AppLayoutTemplate>
  );
};

export default Contact;
