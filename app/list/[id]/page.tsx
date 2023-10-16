import { getBooksData } from '@/utils';
import Book from '@/components/book';
import { grandi } from '@/styles/fonts';
import { IBook } from '@/types';
import styles from '@/styles/list.module.css';

export default async function List({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getBooksData(id);
  return (
    <>
      <h1 className={`${styles.h1} ${grandi.className}`}>
        {id.split('-').join(' ')}
      </h1>
      <ul className={styles.bookList}>
        {data.map((book: IBook, idx: number) => (
          <Book key={book.title} book={book} index={idx} />
        ))}
      </ul>
    </>
  );
}
