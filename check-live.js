const https = require('https');

https.get('https://roardata.com.au/', (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const match = data.match(/<link[^>]*rel="canonical"[^>]*>/i);
        if (match) {
            console.log('Live Canonical Tag:');
            console.log(match[0]);
        } else {
            console.log('No canonical tag found.');
        }
    });
}).on('error', (err) => {
    console.error('Error fetching live site:', err.message);
});
