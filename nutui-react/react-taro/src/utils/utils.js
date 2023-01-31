const getQueryString = (url, name) => {
  const after = url.split("?")[1];
  if (after) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const arr = after.match(reg);
    if (arr != null) {
      return decodeURIComponent(arr[2]) || ""; // 第二个匹配组->([^&]*)
    } else {
      return "";
    }
  }
  return "";
};

const firstLetterUp = (s) => {
  return s.toLowerCase().replace(/\b([\w|‘]+)\b/g, function (word) {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });
};

module.exports = {
  firstLetterUp,
  getQueryString,
};
