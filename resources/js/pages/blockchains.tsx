
import React from 'react';
import AppLayoutTemplate from '@/layouts/app/app-menu-layout';
import { Head } from '@inertiajs/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Lock, Shield, Award } from 'lucide-react';

const Blockchain: React.FC = () => {
  const { t } = useLanguage();

  return (
        <AppLayoutTemplate>
             <Head title={t('about_blockchain')} />
            <div className="container mx-auto px-4 py-16">

      <div className="text-center mt-20 mb-12">
  <h1 className="text-3xl font-bold mb-4 text-[hsl(var(--xh-black-2))]">
    {t('blockchain_title')}
  </h1>
  <p className="text-lg text-[hsl(var(--xh-gray-600))] max-w-2xl mx-auto">
    {t('blockchain_subtitle')}
  </p>
</div>



      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--xh-blue))]"> {t('blockchain_title-1')}</h2>
          <p className="text-[hsl(var(--xh-gray-700))] mb-4">
          {t('blockchain_paragraph_1')}
          </p>
          <p className="text-[hsl(var(--xh-gray-700))] mb-4">
          {t('blockchain_paragraph_2')}
          </p>
          <div className="mt-6">
            <Button className="
            bg-[hsl(var(--xh-blue))]
             hover:bg-opacity-90">{t('explore_documentation')}</Button>
          </div>
        </div>

        <div className="
          bg-[hsl(var(--color-bg-3))]
          p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--xh-green))]">{t('blockchain_features')}</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Lock className="text-[hsl(var(--xh-blue))] mt-1 flex-shrink-0" size={20} />
              <span>{t('feature_secure_transactions')}</span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="text-[hsl(var(--xh-green))] mt-1 flex-shrink-0" size={20} />
              <span>{t('feature_borderless_access')}</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="text-[hsl(var(--xh-blue))] mt-1 flex-shrink-0" size={20} />
              <span>{t('feature_privacy_records')}</span>
            </li>
            <li className="flex items-start gap-3">
              <Award className="text-[hsl(var(--xh-green))] mt-1 flex-shrink-0" size={20} />
              <span>{t('feature_token_incentives')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-4
            text-[hsl(var(--xh-blue))]">{t('token_info')}</CardTitle>
            <CardDescription className="text-[hsl(var(--xh-gray-500))]">{t('token_info_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-[hsl(var(--color-text-2))] font-semibold">
                 {t('token_features')}:</h4>
                <ul className="text-[hsl(var(--color-text-2))] list-disc pl-5 mt-2">
                  <li>{t('token_feature_fast_transactions')}</li>
                  <li>{t('token_feature_health_payments')}</li>
                  <li>{t('token_feature_earn_rewards')}</li>
                  <li>{t('token_feature_exchangeable')}</li>
                </ul>
              </div>
              <div className="px-4 py-3 bg-[hsl(var(--color-bg-3))] rounded-md">
                <span className="block text-sm text-[hsl(var(--xh-gray-500))]">
                 {t('current_token_value')}
                </span>
                <span className="font-bold text-lg">{t('token_value')}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-[hsl(var(--xh-blue))]
            text-[hsl(var(--xh-blue))]
             hover:bg-[hsl(var(--xh-blue))]
            hover:text-[hsl(var(--xh-white))]  w-full">
              {t('token_economics')}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="
            text-xl font-semibold mb-4
            text-[hsl(var(--xh-green))]">{t('stable_coin')}</CardTitle>
            <CardDescription className="text-[hsl(var(--xh-gray-500))]">{t('stable_coin_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-[hsl(var(--color-text-2))] font-semibold"> {t('stablecoin_benefits')}:</h4>
                <ul className="text-[hsl(var(--color-text-2))] list-disc pl-5 mt-2">
                  <li>{t('stablecoin_benefit_pegged')}</li>
                  <li>{t('stablecoin_benefit_stable')}</li>
                  <li>{t('stablecoin_benefit_healthcare')}</li>
                  <li>{t('stablecoin_benefit_backed')}</li>
                </ul>
              </div>
              <div className="px-4 py-3 bg-[hsl(var(--color-bg-3))] rounded-md">
                <span className="block text-sm text-[hsl(var(--xh-gray-500))]">{t('reserve_ratio')}</span>
                <span className="font-bold text-lg">{t('reserve_ratio_value')}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-[hsl(var(--xh-green))]
            text-[hsl(var(--xh-green))]
             hover:bg-[hsl(var(--xh-green))]
            hover:text-[hsl(var(--xh-white))] w-full">
              {t('learn_about_stablecoin')}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="
              text-2xl font-semibold mb-4
              text-[hsl(var(--xh-blue))]">{t('risk_pool')}</CardTitle>
            <CardDescription className="text-[hsl(var(--xh-gray-500))]">{t('risk_pool_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-[hsl(var(--color-text-2))]  font-semibold">{t('riskpool_how_it_works')}:</h4>
                <ul className="text-[hsl(var(--color-text-2))] list-disc pl-5 mt-2">
                  <li>{t('riskpool_feature_smart_contracts')}</li>
                  <li>{t('riskpool_feature_fund_distribution')}</li>
                  <li>{t('riskpool_feature_rewards')}</li>
                  <li>{t('riskpool_feature_transparency')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-[hsl(var(--xh-blue))]
            text-[hsl(var(--xh-blue))]
             hover:bg-[hsl(var(--xh-blue))]
            hover:text-[hsl(var(--xh-white))] w-full">
              {t('riskpool_details')}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="
              text-2xl font-semibold mb-4
              text-[hsl(var(--xh-green))]">{t('health_score')}</CardTitle>
            <CardDescription className="text-[hsl(var(--xh-gray-500))]">{t('health_score_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-[hsl(var(--color-text-2))]
                font-semibold">{t('healthscore_components')}:</h4>
                <ul className="text-[hsl(var(--color-text-2))]  list-disc pl-5 mt-2">
                  <li>{t('healthscore_component_medication')}</li>
                  <li>{t('healthscore_component_consultations')}</li>
                  <li>{t('healthscore_component_biomarkers')}</li>
                  <li>{t('healthscore_component_lifestyle')}</li>
                </ul>
              </div>
              <div className="px-4 py-3 bg-[hsl(var(--xh-gray-50))] rounded-md text-center">
                <span className="block text-sm text-[hsl(var(--xh-gray-500))]">{t('higher_score_rewards')}</span>
                <div className="w-full bg-[hsl(var(--xh-gray-200))] rounded-full h-2.5 mt-2">
                  <div className="bg-[hsl(var(--xh-green))] h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-[hsl(var(--xh-green))]
            text-[hsl(var(--xh-green))]
             hover:bg-[hsl(var(--xh-green))]
            hover:text-[hsl(var(--xh-white))] w-full">
              {t('score_calculation')}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
        </AppLayoutTemplate>
  );
};

export default Blockchain;
