# Gist-To

Simple Gist and GitHub pages based url shortener



### Limitations
- As this is a client-side JavaScript based url shortener the browser must have JavaScript enabled

### Setup
- Add `<meta data-gist-to="url" data-gist-to-content="YOUR_URL">` in the head tag
- Add `<meta data-gist-to="prefix" data-gist-to-content="YOUR_PREFIX">` in the head tag (optional)
- Add `<meta data-gist-to="refresh">` in the head tag
- Add `<p data-gist-to="message"></p>` at the bottom of the body tag
- Add `<script src="gistto.js"></script>` at the bottom of the body tag

### Notes
- `YOUR_URL` is the Gist URL. To set this up simply create a Gist and add files with the Filename as the custom alias you want and the contents of the Gist as the url you want that alias to redirect to (eg [https://gist.github.com/tadhglewis/b90c2f422081a7870f8abae69223d105](https://gist.github.com/tadhglewis/b90c2f422081a7870f8abae69223d105))
- `YOUR_PREFIX` is the url prefix before the custom alias (eg /goto)
- When using GitHub Pages the setup instructions should be followed but added to the 404 page. This should not affect the 404 page unless the url matches a custom alias in the Gist (in which case it would redirect)

### Other
- This was intended to be used as a url shortener using Gists and GitHub Pages however it may be possible to host this on your own server.
- Examples: [https://tadhglewis.github.io/Gist-To/gt](https://tadhglewis.github.io/Gist-To/gt), [https://tadhglewis.github.io/Gist-To/tl](https://tadhglewis.github.io/Gist-To/tl) all examples at [https://gist.github.com/tadhglewis/b90c2f422081a7870f8abae69223d105](https://gist.github.com/tadhglewis/b90c2f422081a7870f8abae69223d105)

### Todo
- Possibility of Google Analytics
- Preview url before redirecting (eg /preview) 