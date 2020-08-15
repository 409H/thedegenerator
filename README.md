# The Degenerator

### Development

If you want to update it:

```
npm install
gulp watch
```

This will watch for file changes and have everything compiled to `./dist`. Open up `./dist/index.html` in your browser to view it (or in vscode, right click `./dist/index.html` > "Open with Live Server" to get auto-refresh on changes in the browser)

All the files are in the `./src` directory - it's simple HTML and SASS.

### Deploy

If you're wanting to deploy - we use `gulp-gh-pages` to deploy the contents of `./dist` to a `gh-pages` branch so that Github will host it. 

Simply run `gulp deploy` and follow the instructions - it will deploy to your `origin`.