const objToUrlEncoded = (obj: Record<string, string>) =>
  Object.keys(obj)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    .join('&');

export default objToUrlEncoded;
