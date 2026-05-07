// import { api } from '@/shared/services/api';

import { RegistrationFormValues } from '../schemas/registration.schema';

export const registrationService = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  registerTeacher: async (data: RegistrationFormValues) => {
    // MOCK: Simulamos un delay y una respuesta exitosa para pruebas de UI
    await new Promise((resolve) => setTimeout(resolve, 1500));

    /* 
    // Llamada real al endpoint comentada hasta que el backend esté listo
    const response = await api.post("/auth/register-teacher", {
      full_name: data.fullName,
      email: data.email,
      specialty: data.specialty,
      phone: `+57${data.phone}`,
      password: data.password,
    });
    return response.data;
    */

    return { success: true, message: 'Usuario registrado correctamente' };
  },
};
