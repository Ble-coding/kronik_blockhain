
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const Simulator = () => {
  const { language } = useLanguage();
  const [monthlyCost, setMonthlyCost] = useState<number>(0);
  const [healthScore, setHealthScore] = useState<number>(0);

  const calculateRewards = () => {
    const baseReward = monthlyCost * 0.1;
    const healthBonus = healthScore > 70 ? monthlyCost * 0.05 : 0;
    return baseReward + healthBonus;
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-6 w-6" />
          {language === 'fr' ? 'Simulateur de récompenses' : 'Rewards Simulator'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>
            {language === 'fr' ? 'Coût mensuel (XH-CFA)' : 'Monthly cost (XH-CFA)'}
          </Label>
          <Input
            type="number"
            min="0"
            value={monthlyCost}
            onChange={(e) => setMonthlyCost(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <Label>
            {language === 'fr' ? 'Score de santé' : 'Health Score'} (0-100)
          </Label>
          <Input
            type="number"
            min="0"
            max="100"
            value={healthScore}
            onChange={(e) => setHealthScore(Number(e.target.value))}
          />
        </div>

        <div className="pt-4 border-t">
          <p className="text-lg font-semibold">
            {language === 'fr' ? 'Récompenses estimées' : 'Estimated rewards'}:
            <span className="text-xh-green ml-2">
              {calculateRewards().toFixed(2)} XH
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Simulator;
