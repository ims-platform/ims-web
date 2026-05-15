import { Card, CardContent } from '@/shared/components/ui/card';

import { TeacherStats } from '../types/teacher.types';

interface Props {
  stats: TeacherStats;
}

export function TeacherStatsCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      <Card className="border-border rounded-card col-span-2 border bg-white md:col-span-2">
        <CardContent className="px-6 py-4">
          <p className="text-label font-heading text-xs font-medium tracking-wider uppercase">Total de docentes</p>
          <h2 className="text-primary font-heading mt-2 text-[30px] font-normal">Personal Académico</h2>
          <div className="mt-6 flex items-end gap-3">
            <div className="bg-data-beige border-border flex h-[62px] w-[76px] items-center justify-center rounded-xs border">
              <span className="text-warning-accent font-heading text-center text-2xl leading-none font-medium">
                {stats.total}
              </span>
            </div>
            <span className="text-label font-heading pb-2 text-sm font-normal">Miembros activos</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border rounded-card col-span-1 border bg-white">
        <CardContent className="flex h-full flex-col justify-between px-6 py-4">
          <div>
            <p className="text-label font-heading text-xs font-medium tracking-wider uppercase">Estado Activo</p>
            <div className="mt-4">
              <div className="bg-data-beige border-border flex h-[65px] w-full max-w-[260px] items-center justify-start rounded-xs border px-4">
                <span className="text-warning-accent font-heading text-2xl leading-none font-medium">{stats.active}</span>
              </div>
            </div>
          </div>
          <div className="bg-muted mt-6 h-[2px] w-full overflow-hidden rounded-full">
            <div
              className="bg-primary h-full rounded-full transition-all duration-1000"
              style={{ width: `${(stats.active / stats.total) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border rounded-card col-span-1 border bg-white">
        <CardContent className="flex h-full flex-col justify-between px-6 py-4">
          <div>
            <p className="text-label font-heading text-xs font-medium tracking-wider uppercase">Pendientes</p>
            <div className="mt-4">
              <div className="bg-data-beige border-border flex h-[65px] w-full max-w-[260px] items-center justify-start rounded-xs border px-4">
                <span className="text-warning-accent font-heading text-2xl leading-none font-medium">
                  {stats.pending.toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-muted mt-6 h-[2px] w-full overflow-hidden rounded-full">
            <div
              className="bg-warning-dark h-full rounded-full transition-all duration-1000"
              style={{ width: `${(stats.pending / stats.total) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
