
import React from 'react';
import AppLayoutTemplate from '@/layouts/app/app-menu-layout';
import { Head } from '@inertiajs/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet as WalletIcon } from 'lucide-react';

const Wallet: React.FC = () => {
  const { t } = useLanguage();

  return (
        <AppLayoutTemplate>
             <Head title={t('wallet')} />
             <div className="container mx-auto px-4 py-8">

        <div className="text-center mt-20 mb-12">
          <h1 className="text-3xl font-bold mb-4 text-[hsl(var(--xh-black-2))]">
            {t('wallet')}
          </h1>
          <p className="text-lg text-[hsl(var(--xh-gray-600))]">
            {t('xh_balance')}
          </p>
        </div>
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <WalletIcon className="h-6 w-6" />
        {t('wallet')}
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('xh_balance')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[hsl(var(--xh-green))]">0.00 XH</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('xh_cfa_balance')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[hsl(var(--xh-blue))]">0.00 XH-CFA</p>
          </CardContent>
        </Card>
      </div>
    </div>
        </AppLayoutTemplate>
  );
};

export default Wallet;
