const gistUrl = 'https://gist.githubusercontent.com/tadhglewis/a2abf9cac2dcbe1e53db67ada6e50bbf/raw';



fetch(gistUrl + window.location.pathname)
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