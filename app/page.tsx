import Genre from '@/components/genre';
import { IGenre } from '@/types';
import { getGenresData } from '@/utils';
import styles from '@/styles/home.module.css';
import { berkshire } from './styles/fonts';

export default async function Home() {
  const data = await getGenresData();
  data.sort((a: IGenre, b: IGenre) => {
    const textA = a.list_name;
    const textB = b.list_name;
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  console.log('data#####', data);
  return (
    <main className={styles.main}>
      <h1 className={`${styles.h1} ${berkshire.className}`}>
        The New York Times Bestsellers
      </h1>
      <ul className={styles.genreList}>
        {data.map((genre: IGenre) => (
          <Genre
            key={genre.list_name}
            genre={genre.display_name}
            encodedGenre={genre.list_name_encoded}
          />
        ))}
      </ul>
    </main>
  );
}
