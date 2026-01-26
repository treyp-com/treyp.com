# [treyp.com](https://www.treyp.com)

This is the [treyp.com](https://www.treyp.com) static site.

It is hosted via [GitHub Pages](https://pages.github.com/).

### Running locally

This repo requires no build process. It is based on static files.

You can just launch the HTML file in your browser, but you'll run into CORS problems fetching data from the `file:///` protocol.

To get around that, just run a simple Python web server to host the files which requires no dependencies:

```sh
python3 -m http.server 8000
```

Then visit: http://localhost:8000/

## Publishing

Publishing happens automatically with pushes to the `master` branch.
