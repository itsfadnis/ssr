export default ({ appState, body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${ title }</title>
      </head>
      <body>
        <script>
          window.APP_STATE = ${ JSON.stringify(appState) };
        </script>
        <div id="app">${ body }</div>
        <script src="http://localhost:8081/assets/client.js"></script>
      </body>
    </html>
  `;
};
