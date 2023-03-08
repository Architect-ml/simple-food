export const server = (done) => {
  app.plugins.browsersync.init({
    server: { baseDir: `${app.path.build.html}` },
    notify: false,
    port: 3000,
    browser: '/mnt/c/Program Files/Google/Chrome/Application/chrome.exe',
  })
}