import Link from 'next/link';
import { IBook } from '@/types';
import { grandi, berkshire } from '@/styles/fonts';
import styles from '@/styles/book.module.css';

export default function Book({ book, index }: { book: IBook; index: number }) {
  return (
    <li
      className={
        index % 2 == 0
          ? `${styles.oppositeBorderBook} ${styles.book}`
          : styles.book
      }
    >
      <img
        src={book.book_image}
        className={styles.img}
        alt={`Book cover image of ${book.title}`}
      />
      <h2 className={`${styles.title} ${berkshire.className}`}>{book.title}</h2>
      <h3 className={`${styles.author} ${grandi.className}`}>{book.author}</h3>
      {book.amazon_product_url && (
        <Link href={book.amazon_product_url ?? ''}>
          <span className={styles.link}>Buy Now! &rarr;</span>
        </Link>
      )}
    </li>
  );
}
