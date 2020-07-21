const LIVERELOAD_HOST = 'localhost:';
const LIVERELOAD_PORT = 35729;

const setup = () => {
  // @ts-ignore
  if (__isEnvDevelopment) {
    /*
     * Reload client for Chrome Apps & Extensions.
     * The reload client has a compatibility with livereload.
     * WARNING: only supports reload command.
     */
    const connection = new WebSocket(`ws://${LIVERELOAD_HOST}${LIVERELOAD_PORT}/livereload`);
    connection.onerror = function (error) {
      return console.log('reload connection got error', JSON.stringify(error));
    };
    connection.onmessage = function (response) {
      if (response.data) {
        const data = JSON.parse(response.data);
        if (data && data.command === 'reload') {
          // @ts-ignore
          return chrome.runtime.reload();
        }
      }
    };
  }
};

export default setup;
