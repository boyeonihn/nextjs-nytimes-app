import Link from 'next/link';
import styles from '@/styles/genre.module.css';

interface GenreProp {
  genre: string;
  encodedGenre: string;
}

export default function Genre({ genre, encodedGenre }: GenreProp) {
  return (
    <li className={styles.genre}>
      <Link href={`/list/${encodedGenre}`}>
        <span>{genre} &rarr; </span>
      </Link>
    </li>
  );
}
