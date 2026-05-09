import { TeacherListModule } from '@/modules/teachers';

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-card">
      {/* Navbar mockup based on Figma */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <TeacherListModule />
      </main>
    </div>
  );
}
