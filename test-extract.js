function unescapeHtml(text) {
    return text
        .replace(/&quot;/g, '"')
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

function extractAndParse(bodyStr) {
    if (!bodyStr) return null;
    let cleanStr = bodyStr.trim();

    // If it was already ruined by Quill saving it as text: <p>[&nbsp;{...}</p>
    if (cleanStr.startsWith('<p>[') || cleanStr.startsWith('<p> [')) {
        // Strip the outer HTML tags to get pure text
        cleanStr = cleanStr.replace(/<[^>]*>?/gm, '');
        cleanStr = unescapeHtml(cleanStr);
    }

    if (cleanStr.startsWith('[')) {
        try {
            const arr = JSON.parse(cleanStr);
            if (Array.isArray(arr)) {
                // Return clean HTML
                return arr.map(block => `<p>${block.content || ''}</p>`).join('');
            }
        } catch (e) {
            console.log("Failed to parse:", cleanStr.slice(0, 50));
        }
    }

    // If it's pure HTML already (no brackets), leave it untouched
    console.log("Leaving untouched:", bodyStr.slice(0, 50));
    return bodyStr;
}

const input = `<p>[ { &quot;type&quot;: &quot;text&quot;, &quot;content&quot;: &quot;An engineering firm managing&quot; } ]</p>`;
console.log(extractAndParse(input));
