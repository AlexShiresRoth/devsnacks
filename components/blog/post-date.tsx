import { format } from 'date-fns';

export default function PostDate({ date }: { date: string }) {
  return (
    <div className="border-2 border-black bg-emerald-500 px-2 py-1 md:py-2 md:px-4">
      <p className="font-semibold text-xs md:text-sm text-black">
        {format(new Date(date), 'PP')}
      </p>
    </div>
  );
}
