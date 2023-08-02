export const is400 = function (err) {
  return 400 === err.response?.status;
};
