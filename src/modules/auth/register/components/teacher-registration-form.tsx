'use client';

import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { useForm, type Resolver } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { Field, FieldError, FieldLabel } from '@/shared/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/shared/components/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select';
import { Spinner } from '@/shared/components/ui/spinner';

import { RegistrationFormValues, registrationSchema } from '../schemas/registration.schema';
import { registrationService } from '../services/registration.service';
import { PasswordStrengthMeter } from './password-strength-meter';

export function TeacherRegistrationForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema as unknown as Parameters<typeof zodResolver>[0]) as unknown as Resolver<RegistrationFormValues>,
    defaultValues: {
      fullName: '',
      email: '',
      specialty: '',
      phone: '',
      password: '',
      terms: false,
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const passwordValue = watch('password');
  const termsValue = watch('terms');

  const onSubmit = async (data: RegistrationFormValues) => {
    setIsPending(true);
    try {
      await registrationService.registerTeacher(data);
      toast.success('¡Registro exitoso!', {
        description: 'Su cuenta de profesor ha sido creada correctamente.',
      });
      // Aquí se podría redirigir o mostrar una vista de éxito
    } catch (error: unknown) {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Ocurrió un error inesperado.';
      toast.error('Error al registrarse', {
        description: errorMessage,
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-5">
        {/* Nombre Completo */}
        <Field>
          <FieldLabel className="font-heading text-label text-xs font-normal tracking-[0.05em] uppercase">
            Nombre Completo
          </FieldLabel>
          <InputGroup className="h-10 rounded-md">
            <InputGroupAddon>
              <User className="text-muted-foreground/60 size-4" />
            </InputGroupAddon>
            <InputGroupInput {...register('fullName')} placeholder="Ej. Juan Pérez" className="text-sm" />
          </InputGroup>
          <FieldError errors={[errors.fullName]} />
        </Field>

        {/* Email Institucional */}
        <Field>
          <FieldLabel className="font-heading text-label text-xs font-normal tracking-[0.05em] uppercase">
            Email Institucional
          </FieldLabel>
          <InputGroup className="h-10 rounded-md">
            <InputGroupAddon>
              <Mail className="text-muted-foreground/60 size-4" />
            </InputGroupAddon>
            <InputGroupInput {...register('email')} type="email" placeholder="correo@decolegio.edu.co" className="text-sm" />
          </InputGroup>
          <FieldError errors={[errors.email]} />
        </Field>

        {/* Especialidad y Teléfono en Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field>
            <FieldLabel className="font-heading text-label text-xs font-normal tracking-[0.05em] uppercase">
              Especialidad
            </FieldLabel>
            <Select onValueChange={(value) => setValue('specialty', value, { shouldValidate: true })}>
              <SelectTrigger className="w-full rounded-md text-sm data-[size=default]:h-10">
                <SelectValue placeholder="Seleccione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ingles-general">Inglés General</SelectItem>
                <SelectItem value="examenes">Preparación de Exámenes (IELTS/TOEFL)</SelectItem>
                <SelectItem value="negocios">Inglés de Negocios</SelectItem>
                <SelectItem value="kids">Inglés para Niños</SelectItem>
                <SelectItem value="conversacional">Inglés Conversacional</SelectItem>
                <SelectItem value="gramatica">Gramática y Redacción</SelectItem>
              </SelectContent>
            </Select>
            <FieldError errors={[errors.specialty]} />
          </Field>

          <Field>
            <FieldLabel className="font-heading text-label text-xs font-normal tracking-[0.05em] uppercase">
              Teléfono (COL)
            </FieldLabel>
            <InputGroup className="h-10 rounded-md">
              <InputGroupAddon className="bg-muted/10 h-full border-r px-3">
                <span className="text-muted-foreground text-xs font-medium">+57</span>
              </InputGroupAddon>
              <InputGroupInput {...register('phone')} placeholder="300 000 0000" className="h-full text-sm" />
            </InputGroup>
            <FieldError errors={[errors.phone]} />
          </Field>
        </div>

        {/* Contraseña */}
        <Field>
          <FieldLabel className="font-heading text-label text-xs font-normal tracking-[0.05em] uppercase">Contraseña</FieldLabel>
          <InputGroup className="h-10 rounded-md">
            <InputGroupAddon>
              <Lock className="text-muted-foreground/60 size-4" />
            </InputGroupAddon>
            <InputGroupInput
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="text-sm"
              style={{ WebkitTextSecurity: showPassword ? 'none' : 'disc' } as React.CSSProperties}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                size="icon-xs"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground/60 hover:text-foreground"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <PasswordStrengthMeter password={passwordValue} />
          <FieldError errors={[errors.password]} />
        </Field>

        {/* Términos y Condiciones */}
        <div className="flex items-center gap-2 pt-2">
          <Checkbox
            id="terms"
            checked={termsValue}
            onCheckedChange={(checked) => setValue('terms', !!checked, { shouldValidate: true })}
          />
          <label htmlFor="terms" className="text-muted-foreground cursor-pointer text-xs leading-snug select-none">
            Acepto los{' '}
            <a href="#" className="text-primary font-medium hover:underline">
              términos y condiciones
            </a>{' '}
            de la institución.
          </label>
        </div>
        <FieldError errors={[errors.terms]} />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="bg-primary text-primary-foreground group h-11 w-full rounded-lg font-medium transition-all duration-200"
      >
        {isPending ? (
          <Spinner className="mr-2 size-4" />
        ) : (
          <>
            Registrarse
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>

      {/* Social Register Placeholder */}
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <span className="border-muted/60 w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-[10px] font-bold tracking-widest uppercase">
          <span className="bg-background text-muted-foreground/60 px-4">O registrarse con</span>
        </div>
      </div>

      <p className="text-muted-foreground text-center text-xs">
        ¿Ya tiene una cuenta?{' '}
        <a href="/auth/login" className="text-primary font-semibold hover:underline">
          Inicie sesión aquí
        </a>
      </p>
    </form>
  );
}
