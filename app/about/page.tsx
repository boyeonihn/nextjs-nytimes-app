import styles from '@/styles/about.module.css';
import { grandi } from '@/styles/fonts';

export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>
        Welcome to The New York Times' Best-seller-pedia
      </h1>
      <p className={`${styles.p} ${grandi.className}`}>
        This website was built using{' '}
        <a
          className={styles.bold}
          href="https://developer.nytimes.com/docs/books-product/1/overview"
          target="_blank"
        >
          The New York Times' Best Sellers Lists API
        </a>{' '}
        combined with{' '}
        <span className={styles.bold}>the Next.js framework.</span> Feel free to
        explore this little site by clicking on the various corners of the site.{' '}
        <br />
        <br />
        If you have any suggestions regarding how I can better this side
        project, please hop on over to my{' '}
        <a
          className={styles.bold}
          href="https://github.com/boyeonihn"
          target="_blank"
        >
          Github
        </a>{' '}
        to connect with me!
      </p>
    </main>
  );
}
