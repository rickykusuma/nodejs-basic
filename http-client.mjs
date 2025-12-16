import https from 'https';

const url = 'https://webhook.site/d1db7b75-c363-4bf7-a050-a4bd4f45c82b';

const request = https.request(
  url,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
  (response) => {
    response.addListener('data', (data) => {
      console.info(`Receive: ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: 'Ricky',
  lastName: 'Kusuma',
});

request.write(body);
request.end();
