import { GraduationCap } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';

export const CTA = () => {
  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="from-navy to-brand relative mx-auto max-w-[960px] overflow-hidden rounded-[48px] bg-gradient-to-br p-[64px] text-center shadow-2xl">
          {/* Decorative Icon Background */}
          <div className="pointer-events-none absolute top-[-10%] right-[-2%] opacity-10">
            <GraduationCap className="h-[400px] w-[400px] rotate-12 text-white" />
          </div>

          <div className="relative z-10">
            <h2 className="font-heading mb-6 text-3xl leading-tight font-extrabold text-white lg:text-4xl">
              ¿Listo para transformar su institución?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-base font-medium text-white/80 lg:text-lg">
              Únase a más de 500 colegios que ya están liderando la vanguardia educativa en la región.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="text-navy h-14 rounded-md bg-white px-8 text-sm font-bold hover:bg-white/90">
                Solicitar Demo Personalizada
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-md border-white/20 bg-white/10 px-8 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20"
              >
                Ver Planes de Precios
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
