export const request = type => ({
  type,
});

export const receive = (type, property, data) => ({
  type,
  [property]: data,
});

export const receiveAll = (type, data) => ({
  type,
  ...data,
});

export const error = (type, err) => ({
  type,
  response: err,
});
