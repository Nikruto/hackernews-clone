export default (url) => {
  try {
    return new URL(url).hostname;
  } catch (e) {
    return null;
  }
};
