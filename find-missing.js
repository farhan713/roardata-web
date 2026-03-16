const fs = require('fs');

try {
    const allIndustries = JSON.parse(fs.readFileSync('industries-list.json', 'utf8'));
    const allSlugs = allIndustries.map(i => i.slug);

    const generated = [];
    for (let i = 1; i <= 5; i++) {
        if (fs.existsSync(`batch-${i}.json`)) {
            generated.push(...JSON.parse(fs.readFileSync(`batch-${i}.json`, 'utf8')));
        }
    }
    const generatedSlugs = generated.map(i => i.slug);

    const missing = allIndustries.filter(i => !generatedSlugs.includes(i.slug));
    
    console.log("Total in DB:", allSlugs.length);
    console.log("Total generated:", generatedSlugs.length);
    console.log("Missing industries:");
    missing.forEach(m => console.log(`- ${m.name} (${m.slug})`));

} catch(e) {
    console.error(e);
}
