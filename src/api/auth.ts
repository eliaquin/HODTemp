import configuration from './configuration';
import objToUrlEncoded from '../utils/objToUrlEncoded';

export const getCredentialsAreValid = async (credentials: {
  username: string;
  password: string;
}) => {
  const myCredentials = {...credentials, grant_type: 'password'};
  const urlEncodedData = objToUrlEncoded(myCredentials);
  return fetch(`${configuration.baseUrl}/api/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: urlEncodedData,
  })
    .then((response) => response.status === 200)
    .catch((_) => {
      return false;
    });
};
