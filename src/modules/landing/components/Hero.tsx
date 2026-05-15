import Image from 'next/image';

import { Button } from '@/shared/components/ui/button';

export const Hero = () => {
  return (
    <section className="bg-background relative overflow-hidden py-[90px]">
      <div className="mx-auto max-w-[1280px] px-[32px]">
        <div className="items-center lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="bg-hero-from text-primary mb-6 inline-flex items-center rounded-full px-[16px] py-[6px] text-[10px] font-bold tracking-wider uppercase">
              Liderazgo Educativo
            </div>
            <h1 className="text-navy font-heading mb-6 text-[44px] leading-[1.1] font-bold tracking-tight lg:text-[56px]">
              Potenciando a toda tu <br />
              <span className="text-brand">
                comunidad <br />
                educativa
              </span>
            </h1>
            <p className="text-muted-foreground mb-10 max-w-[568px] text-[18px] leading-[28px] font-normal">
              Optimice la gestión financiera y académica con nuestra plataforma integral diseñada para la excelencia
              institucional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy/90 h-[64px] w-[318px] rounded-[12px] text-[18px] leading-[28px] font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-95"
              >
                Empieza tu prueba de 15 días
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="mt-16 flex justify-end lg:col-span-5 lg:mt-0">
            <div className="relative aspect-square w-full overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/hero-placeholder.webp"
                alt="Excelencia Educativa"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Exact gradient overlay from Figma: #001B48 from 40% to 0% opacity */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(0, 27, 72, 0.4) 0%, rgba(0, 27, 72, 0) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
