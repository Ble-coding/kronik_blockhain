
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Simulator from '@/components/simulator';
// import { Calculator } from 'lucide-react';
import AppLayoutTemplate from '@/layouts/app/app-menu-layout';
import { Head } from '@inertiajs/react';
import { useLanguage } from '@/contexts/LanguageContext';

const SimulatorPage = () => {
  const { t } = useLanguage();

  return (
      <AppLayoutTemplate>
                 <Head title={t('simulator')} />
    <div className="container mx-auto px-4 py-8">

    <div className="text-center mt-20 mb-12">
          <h1 className="text-3xl font-bold mb-4 text-[hsl(var(--xh-black-2))]">
            {t('simulator')}
          </h1>
          <p className="text-lg text-[hsl(var(--xh-gray-600))]">
            {t('simulator_description')}
          </p>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Simulator />
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{t('how_it_works')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Notre simulateur calcule les récompenses XH Token que vous pourriez gagner
                en fonction de votre score de santé et de vos dépenses mensuelles.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Comment fonctionne le calcul :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Récompense de base : 10% de vos dépenses mensuelles</li>
                  <li>Bonus de santé : 5% supplémentaires si votre score de santé dépasse 70</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Exemples de récompenses</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300&q=80"
              alt="Reward chart"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-medium">{t('monthly_cost')}</th>
                    <th className="text-left py-2 font-medium">{t('health_score')}</th>
                    <th className="text-left py-2 font-medium">{t('estimated_rewards')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">1,000 XH-CFA</td>
                    <td className="py-2">60</td>
                    <td className="py-2">100 XH</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">1,000 XH-CFA</td>
                    <td className="py-2">80</td>
                    <td className="py-2">150 XH</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">2,000 XH-CFA</td>
                    <td className="py-2">60</td>
                    <td className="py-2">200 XH</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">2,000 XH-CFA</td>
                    <td className="py-2">80</td>
                    <td className="py-2">300 XH</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">5,000 XH-CFA</td>
                    <td className="py-2">90</td>
                    <td className="py-2">750 XH</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </AppLayoutTemplate>
  );
};

export default SimulatorPage;
