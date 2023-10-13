import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>The New York Times Bestsellers</h1>
      {array.map((it) => (
        <div key={it}>
          <Link href={it.toString()}> {it}</Link>
        </div>
      ))}
    </main>
  );
}
