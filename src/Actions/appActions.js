export const add = 'add';
export const rem = 'rem';

export const addFeat = item => {
  return { type: add, payload: item };
};

export const removeFeat = item => {
  return { type: rem, payload: item };
};
