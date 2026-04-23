import { Button } from '@/shared/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">IMS Platform</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        Bienvenido al nuevo entorno de desarrollo. La estructura base está lista, con Shadcn UI y Tailwind CSS 4 configurados.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button size="lg" className="rounded-full font-semibold shadow-sm">
          Listo para codificar
        </Button>
        <Button variant="outline" size="lg" className="rounded-full font-semibold">
          Documentación
        </Button>
      </div>
    </div>
  );
}
