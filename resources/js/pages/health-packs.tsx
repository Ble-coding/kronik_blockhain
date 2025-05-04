import React, { useState } from 'react';
import AppLayoutTemplate from '@/layouts/app/app-menu-layout';
import { Head } from '@inertiajs/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import type { HealthPack } from '@/types/health';
import HealthPackCardList from '@/components/health-pack-card-list';

const HealthPacks: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [useXHToken, setUseXHToken] = useState(true);

  const packs: HealthPack[] = [
    {
      id: '1',
      title: t('basic_pack'),
      price: '10 XH',
      color: 'xh-blue',
      features: [
        { value: '2', label: t('consultations') },
        { value: '5', label: t('medications') },
        { value: '1', label: t('tests') },
      ],
    },
    {
      id: '2',
      title: t('premium_pack'),
      price: '25 XH',
      color: 'xh-green',
      isFeatured: true,
      features: [
        { value: '5', label: t('consultations') },
        { value: '15', label: t('medications') },
        { value: '3', label: t('tests') },
      ],
    },
    {
      id: '3',
      title: t('family_pack'),
      price: '40 XH',
      color: 'xh-blue',
      features: [
        { value: '10', label: t('consultations') },
        { value: '30', label: t('medications') },
        { value: '5', label: t('tests') },
      ],
    },
    {
      id: '4',
      title: t('chronic_care_pack'),
      price: '60 XH',
      color: 'xh-blue',
      features: [
        { value: t('unlimited'), label: t('consultations') },
        { value: t('unlimited'), label: t('medications') },
        { value: '10', label: t('tests') },
      ],
    },
  ];

  const handlePurchase = (pack: HealthPack) => {
    toast({
      title: t('pack_selected'),
      description: `${t('you_selected')} ${pack.title} ${t('for')} ${pack.price} ${useXHToken ? 'XH' : 'CFA'}.`,
      duration: 5000,
    });
  };

  return (
    <AppLayoutTemplate>
      <Head title={t('health_packs')} />
      <div className="container mx-auto px-4 py-16">
      <div className="text-center mt-20 mb-6">
  <h1 className="text-3xl font-bold mb-4 text-[hsl(var(--color-text-2))]">
    {t('health_pack_title')}
  </h1>
  <p className="text-lg text-[hsl(var(--color-gray-600))] max-w-2xl mx-auto">
    {t('health_pack_subtitle')}
  </p>
</div>


        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="token-payment"
              checked={useXHToken}
              onCheckedChange={() => setUseXHToken(!useXHToken)}
            />
            <Label htmlFor="token-payment">
              {useXHToken ? t('pay_with_token') : t('pay_with_cfa')}
            </Label>
          </div>
        </div>

        {/* Composant réutilisable */}
        <HealthPackCardList packs={packs} t={t} onBuy={handlePurchase} />

        <div className="mt-16 bg-[hsl(var(--color-card-bg-2))] p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--color-text-2))]">
            {t('xh_blockchain_title')}
          </h2>
          <p className="text-[hsl(var(--color-gray-600))] mb-6">
            {t('blockchain_info')}
          </p>
          <ul className="space-y-3 text-[hsl(var(--color-gray-700))]">
            <li className="flex items-start gap-2">
              <span className="font-semibold">•</span> {t('secure_payment')}
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">•</span> {t('package_auto_registered')}
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">•</span> {t('riskpool_monitors')}
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">•</span> {t('earn_tokens')}
            </li>
          </ul>
        </div>
      </div>
    </AppLayoutTemplate>
  );
};

export default HealthPacks;
