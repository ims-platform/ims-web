'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Building2, Check, Lock, Mail } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';

import { WelcomeEmail } from './WelcomeEmail';

export const RegistrationForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    subdomain: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.institutionName) newErrors.institutionName = 'Obligatorio';
    if (!formData.firstName) newErrors.firstName = 'Obligatorio';
    if (!formData.lastName) newErrors.lastName = 'Obligatorio';
    if (!formData.email) newErrors.email = 'Obligatorio';
    if (!formData.password) newErrors.password = 'Obligatorio';
    if (!formData.subdomain) newErrors.subdomain = 'Obligatorio';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('¡Registro exitoso!');
      setShowSuccess(true);
    } catch (error) {
      toast.error('Error al registrar');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (showSuccess) {
    return <WelcomeEmail directorName={formData.firstName} subdomain={`${formData.subdomain}.edu.com`} />;
  }

  return (
    <Card className="w-full max-w-[480px] overflow-hidden rounded-[20px] border-none bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      <CardHeader className="px-10 pt-10 pb-6">
        <CardTitle className="text-navy font-heading mb-1 text-[26px] font-bold">Registro de Institución</CardTitle>
        <CardDescription className="text-sm text-slate-500">Completa los datos para configurar tu academia.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-5 px-10 pb-8">
          {/* Institution Name */}
          <div className="space-y-2">
            <Label className="text-[13px] font-semibold text-slate-600">Nombre de la Institución</Label>
            <div className="relative">
              <Building2 className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                name="institutionName"
                placeholder="Academia de Idiomas El Prado"
                value={formData.institutionName}
                onChange={handleChange}
                className="h-12 rounded-lg border-slate-100 bg-slate-50/50 pl-10 transition-all focus:bg-white"
              />
            </div>
          </div>

          {/* Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-[13px] font-semibold text-slate-600">Nombre</Label>
              <Input
                name="firstName"
                placeholder="Director"
                value={formData.firstName}
                onChange={handleChange}
                className="h-12 rounded-lg border-slate-100 bg-slate-50/50 transition-all focus:bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[13px] font-semibold text-slate-600">Apellido</Label>
              <Input
                name="lastName"
                placeholder="Apellido"
                value={formData.lastName}
                onChange={handleChange}
                className="h-12 rounded-lg border-slate-100 bg-slate-50/50 transition-all focus:bg-white"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label className="text-[13px] font-semibold text-slate-600">Correo Administrativo</Label>
            <div className="relative">
              <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                name="email"
                type="email"
                placeholder="admin@academia.com"
                value={formData.email}
                onChange={handleChange}
                className="h-12 rounded-lg border-slate-100 bg-slate-50/50 pl-10 transition-all focus:bg-white"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label className="text-[13px] font-semibold text-slate-600">Contraseña</Label>
            <div className="relative">
              <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="h-12 rounded-lg border-slate-100 bg-slate-50/50 pl-10 transition-all focus:bg-white"
              />
            </div>
          </div>

          {/* Subdomain */}
          <div className="space-y-2">
            <Label className="text-[13px] font-semibold text-slate-600">Subdominio Deseado</Label>
            <div className="focus-within:ring-primary/20 flex h-12 overflow-hidden rounded-lg border border-slate-100 focus-within:ring-1">
              <Input
                name="subdomain"
                placeholder="mi-academia"
                value={formData.subdomain}
                onChange={handleChange}
                className="h-full flex-1 rounded-none border-none bg-slate-50/50 focus:bg-white focus-visible:ring-0"
              />
              <div className="flex h-full items-center bg-slate-100 px-4 text-[13px] font-medium text-slate-500">.edu.com</div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-medium text-emerald-500">
              <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-emerald-500">
                <Check className="h-2 w-2" />
              </div>
              Subdominio disponible
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="shadow-brand/20 bg-brand hover:bg-brand/90 mt-4 h-12 w-full rounded-lg text-sm font-bold text-white shadow-lg"
          >
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </Button>

          <p className="pt-2 text-center text-[11px] leading-relaxed text-slate-400">
            Al registrarte, aceptas nuestros{' '}
            <span className="text-brand/80 cursor-pointer font-medium hover:underline">Términos de Servicio</span> y la{' '}
            <span className="text-brand/80 cursor-pointer font-medium hover:underline">Política de Datos</span> institucional.
          </p>
        </CardContent>
      </form>
    </Card>
  );
};
