import React from 'react';
import { useForm } from '@inertiajs/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textaera';
import { useToast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
 const { t } = useLanguage();
  const { toast } = useToast();

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/contact', {
      onSuccess: () => {
        toast({
          title: t('message_sent'),
          description: t('response_soon'),
          duration: 5000,
        });
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--color-gray-700))] mb-1">
          {t('name')}
        </label>
        <Input
          id="name"
          name="name"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          placeholder={t('your_name')}
        />
        {errors.name && <p className="text-sm text-[hsl(var(--color-red-600))]">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--color-gray-700))] mb-1">
          {t('email')}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          placeholder="example@email.com"
        />
        {errors.email && <p className="text-sm text-[hsl(var(--color-red-600))]">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--color-gray-700))] mb-1">
          {t('message')}
        </label>
        <Textarea
          id="message"
          name="message"
          value={data.message}
          onChange={(e) => setData('message', e.target.value)}
          placeholder={t('your_message')}
          rows={5}
        />
        {errors.message && <p className="text-sm text-[hsl(var(--color-red-600))]">{errors.message}</p>}
      </div>

      <Button type="submit" className="bg-[hsl(var(--xh-blue))] hover:bg-[hsl(var(--xh-green))] w-full" disabled={processing}>
        {t('send')}
      </Button>
    </form>
  );
};

export default ContactForm;
