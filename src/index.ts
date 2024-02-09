import { getVerseOfTheDay } from './verseOfTheDay'
import { getVerse } from './verse'

(async () => {
    await getVerseOfTheDay().then((data) => console.log(data?.image));
  })();