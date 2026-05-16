import { Eye, Rocket } from 'lucide-react';

export const MissionVision = () => {
  return (
    <section id="nosotros" className="bg-sidebar py-[64px]">
      <div className="mx-auto max-w-[1280px] px-[32px]">
        <div className="grid gap-[32px] md:grid-cols-2">
          {/* Mission Card */}
          <div className="group border-accent/50 bg-accent/30 relative overflow-hidden rounded-[24px] border p-10 transition-all duration-300 hover:shadow-xl lg:p-14">
            <div className="bg-primary/10 text-primary mb-8 flex h-14 w-14 items-center justify-center rounded-lg">
              <Rocket className="h-7 w-7" />
            </div>
            <h2 className="text-navy font-heading mb-6 text-2xl font-extrabold lg:text-3xl">Nuestra Misión</h2>
            <p className="text-base leading-relaxed text-slate-600 lg:text-lg">
              Democratizar la gestión educativa de alto nivel, proporcionando herramientas tecnológicas que simplifiquen la
              administración y potencien el aprendizaje significativo.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group bg-navy relative overflow-hidden rounded-[24px] p-10 transition-all duration-300 hover:shadow-xl lg:p-14">
            <div className="text-brand/60 mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-white/10">
              <Eye className="h-7 w-7" />
            </div>
            <h2 className="font-heading mb-6 text-2xl font-extrabold text-white lg:text-3xl">Nuestra Visión</h2>
            <p className="text-base leading-relaxed text-slate-300 lg:text-lg">
              Ser el ecosistema educativo líder en Iberoamérica, reconocido por transformar instituciones tradicionales en
              comunidades digitales inteligentes y financieramente sostenibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
