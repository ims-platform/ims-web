import React from 'react';

import { CheckCircle2, CreditCard, Globe, LayoutDashboard, Settings } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';

interface WelcomeEmailProps {
  directorName?: string;
  subdomain?: string;
}

export const WelcomeEmail = ({ directorName = 'Director', subdomain = 'micolegio.edu.com' }: WelcomeEmailProps) => {
  return (
    <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded-[16px] border border-slate-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-50 px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="text-primary h-6 w-6">
            <LayoutDashboard className="h-full w-full" />
          </div>
          <span className="text-navy font-heading text-lg font-bold">Mi colegio</span>
        </div>
        <div className="h-5 w-5 text-slate-300">
          <Settings className="h-full w-full" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#8E78F0] px-8 py-12 text-center">
        <h1 className="mb-2 text-[32px] font-bold text-white">Bienvenido a Mi colegio</h1>
        <p className="text-sm font-medium text-white/80">Transformando la gestión académica institucional</p>
      </div>

      {/* Main Content */}
      <div className="px-10 py-10">
        <h2 className="text-navy mb-4 text-xl font-bold">Hola {directorName},</h2>
        <p className="mb-8 text-[15px] leading-[24px] text-slate-500">
          Estamos encantados de acompañarte en este nuevo capítulo de transformación digital. Su ecosistema de Mi colegio ha sido
          configurado con éxito y ya puede comenzar a integrar a su personal docente y administrativo.
        </p>

        {/* Info Box */}
        <div className="bg-sidebar mb-8 space-y-6 rounded-[12px] border border-slate-100 p-6">
          <div className="flex items-start gap-4">
            <div className="text-primary bg-hero-from flex h-10 w-10 items-center justify-center rounded-lg">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <p className="mb-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Tu subdominio personalizado</p>
              <p className="text-primary text-[15px] font-bold">{subdomain}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-primary bg-hero-from flex h-10 w-10 items-center justify-center rounded-lg">
              <CreditCard className="h-5 w-5" />
            </div>
            <div>
              <p className="mb-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Estado de la suscripción</p>
              <p className="text-navy text-[15px] font-bold">Tu prueba gratuita de 15 días comienza ahora</p>
            </div>
          </div>
        </div>

        {/* Bullet Points */}
        <div className="mb-10 space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </div>
            <p className="text-sm font-medium text-slate-600">
              Gestión avanzada de activos institucionales y reportes financieros.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </div>
            <p className="text-sm font-medium text-slate-600">
              Configuración de cumplimiento automático y auditoría en tiempo real.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button className="shadow-brand/20 bg-brand hover:bg-brand/90 h-[48px] rounded-lg px-12 font-bold text-white shadow-lg">
            Acceder
          </Button>
        </div>
      </div>
    </div>
  );
};
