import { nameData } from './data';

export const getsuggestion = async function (name) {
  let result = [];
  if (name.length > 0) {
    result = nameData.filter((data) => {
      return data.substr(0, name.length).toLowerCase() === name.toLowerCase();
    });
  } else {
    result = [];
  }
  return new Promise((res) => {
    setTimeout(() => res(result), 500);
  });
};

export const debounce = function (fn) {
  let delay;
  let self = this;
  return function (...arg) {
    clearTimeout(delay);
    delay = setTimeout(function () {
      fn.apply(self, arg);
    }, 200);
  };
};
