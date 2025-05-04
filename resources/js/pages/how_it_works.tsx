
import React from 'react';
import AppLayoutTemplate from '@/layouts/app/app-menu-layout';
import { Head } from '@inertiajs/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';


const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
        <AppLayoutTemplate>
             <Head title={t('how_it_works')} />
             <div className="container mx-auto px-4 py-16">

<div className="text-center mt-20 mb-12">
  <h1 className="text-3xl font-bold mb-4 text-[hsl(var(--xh-black-2))]">
    {t('how_it_works')}
  </h1>
  <p className="text-lg text-[hsl(var(--xh-gray-600))] max-w-2xl mx-auto">
    {t('how_blockchain_works')}
  </p>
</div>

<div className="max-w-3xl mx-auto">
  <div className="space-y-12">

    {/* Step 1 */}
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-[hsl(var(--xh-blue))] text-[hsl(var(--xh-white))] flex items-center justify-center text-2xl font-bold">1</div>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--xh-blue))]">
          {t('step1_title')}
        </h2>
        <p className="text-[hsl(var(--xh-gray-700))] mb-4">
          {t('step1_description_1')}
        </p>
        <p className="text-[hsl(var(--xh-gray-700))]">
          {t('step1_description_2')}
        </p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-[hsl(var(--xh-green))] text-[hsl(var(--xh-white))] flex items-center justify-center text-2xl font-bold">2</div>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--xh-green))]">
          {t('step2_title')}
        </h2>
        <p className="text-[hsl(var(--xh-gray-700))] mb-4">
          {t('step2_description_1')}
        </p>
        <p className="text-[hsl(var(--xh-gray-700))]">
          {t('step2_description_2')}
        </p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-[hsl(var(--xh-blue))] text-[hsl(var(--xh-white))] flex items-center justify-center text-2xl font-bold">3</div>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--xh-blue))]">
          {t('step3_title')}
        </h2>
        <p className="text-[hsl(var(--xh-gray-700))] mb-4">
          {t('step3_description_1')}
        </p>
        <p className="text-[hsl(var(--xh-gray-700))]">
          {t('step3_description_2')}
        </p>
      </div>
    </div>

    {/* Step 4 */}
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-[hsl(var(--xh-green))] text-[hsl(var(--xh-white))] flex items-center justify-center text-2xl font-bold">4</div>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-3 text-[hsl(var(--xh-green))]">
          {t('step4_title')}
        </h2>
        <p className="text-[hsl(var(--xh-gray-700))] mb-4">
          {t('step4_description_1')}
        </p>
        <p className="text-[hsl(var(--xh-gray-700))]">
          {t('step4_description_2')}
        </p>
      </div>
    </div>
  </div>

  <div className="mt-12 pt-8 border-t border-[hsl(var(--xh-gray-200))] text-center">
    <h2 className="text-2xl font-bold mb-6">
      {t('ready_to_start')}
    </h2>
    <Button className="bg-[hsl(var(--xh-blue))] hover:bg-opacity-90 text-lg px-8 py-6">
      {t('explore_packs')}
    </Button>
  </div>
</div></div>

        </AppLayoutTemplate>
  );
};

export default HowItWorks;
