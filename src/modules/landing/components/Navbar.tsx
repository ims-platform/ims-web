'use client';

import Link from 'next/link';

import { Menu } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/components/ui/sheet';

export const Navbar = () => {
  return (
    <nav className="border-border/40 bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-navy font-heading text-xl font-bold tracking-tight">
            Mi Colegio
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="group text-primary relative text-sm font-semibold transition-colors">
            Home
            <span className="bg-primary absolute right-0 -bottom-[22px] left-0 h-[3px] scale-x-0 rounded-t-full transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
          <Link
            href="#nosotros"
            className="group hover:text-primary relative text-sm font-medium text-slate-600 transition-colors"
          >
            Nosotros
            <span className="bg-primary absolute right-0 -bottom-[22px] left-0 h-[3px] scale-x-0 rounded-t-full transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
          <Link
            href="#directores"
            className="group hover:text-primary relative text-sm font-medium text-slate-600 transition-colors"
          >
            Directorio
            <span className="bg-primary absolute right-0 -bottom-[22px] left-0 h-[3px] scale-x-0 rounded-t-full transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
          <Link
            href="#profesores"
            className="group hover:text-primary relative text-sm font-medium text-slate-600 transition-colors"
          >
            Profesores
            <span className="bg-primary absolute right-0 -bottom-[22px] left-0 h-[3px] scale-x-0 rounded-t-full transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
          <Link
            href="#estudiantes"
            className="group hover:text-primary relative text-sm font-medium text-slate-600 transition-colors"
          >
            Estudiantes
            <span className="bg-primary absolute right-0 -bottom-[22px] left-0 h-[3px] scale-x-0 rounded-t-full transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        </div>

        {/* Buttons & Mobile Menu */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/login"
            className="hover:text-primary hidden text-sm font-semibold text-slate-600 transition-colors md:block"
          >
            Ingresar
          </Link>
          <Button
            asChild
            className="bg-navy hover:bg-navy/90 h-[40px] rounded-[12px] px-[16px] text-xs font-bold shadow-md transition-all sm:h-[44px] sm:px-[24px] sm:text-sm"
          >
            <Link href="/register">Prueba gratuita</Link>
          </Button>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-600">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-[300px] flex-col p-0">
                <SheetHeader className="border-b border-slate-50 p-6">
                  <SheetTitle className="text-navy font-heading text-left text-xl">Navegación</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-6">
                  <Link
                    href="/"
                    className="hover:text-primary px-6 py-3 text-base font-medium text-slate-600 transition-all hover:bg-slate-50"
                  >
                    Home
                  </Link>
                  <Link
                    href="#nosotros"
                    className="hover:text-primary px-6 py-3 text-base font-medium text-slate-600 transition-all hover:bg-slate-50"
                  >
                    Nosotros
                  </Link>
                  <Link
                    href="#directores"
                    className="hover:text-primary px-6 py-3 text-base font-medium text-slate-600 transition-all hover:bg-slate-50"
                  >
                    Directorio
                  </Link>
                  <Link
                    href="#profesores"
                    className="hover:text-primary px-6 py-3 text-base font-medium text-slate-600 transition-all hover:bg-slate-50"
                  >
                    Profesores
                  </Link>
                  <Link
                    href="#estudiantes"
                    className="hover:text-primary px-6 py-3 text-base font-medium text-slate-600 transition-all hover:bg-slate-50"
                  >
                    Estudiantes
                  </Link>
                  <div className="mx-6 my-4 border-t border-slate-100" />
                  <Link
                    href="/login"
                    className="bg-navy hover:bg-navy/90 mx-6 rounded-xl px-4 py-3 text-center font-bold text-white shadow-md transition-all"
                  >
                    Ingresar
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
