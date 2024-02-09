import axios from 'axios'
import * as cheerio from 'cheerio';

export async function getVerseOfTheDay() {
    const URL = "https://www.bible.com/verse-of-the-day";
    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        const scriptContents = $('script[type="application/ld+json"]').html() || "";
        const jsonContent = JSON.parse(scriptContents);

        // Extracting the URL of the image
        const imageURL = jsonContent.image.url[0];

        return {
            image: imageURL
        }
    } catch (err) {
        console.error(err);
    }
}