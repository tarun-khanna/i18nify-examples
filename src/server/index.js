// server/index.js
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const AppServer = require("../containers/App").default;
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

// Middleware to extract the locale from the 'Accept-Language' header
app.use((req, res, next) => {
  // Parse the 'Accept-Language' header to get the preferred language and locale
  const acceptLanguage = req.header("Accept-Language");
  const [preferredLanguage] = acceptLanguage.split(",");

  // Extract the locale from the preferred language (e.g., 'en-US' from 'en-US,en;q=0.9')
  const [locale] = preferredLanguage.split(";")[0].trim().split("-");

  // Attach the extracted locale to the request object for later use
  req.locale = locale;

  // Call the next middleware in the stack
  next();
});

app.get("/", (req, res) => {
  const content = ReactDOMServer.renderToString(
    <AppServer data={{ locale: req.locale }} />
  );
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
        <script>
          // Embedding data in the window object
          window.__INITIAL_DATA__ = ${JSON.stringify({ locale: req.locale })};
        </script>
        <script defer src="/bundle.js"></script>
      </head>
      <body>
        <div id="root">${content}</div>
        <div id="approot"></div>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
