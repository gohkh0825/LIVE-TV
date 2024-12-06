export function copyToClipboard(text) {
  return navigator.clipboard.writeText(text)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}