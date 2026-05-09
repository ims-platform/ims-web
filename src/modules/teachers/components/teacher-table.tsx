import { MoreVertical } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';

import { Teacher } from '../types/teacher.types';

interface Props {
  teachers: Teacher[];
}

export function TeacherTable({ teachers }: Props) {
  return (
    <div className="rounded-card border bg-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-sidebar h-11 border-none hover:bg-transparent">
            <TableHead className="text-label font-heading pl-6 text-xs font-semibold tracking-wider uppercase">Docente</TableHead>
            <TableHead className="text-label font-heading text-center text-xs font-semibold tracking-wider uppercase">
              Materia Principal
            </TableHead>
            <TableHead className="text-label font-heading text-center text-xs font-semibold tracking-wider uppercase">
              ID Empleado
            </TableHead>
            <TableHead className="text-label font-heading text-center text-xs font-semibold tracking-wider uppercase">
              Estado
            </TableHead>
            <TableHead className="text-label font-heading pr-6 text-right text-xs font-semibold tracking-wider uppercase">
              Acciones
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id} className="group hover:bg-muted/30 border-muted/50 transition-colors">
              <TableCell className="py-4 pl-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src={teacher.avatar} alt={teacher.name} className="rounded-lg" />
                    <AvatarFallback className="bg-muted/50 font-heading rounded-lg text-xs font-bold">
                      {teacher.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-heading text-foreground text-base font-medium">{teacher.name}</span>
                    <span className="font-heading text-label text-sm font-normal">{teacher.email}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant="secondary"
                  className="bg-subject-badge text-primary hover:bg-subject-badge-hover rounded-pill font-heading mx-auto flex h-[26px] w-[121px] items-center justify-center border-none text-sm font-normal"
                >
                  {teacher.mainSubject}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <div className="bg-data-beige text-warning-accent border-border font-heading inline-flex h-[28px] w-[104px] items-center justify-center rounded-xs border text-sm font-medium">
                  #{teacher.employeeId.replace('#', '')}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div
                  className={`font-heading inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${teacher.status === 'Activo' ? 'bg-success/10 text-success-dark' : ''} ${teacher.status === 'Pendiente' ? 'bg-warning/10 text-warning-dark' : ''} ${teacher.status === 'Inactivo' ? 'bg-muted text-label' : ''} `}
                >
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${teacher.status === 'Activo' ? 'bg-success' : teacher.status === 'Pendiente' ? 'bg-warning' : 'bg-label'}`}
                  />
                  {teacher.status}
                </div>
              </TableCell>
              <TableCell className="pr-6 text-right">
                <Button variant="ghost" size="icon" className="text-label hover:bg-muted rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="text-label bg-sidebar rounded-b-card flex items-center justify-between border-t p-4 text-sm">
        <p>
          Mostrando <span className="text-foreground font-medium">1-{teachers.length}</span> de{' '}
          <span className="text-foreground font-medium">42</span> profesores
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" disabled>
            &lt;
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
}
