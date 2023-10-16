export async function getGenresData() {
  const genresAPI = 'https://books-api.nomadcoders.workers.dev/lists';
  const res = await fetch(genresAPI);
  const json = await res.json();
  return json.results;
}

export async function getBooksData(encodedGenre: string) {
  const booksAPI = 'https://books-api.nomadcoders.workers.dev/list?name=';
  const res = await fetch(booksAPI + encodedGenre);
  const json = await res.json();
  return json.results.books;
}
