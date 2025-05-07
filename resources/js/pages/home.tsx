import AppLayoutTemplate from '@/layouts/app/app-menu-layout';
import { Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { type BreadcrumbItem } from '@/types';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Shield, Award, Globe, Hospital } from 'lucide-react';
import HealthPackCardList from '@/components/health-pack-card-list';
import type { HealthPack } from '@/types/health';
import { Checkbox } from '@/components/ui/checkbox';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: '/dashboard' },
];

export default function Home() {
  const { t } = useLanguage();
    const { toast } = useToast();
 const [useXHToken, setUseXHToken] = useState(true);

  const packs: HealthPack[] = [
    {
      id: '1',
      title: t('basic_pack'),
      price: useXHToken ? '10 XH' : '6 000 CFA',
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
      price: useXHToken ? '25 XH' : '12 000 CFA',
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
      price: useXHToken ? '40 XH' : '20 000 CFA',
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
      price: useXHToken ? '60 XH' : '25 000 CFA',
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
    <AppLayoutTemplate breadcrumbs={breadcrumbs}>
      <Head title={t('home')} />

      <section className="xh-gradient text-[hsl(var(--color-text))] py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl  mt-7 font-bold mb-6 animate-fade-in">
            {t('hero_title')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-10 animate-fade-in">
            {t('hero_subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {/* Bouton principal */}
            <Button
                asChild
                className="bg-[hsl(var(--hero-button-bg))] text-[hsl(var(--hero-button-text))] hover:bg-[hsl(var(--hero-button-hover))] font-semibold px-8 py-6 text-lg"
            >
                <Link href="/health-packs">{t('get_started')}</Link>
            </Button>

            {/* Bouton secondaire */}
            <Button
                asChild
                variant="outline"
                className="border-[hsl(var(--color-text))] text-[hsl(var(--color-text-2))] hover:bg-white/10 px-8 py-6 text-lg"
            >
                <Link href="/how-it-works">{t('learn_more')}</Link>
            </Button>
            </div>
        </div>
        </section>


      {/* Benefits Section */}
      <section className="py-16 bg-[hsl(var(--color-bg-2))]">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--color-text-2))]">
            Blockchain XH <span className="text-[hsl(var(--xh-green))]">Benefits</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-[hsl(var(--color-card-bg))] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-[hsl(var(--xh-blue))] mb-4">
                <Shield size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--color-text-2))]">{t('secure_payments')}</h3>
                <p className="text-[hsl(var(--color-paragraph))]">{t('secure_payments_desc')}</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[hsl(var(--color-card-bg))] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-[hsl(var(--xh-green))] mb-4">
                <Award size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--color-text-2))]">{t('reward_system')}</h3>
                <p className="text-[hsl(var(--color-paragraph))]">{t('reward_system_desc')}</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[hsl(var(--color-card-bg))] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-[hsl(var(--xh-blue))] mb-4">
                <Globe size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--color-text-2))]">{t('financial_inclusion')}</h3>
                <p className="text-[hsl(var(--color-paragraph))]">{t('financial_inclusion_desc')}</p>
            </div>

            {/* Card 4 */}
            <div className="bg-[hsl(var(--color-card-bg))] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-[hsl(var(--xh-green))] mb-4">
                <Hospital size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--color-text-2))]">{t('health_tracking')}</h3>
                <p className="text-[hsl(var(--color-paragraph))]">{t('health_tracking_desc')}</p>
            </div>
            </div>
        </div>
    </section>


    <section className="py-16 bg-[hsl(var(--color-bg-2))] dark:bg-[hsl(var(--color-bg))] transition-colors">
    <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-[hsl(var(--xh-black))] dark:text-[hsl(var(--color-text))]">
            {t('health_pack_title')}
        </h2>
        <p className="text-lg text-[hsl(var(--color-paragraph))] dark:text-[hsl(var(--color-text))] max-w-2xl mx-auto">
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

        <div className="text-center mt-10">
        <Link
            href="/health-packs"
            className="inline-block px-6 py-2 border rounded-md font-medium transition
            border-[hsl(var(--xh-blue))] text-[hsl(var(--xh-blue))]
            hover:bg-[hsl(var(--xh-blue))] hover:text-white
            dark:border-[hsl(var(--xh-white))] dark:text-[hsl(var(--xh-white))]
            dark:hover:bg-[hsl(var(--xh-green))] dark:hover:text-[hsl(var(--xh-white))]"
        >
            {t('view_all_packs')}
        </Link>
        </div>
    </div>
    </section>

    </AppLayoutTemplate>
  );
}
