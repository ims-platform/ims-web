import { render } from '@react-email/render';

import WelcomeTeacherEmail from '@/modules/emails/templates/WelcomeTeacherEmail';

export default async function PreviewEmailPage() {
  const html = await render(<WelcomeTeacherEmail />);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-50 p-4 py-12">
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-black/5">
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-6 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-amber-400"></div>
            <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="font-mono text-xs font-medium text-slate-500">welcome-teacher-email.html</div>
          <div className="w-12"></div>
        </div>
        <iframe srcDoc={html} className="h-[750px] w-full border-none" title="Email Preview" />
      </div>
      <p className="mt-6 text-sm text-slate-400">Vista previa del correo electrónico de bienvenida para docentes</p>
    </div>
  );
}
