import { CTA } from '@/modules/landing/components/CTA';
import { Features } from '@/modules/landing/components/Features';
import { Hero } from '@/modules/landing/components/Hero';
import { MissionVision } from '@/modules/landing/components/MissionVision';
import { Navbar } from '@/modules/landing/components/Navbar';
import { RoleSolutions } from '@/modules/landing/components/RoleSolutions';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MissionVision />
      <RoleSolutions />
      <CTA />
      <Features />

      {/* Footer minimalista */}
      <footer className="border-t bg-slate-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Mi Colegio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
