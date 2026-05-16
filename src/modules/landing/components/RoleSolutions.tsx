import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const solutions = [
  {
    role: 'Directivos',
    icon: Briefcase,
    items: ['Dashboards financieros en tiempo real', 'Reportes de cumplimiento legal', 'Planificación estratégica centralizada'],
  },
  {
    role: 'Docentes',
    icon: BookOpen,
    items: ['Gestión de calificaciones automatizada', 'Seguimiento conductual y académico', 'Repositorio de recursos digitales'],
  },
  {
    role: 'Estudiantes',
    icon: GraduationCap,
    items: ['Acceso a tareas y exámenes online', 'Perfil de progreso personalizado', 'Comunicación directa con mentores'],
  },
];

export const RoleSolutions = () => {
  return (
    <section className="bg-sidebar py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h3 className="text-primary mb-3 text-[10px] font-bold tracking-[0.2em] uppercase">Ecosistema Integral</h3>
          <h2 className="text-navy font-heading text-3xl font-extrabold lg:text-4xl">Soluciones para cada rol</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.role}
              className="group border-border bg-background flex flex-col rounded-[24px] border p-8 shadow-sm transition-all duration-300 hover:shadow-xl lg:p-10"
            >
              <div className="group-hover:bg-primary/10 group-hover:text-primary bg-sidebar text-muted-foreground mb-8 flex h-14 w-14 items-center justify-center rounded-xl transition-colors">
                <solution.icon className="h-7 w-7 stroke-[1.5px]" />
              </div>
              <h4 className="text-navy font-heading mb-6 text-xl font-bold">{solution.role}</h4>
              <ul className="space-y-4">
                {solution.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="bg-primary/60 h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span className="text-muted-foreground text-sm leading-snug font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
