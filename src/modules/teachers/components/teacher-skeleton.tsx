import { Card, CardContent } from '@/shared/components/ui/card';
import { Skeleton } from '@/shared/components/ui/skeleton';

export function TeacherSkeleton() {
  return (
    <div className="animate-in fade-in flex flex-col gap-8 duration-500">
      {/* Stats Skeleton */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <Card className="border-border rounded-card col-span-2 border bg-white md:col-span-2">
          <CardContent className="px-6 py-4">
            <Skeleton className="mb-3 h-3 w-24" />
            <Skeleton className="mb-6 h-9 w-48" />
            <div className="flex items-center gap-3">
              <Skeleton className="h-[62px] w-[76px] rounded-xs" />
              <Skeleton className="h-5 w-32" />
            </div>
          </CardContent>
        </Card>

        {[1, 2].map((i) => (
          <Card key={i} className="border-border rounded-card col-span-1 border bg-white">
            <CardContent className="flex h-full flex-col justify-between px-6 py-4">
              <div>
                <Skeleton className="mb-4 h-3 w-20" />
                <Skeleton className="h-[65px] w-full max-w-[260px] rounded-xs" />
              </div>
              <Skeleton className="mt-6 h-0.5 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters Skeleton */}
      <div className="border-border rounded-card flex h-[73px] items-center justify-between gap-4 border bg-white px-4">
        <Skeleton className="h-10 w-full max-w-md" />
        <div className="flex gap-3">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="rounded-card overflow-hidden border bg-white">
        <div className="bg-sidebar flex h-11 items-center gap-4 border-b px-6">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="mx-auto h-3 w-32" />
          <Skeleton className="mx-auto h-3 w-20" />
          <Skeleton className="mx-auto h-3 w-16" />
          <Skeleton className="ml-auto h-3 w-8" />
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex h-[72px] items-center gap-4 border-b px-6 last:border-0">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-40" />
              </div>
            </div>
            <Skeleton className="rounded-pill mx-auto h-6 w-[121px]" />
            <Skeleton className="mx-auto h-7 w-[104px] rounded-xs" />
            <Skeleton className="mx-auto h-6 w-24 rounded-full" />
            <Skeleton className="ml-auto h-8 w-8 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
