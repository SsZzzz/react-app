export const display = (flag) => {
  if (!flag) return { display: 'none' };
};

export const getJSON = (str) => {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return obj;
      } else {
        return;
      }
    } catch (e) {
      return;
    }
  }
  return;
};

export const downloadFile = (blob, filename) => {
  const a = document.createElement('a');
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};
