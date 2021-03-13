import axios from 'axios';

export const getToken = async (urlEncodedData: string) => {
  axios
    .post(`https://app.bigwavesystems.com/api/token`, urlEncodedData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
