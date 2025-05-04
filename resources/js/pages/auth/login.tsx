import React, { FormEventHandler } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, LogIn } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type LoginForm = {
  email: string;
  password: string;
  remember: boolean;
};

interface LoginProps {
  status?: string;
  canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
  const { t } = useLanguage();

  const { data, setData, post, processing, errors, reset } = useForm<LoginForm>({
    email: '',
    password: '',
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <AuthLayout title={t('login_connect')} description={t('login_desc')}>
      <Head title={t('login')} />

      {status && (
        <div className="mb-4 text-center text-sm font-medium text-green-600 dark:text-green-400">
          {status}
        </div>
      )}

    <div className="flex flex-col gap-6">
        <Card>
               <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <LogIn className="h-6 w-6" />
                          {t('login')}
                        </CardTitle>
                      </CardHeader>

           <CardContent>
                <form onSubmit={submit} className="space-y-6">
                    <div className="space-y-2">
                    <Label htmlFor="email">{t('email')}</Label>
                    <Input
                        id="email"
                        type="email"
                          className="focus-visible:ring-[hsl(var(--xh-green))] focus-visible:border-[hsl(var(--xh-green))]"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        disabled={processing}
                        autoComplete="email"
                        required
                        placeholder="email@example.com"
                    />
                    <InputError message={errors.email} />
                    </div>

                    <div className="space-y-2">
                    <div className="flex items-center
                     justify-between">
                        <Label htmlFor="password">{t('password')}</Label>
                        {canResetPassword && (
                        <TextLink href={route('password.request')} className="text-sm">
                            {t('forgot_password')}
                        </TextLink>
                        )}
                    </div>
                    <Input
                        id="password"
                        type="password"
                          className="focus-visible:ring-[hsl(var(--xh-green))] focus-visible:border-[hsl(var(--xh-green))]"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        disabled={processing}
                        autoComplete="current-password"
                        required
                        placeholder="********"
                    />
                    <InputError message={errors.password} />
                    </div>

                    <div className="flex items-center space-x-2">
                    <Checkbox
                        id="remember"
                        checked={data.remember}
                        onCheckedChange={(checked) => setData('remember', !!checked)}
                        disabled={processing}
                    />
                    <Label htmlFor="remember">{t('remember_me')}</Label>
                    </div>

                    <Button
                    type="submit"
                    className="w-full bg-[hsl(var(--xh-green))] hover:bg-[hsl(var(--color-text-3))]"
                    disabled={processing}
                    >
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                    {t('login')}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                    {t('no_account')}{' '}
                    <TextLink href={route('register')} className="text-[hsl(var(--xh-blue))] hover:underline">
                        {t('signup')}
                    </TextLink>
                    </p>
                </form>
            </CardContent>
        </Card>
    </div>
    </AuthLayout>
  );
}
