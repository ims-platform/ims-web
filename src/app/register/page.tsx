import Link from 'next/link';

import { BookOpen, ShieldCheck, Users } from 'lucide-react';

import { RegisterNavbar } from '@/modules/registration/components/RegisterNavbar';
import { RegistrationForm } from '@/modules/registration/components/RegistrationForm';
import { Toaster } from '@/shared/components/ui/sonner';

export default function RegisterPage() {
  return (
    <main className="bg-sidebar min-h-screen">
      <RegisterNavbar />

      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
          {/* Columna Izquierda: Contenido (aprox 680px) */}
          <div className="w-full space-y-10 pt-4 lg:w-[680px]">
            <div>
              <div className="border-brand/20 bg-hero-from text-primary mb-6 inline-flex items-center rounded-full border px-4 py-1 text-[10px] font-bold tracking-wider uppercase">
                PRUEBA GRATUITA DE 15 DÍAS
              </div>
              <h1 className="text-navy font-heading mb-6 text-[36px] leading-[1.1] font-bold sm:text-[48px] lg:text-[56px]">
                Transforma el <br />
                futuro <br />
                académico hoy.
              </h1>
              <p className="max-w-[500px] text-[16px] leading-[26px] font-medium text-slate-500 sm:text-[17px]">
                Lidera el ecosistema de aprendizaje de inglés en Colombia con seguimiento individualizado y formación de hábitos.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid max-w-[680px] grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="bg-accent/30 border-accent/50 rounded-[12px] border p-6">
                <div className="bg-primary/10 text-primary mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-navy mb-2 font-bold">Seguimiento Individual</h3>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Monitorea el progreso de cada estudiante en tiempo real con datos precisos.
                </p>
              </div>
              <div className="bg-accent/30 border-accent/50 rounded-[12px] border p-6">
                <div className="bg-primary/10 text-primary mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-navy mb-2 font-bold">Formación de Hábitos</h3>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Metodología diseñada para integrar el Inglés en la vida diaria del alumno.
                </p>
              </div>
            </div>

            {/* Banner CTA */}
            <div className="bg-navy relative max-w-[680px] overflow-hidden rounded-[12px] p-8 text-white">
              <h4 className="mb-2 text-lg font-bold">Comienza tu prueba de 15 días</h4>
              <p className="max-w-md text-[11px] text-slate-400">
                Acceso total para directores y docentes sin compromiso inicial. Descubre el poder de la gestión académica moderna.
              </p>
            </div>

            {/* Footer Note */}
            <div className="flex max-w-[680px] items-center gap-3 rounded-xl border border-slate-200 bg-white/50 p-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <p className="text-[11px] font-medium text-slate-500">
                Protegido con academic security y cumplimiento total de la ley de protección de datos en Colombia.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Formulario (480px) */}
          <div className="flex w-full justify-center lg:w-[480px] lg:justify-end">
            <RegistrationForm />
          </div>
        </div>
      </div>

      <Toaster position="top-right" richColors />
    </main>
  );
}
