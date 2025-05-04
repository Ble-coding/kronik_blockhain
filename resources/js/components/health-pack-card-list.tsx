// resources/js/components/HealthPackCardList.tsx
import type { HealthPack } from '@/types/health';
import React from 'react';



interface Props {
  packs: HealthPack[];
  t: (key: string) => string;
  onBuy: (pack: HealthPack) => void;
}

const HealthPackCardList: React.FC<Props> = ({ packs, t, onBuy }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {packs.map((pack, idx) => (
        <div
          key={idx}
          className={`border rounded-lg overflow-hidden transition-shadow hover:shadow-lg ${
            pack.isFeatured
              ? 'border-[hsl(var(--xh-green))] border-2'
              : 'border-gray-200 dark:border-neutral-700'
          } bg-[hsl(var(--color-card-bg))] dark:bg-[hsl(var(--color-card-bg))]`}
        >
          <div
            className={`p-4 text-center ${
              pack.isFeatured
                ? 'bg-[hsl(var(--xh-green))] text-[hsl(var(--xh-white))]'
                : 'bg-[hsl(var(--color-card-bg))] dark:bg-[hsl(var(--color-bg))] dark:text-[hsl(var(--color-text))]'
            }`}
          >
            <h3
              className={`text-xl font-semibold ${
                !pack.isFeatured
                  ? `text-[hsl(var(--${pack.color}))] dark:text-[hsl(var(--color-text))]`
                  : ''
              }`}
            >
              {pack.title}
            </h3>
            <div className="mt-2 text-2xl font-bold">
              {pack.price}{' '}
              <span className="text-sm font-normal opacity-80 dark:opacity-100">
                {t('monthly')}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4 text-[hsl(var(--color-text-2))] dark:text-[hsl(var(--color-text))]">
            {pack.features.map((feature, i) => (
              <p key={i} className="flex items-center">
                <span className="font-semibold mr-2">{feature.value}</span> {feature.label}
              </p>
            ))}
            <button
              onClick={() => onBuy(pack)}
              className={`w-full py-2 px-4 font-medium rounded-md transition ${
                pack.color === 'xh-green'
                  ? 'bg-[hsl(var(--xh-green))]'
                  : 'bg-[hsl(var(--xh-blue-2))]'
              } text-[hsl(var(--xh-white))] hover:opacity-90`}
            >
              {t('buy_now')}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthPackCardList;
