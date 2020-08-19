const debounce = (inpFun, wait) => {
  let timeout;
  return function () {
    if (!timeout) {
      inpFun.apply(this, arguments);
      timeout = setTimeout(() => {
        timeout = undefined;
      }, wait);
    }
  };
};

export default debounce;
