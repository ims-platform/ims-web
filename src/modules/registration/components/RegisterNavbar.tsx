'use client';

import Link from 'next/link';

import { Menu } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/components/ui/sheet';

export const RegisterNavbar = () => {
  return (
    <nav className="border-border bg-background h-16 w-full border-b">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 sm:px-8">
        <Link href="/" className="text-navy font-heading text-xl font-bold tracking-tight">
          Mi Colegio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="hover:text-primary text-sm font-medium text-slate-500 transition-colors">
            Inicio
          </Link>
          <Link href="#" className="hover:text-primary text-sm font-medium text-slate-500 transition-colors">
            Registrarse
          </Link>
          <Link href="#" className="hover:text-primary text-sm font-medium text-slate-500 transition-colors">
            Planes
          </Link>
          <Link href="#" className="hover:text-primary text-sm font-medium text-slate-500 transition-colors">
            Soporte
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hover:text-primary hidden text-sm font-semibold text-slate-600 transition-colors sm:block"
          >
            Iniciar sesión
          </Link>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-600">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-[300px] flex-col p-0">
                <SheetHeader className="border-b border-slate-50 p-6">
                  <SheetTitle className="text-navy font-heading text-left text-xl">Menú</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-6">
                  <Link
                    href="/"
                    className="hover:text-primary px-6 py-3 text-base font-medium text-slate-600 transition-all hover:bg-slate-50"
                  >
                    Inicio
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-primary px-6 py-3 text-base font-medium text-slate-500 transition-all hover:bg-slate-50"
                  >
                    Registrarse
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-primary px-6 py-3 text-base font-medium text-slate-500 transition-all hover:bg-slate-50"
                  >
                    Planes
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-primary px-6 py-3 text-base font-medium text-slate-500 transition-all hover:bg-slate-50"
                  >
                    Soporte
                  </Link>
                  <div className="mx-6 my-4 border-t border-slate-100" />
                  <Link
                    href="/login"
                    className="bg-navy hover:bg-navy/90 mx-6 rounded-xl px-4 py-3 text-center font-bold text-white shadow-md transition-all"
                  >
                    Iniciar sesión
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
