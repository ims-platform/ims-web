import { ArrowLeftRight, CreditCard, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Privacidad Escolar',
    desc: 'Encriptación de grado militar para proteger los datos personales y académicos de cada menor y docente en su institución.',
    icon: ShieldCheck,
  },
  {
    title: 'Flujos Académicos',
    desc: 'Automatice las inscripciones, la asignación de cursos y la generación de boletines con un solo clic.',
    icon: ArrowLeftRight,
  },
  {
    title: 'Cobros Automatizados',
    desc: 'Reduzca la morosidad mediante recordatorios inteligentes y pasarelas de pago integradas para padres de familia.',
    icon: CreditCard,
  },
];

export const Features = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-6">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                <feature.icon className="h-5 w-5 stroke-[2px]" />
              </div>
              <div>
                <h4 className="text-navy font-heading mb-3 text-lg font-bold">{feature.title}</h4>
                <p className="text-sm leading-relaxed font-medium text-slate-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
