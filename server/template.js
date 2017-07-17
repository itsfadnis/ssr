export default ({ appState, body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${ title }</title>
        <link rel="stylesheet" href="http://localhost:8081/assets/app.css" />
      </head>
      <body>
        <script>
          window.APP_STATE = ${ JSON.stringify(appState) };
        </script>
        <div id="app">${ body }</div>
        <script src="http://localhost:8081/assets/app.js"></script>
      </body>
    </html>
  `;
};
