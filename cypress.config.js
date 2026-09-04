module.exports = {
  defaultBrowser: "chrome", // <-- comment this line (or switch to chrome manually) to make test succeed
  blockHosts: [
    "cypress16-http2-blockhosts-b-git-f6c15d-koen-verheyens-projects.vercel.app",
  ],
  // forceHttp1: true, // <-- uncomment this line to make test succeed

  e2e: {
    baseUrl: "https://cypress16-http2-blockhosts-bug.vercel.app/",

    setupNodeEvents(on, config) {},
  },
};
