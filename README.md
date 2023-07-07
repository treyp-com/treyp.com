# [treyp.com](https://www.treyp.com)

This is the [treyp.com](https://www.treyp.com) static site.

It is hosted via [GitHub Pages](https://pages.github.com/). It is built using [Jekyll](https://jekyllrb.com/).

## Local development

Full instructions are available on the [GitHub Pages local development documentation](https://docs.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll).

### Setup

- Make sure you have Ruby 2.7.0 or higher installed: `ruby -v`
- Make sure you have the version of `bundler` installed in `Gemfile.lock`. If not, install it: `gem install bundler`
- `bundle install`

### Running the site

- `bundle exec jekyll serve`
- Navigate to [http://localhost:4000](http://localhost:4000)

### Updating to the latest `github-pages` gem

- `bundle update github-pages` or go ahead and update all gems: `bundle update`

## Publishing

Publishing happens automatically with pushes to the `master` branch.
