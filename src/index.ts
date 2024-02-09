import { getVerseOfTheDay } from './verseOfTheDay'

(async () => {
    await getVerseOfTheDay().then((data) => console.log(data?.image));
  })();