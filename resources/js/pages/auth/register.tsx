import React, { FormEventHandler } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, UserPlus } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import AuthLayout from '@/layouts/auth-layout';

type RegisterForm = {
    name: string;
//   last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function Register() {
  const { t } = useLanguage();

  const { data, setData, post, processing, errors, reset } = useForm<RegisterForm>({
    name: '',
    // last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <AuthLayout title={t('register_connect')} description={t('register_desc')}>
      <Head title={t('signup')} />

      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="h-6 w-6" />
              {t('signup')}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form className="space-y-4" onSubmit={submit}>
            <div className="space-y-2">
                <Label htmlFor="name">{t('full_name')}</Label>
                <Input
                  id="name"
                  type="text"
                    className="focus-visible:ring-[hsl(var(--xh-green))] focus-visible:border-[hsl(var(--xh-green))]"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  disabled={processing}
                  autoComplete="name"
                placeholder="John Doe"
                  required
                />
                <InputError message={errors.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
              className="focus-visible:ring-[hsl(var(--xh-green))] focus-visible:border-[hsl(var(--xh-green))]"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  disabled={processing}
                  autoComplete="email"
                  placeholder="email@example.com"
                  required
                />
                <InputError message={errors.email} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t('password')}</Label>
                <Input
                  id="password"
                  type="password"
                    className="focus-visible:ring-[hsl(var(--xh-green))] focus-visible:border-[hsl(var(--xh-green))]"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  disabled={processing}
                  autoComplete="new-password"
                  placeholder="********"
                  required
                />
                <InputError message={errors.password} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password_confirmation">{t('confirm_password')}</Label>
                <Input
                  id="password_confirmation"
                  type="password"
                    className="focus-visible:ring-[hsl(var(--xh-green))] focus-visible:border-[hsl(var(--xh-green))]"
                  value={data.password_confirmation}
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                  disabled={processing}
                  autoComplete="new-password"
                  placeholder="********"
                  required
                />
                <InputError message={errors.password_confirmation} />
              </div>

              <Button type="submit" className="w-full
              bg-[hsl(var(--xh-green))] hover:bg-[hsl(var(--color-text-3))]
              " disabled={processing}>
                {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                {t('signup')}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                {t('already_have_account')}{' '}
                <TextLink href={route('login')} className="text-[hsl(var(--xh-blue))] hover:underline">
                  {t('login')}
                </TextLink>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}
