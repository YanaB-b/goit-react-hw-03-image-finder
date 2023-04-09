const KEY = '33827578-bf8f715bed7d1235235f0071a';
const URL = 'https://pixabay.com/api/';

export function onImages(nameValue = '', currentPage = 1) {
  return fetch(
    `${URL}?q=${nameValue}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}
