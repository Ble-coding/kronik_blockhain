
import React from 'react';
import AppLayoutTemplate from '@/layouts/app/app-menu-layout';
import { Head } from '@inertiajs/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';

const Wallet: React.FC = () => {
  const { t } = useLanguage();

  const transactions: Transaction[] = [
    { id: 1, date: '2023-05-01', amount: '120 XH-CFA', type: 'payment', description: 'Monthly Health Pack' },
    { id: 2, date: '2023-04-28', amount: '45 XH', type: 'reward', description: 'Health Score Bonus' },
    { id: 3, date: '2023-04-25', amount: '200 XH-CFA', type: 'payment', description: 'Medication' },
    { id: 4, date: '2023-04-20', amount: '30 XH', type: 'reward', description: 'Regular Checkup' },
    { id: 5, date: '2023-04-15', amount: '500 XH-CFA', type: 'deposit', description: 'Wallet Top-up' },
  ];
  type TransactionType = 'payment' | 'reward' | 'deposit';

  type Transaction = {
    id: number;
    date: string;
    amount: string;
    type: TransactionType;
    description: string;
  };

  const getTransactionIcon = (type: TransactionType) => {
    switch (type) {
      case 'payment':
        return { icon: <ArrowUpRight className="h-4 w-4" />, color: 'text-red-500 bg-red-100' };
      case 'reward':
        return { icon: <ArrowDownLeft className="h-4 w-4" />, color: 'text-green-500 bg-green-100' };
      case 'deposit':
        return { icon: <ArrowDownLeft className="h-4 w-4" />, color: 'text-blue-500 bg-blue-100' };
      default:
        return { icon: <Clock className="h-4 w-4" />, color: 'text-gray-500 bg-gray-100' };
    }
  };



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
        <Card className="md:col-span-2 overflow-hidden">
        <div className="bg-gradient-to-r from-[hsl(var(--xh-blue))] to-[hsl(var(--xh-green))] p-6">

            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=250&q=80"
              alt="Wallet card"
              className="absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay opacity-20"
            />
            <div className="relative">
              <h3 className="text-white text-lg font-medium mb-1">Digital Health Wallet</h3>
              <p className="text-white/80 text-sm mb-4">John Doe • ID: XH-12345</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-white/80 text-sm">{t('xh_balance')}</p>
                  <p className="text-white text-2xl font-bold">120 XH</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm">{t('xh_cfa_balance')}</p>
                  <p className="text-white text-2xl font-bold">5,000 XH-CFA</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>{t('transaction_history')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="rewards">Rewards</TabsTrigger>
                <TabsTrigger value="deposits">Deposits</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {transactions.map((transaction) => {
                  const { icon, color } = getTransactionIcon(transaction.type);
                  return (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2.5 rounded-full ${color}`}>
                          {icon}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <p className={`font-medium ${transaction.type === 'payment' ? 'text-red-500' : 'text-green-500'}`}>
                        {transaction.type === 'payment' ? '-' : '+'}{transaction.amount}
                      </p>
                    </div>
                  );
                })}
              </TabsContent>

              <TabsContent value="payments" className="space-y-4">
                {transactions.filter(t => t.type === 'payment').map((transaction) => {
                  const { icon, color } = getTransactionIcon(transaction.type);
                  return (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2.5 rounded-full ${color}`}>
                          {icon}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <p className="font-medium text-red-500">-{transaction.amount}</p>
                    </div>
                  );
                })}
              </TabsContent>

              {/* Les autres TabsContent suivent le même modèle */}
              <TabsContent value="rewards" className="space-y-4">
                {transactions.filter(t => t.type === 'reward').map((transaction) => {
                  const { icon, color } = getTransactionIcon(transaction.type);
                  return (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2.5 rounded-full ${color}`}>
                          {icon}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <p className="font-medium text-green-500">+{transaction.amount}</p>
                    </div>
                  );
                })}
              </TabsContent>

              <TabsContent value="deposits" className="space-y-4">
                {transactions.filter(t => t.type === 'deposit').map((transaction) => {
                  const { icon, color } = getTransactionIcon(transaction.type);
                  return (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2.5 rounded-full ${color}`}>
                          {icon}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <p className="font-medium text-blue-500">+{transaction.amount}</p>
                    </div>
                  );
                })}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full">Top up Wallet</Button>
            <Button variant="outline" className="w-full">Convert XH to XH-CFA</Button>
            <Button variant="outline" className="w-full">Pay for Services</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&h=180&q=80"
              alt="Health rewards"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <p className="text-sm mb-4">
              Earn XH tokens by maintaining a good health score and completing health-related activities.
            </p>
            <Separator className="my-4" />
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Current Score</span>
                <span className="font-medium">85/100</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Pending Rewards</span>
                <span className="font-medium text-green-500">+15 XH</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Next Reward</span>
                <span className="font-medium">May 15, 2023</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">View Details</Button>
          </CardContent>
        </Card>
      </div>
    </div>
        </AppLayoutTemplate>
  );
};

export default Wallet;
