import request from 'request';

const getContents = url => new Promise((resolve) => {
  request.get(url, (error, response, body) => {
    if (error) return resolve(`Error loading ${url}: ${error.message}`);

    return resolve(body);
  });
});

export default getContents;
