import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <Skeleton className="h-[274px] w-full rounded-lg bg-gray-800" />
      </section>

      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="h-10 w-56 bg-gray-800" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[440px] w-full bg-gray-800 sm:w-[356px]" />
          <Skeleton className="h-[440px] w-full bg-gray-800 sm:w-[356px]" />
          <Skeleton className="h-[440px] w-full bg-gray-800 sm:w-[356px]" />
        </div>
      </section>
    </main>
  );
};

export default Loading;
