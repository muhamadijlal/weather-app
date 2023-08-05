export const is400 = function (err) {
  return 400 === err.response?.status;
};

export const is401 = function (err) {
  return 401 === err.response?.status;
};

export const is403 = function (err) {
  return 403 === err.response?.status;
};

export const is404 = function (err) {
  return 404 === err.response?.status;
};
