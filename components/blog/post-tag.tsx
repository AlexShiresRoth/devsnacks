import Link from 'next/link';

export default function PostTag({ tag }: { tag: string }) {
  return (
    <Link
      href={`/blog/posts?q=${tag}`}
      className="py-1 px-2 bg-amber-400 border-black border-2"
    >
      <p className="text-xs font-semibold text-black">{tag}</p>
    </Link>
  );
}
