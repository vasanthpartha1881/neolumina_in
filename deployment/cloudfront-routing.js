function handler(event) {
    var request = event.request;
    // Next's static export stores each page at <route>/index.html.
    if (request.uri.endsWith('/')) {
        request.uri += 'index.html';
    } else if (!request.uri.split('/').pop().includes('.')) {
        request.uri += '/index.html';
    }
    return request;
}
