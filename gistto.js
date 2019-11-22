const gistUrl = 'https://gist.githubusercontent.com/tadhglewis/b90c2f422081a7870f8abae69223d105/raw';
const urlPrefix = ''


fetch(gistUrl + window.location.pathname.slice(urlPrefix.length))
.then((response) => {
    response.text().then((text) => {
        var redirectUrl = '';

        if (response.status == 200) {
            redirectUrl = text;
        }

        var refresh = document.head.querySelector('[data-gist-to="refresh"]');
        var message = document.body.querySelector('[data-gist-to="message"]');

        if (!redirectUrl) {
            refresh.remove();
            message.remove();
            return;
        }
        
        refresh.setAttribute('content', "0; url=" + redirectUrl);
        message.innerHTML = 'Redirecting to <a href="' + redirectUrl + '">' + redirectUrl + '</a>';
    }).catch((error) => {
        console.log(error);
    });
}).catch((error) => {
    console.log(error);
});