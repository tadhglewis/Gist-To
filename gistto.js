const url = document.querySelector('[data-gist-to="url"]').getAttribute('data-gist-to-content');
const prefix = document.querySelector('[data-gist-to="prefix"]').getAttribute('data-gist-to-content');

var gistToUrl = '';

if (prefix) {
    gistToUrl = url + window.location.pathname.slice(urlPrefix.length);
} else {
    gistToUrl = url;
}

fetch(gistToUrl)
.then((response) => {
    response.text().then((text) => {
        var redirectUrl = '';

        if (response.status == 200) {
            redirectUrl = text;
        }

        const refresh = document.querySelector('[data-gist-to="refresh"]');
        const message = document.querySelector('[data-gist-to="message"]');

        if (!redirectUrl) {
            const dataGistTo = document.querySelectorAll('[data-gist-to]');

            for (var i = 0; i++; i < dataGistTo.length) {
                dataGistTo[i].remove();
            }
            
            return;
        }
        
        refresh.setAttribute('http-equiv', 'refresh');
        refresh.setAttribute('content', '0; url=' + redirectUrl);
        message.innerHTML = 'Redirecting to <a href="' + redirectUrl + '">' + redirectUrl + '</a>';
    }).catch((error) => {
        console.log(error);
    });
}).catch((error) => {
    console.log(error);
});