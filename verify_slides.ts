import { ourStoryContent } from './src/data/ourStory.i18n.ts';

for (const [lang, content] of Object.entries(ourStoryContent)) {
    console.log(`${lang}: ${content.slides.length} slides`);
}
