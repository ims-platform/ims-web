import { z } from 'zod';

export const registrationSchema = z.object({
  fullName: z.string().min(3, 'El nombre debe tener al menos 3 caracteres').max(100, 'El nombre es demasiado largo'),
  email: z.string().email('Introduce un correo electrónico institucional válido').min(1, 'El correo es obligatorio'),
  specialty: z.string().min(1, 'Debes seleccionar una especialidad'),
  phone: z.string().min(7, 'El teléfono debe tener al menos 7 dígitos').regex(/^\d+$/, 'El teléfono solo debe contener números'),
  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
    .regex(/[a-z]/, 'Debe contener al menos una minúscula')
    .regex(/[0-9]/, 'Debe contener al menos un número'),
  terms: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
