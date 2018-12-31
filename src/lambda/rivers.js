const newRiver = () => {
  return {
    river: 'Shoalhaven River',
    height: '1.12',
    time: '2018-12-30T22:10:54+00:00'
  };
};

const riverInfo = [newRiver(),newRiver(),newRiver()]

export function handler(event, context, callback) {
  // console.log('queryStringParameters', event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    headers: {"content-type": "application/json"},
    body: JSON.stringify(riverInfo)
  });
}
