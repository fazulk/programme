let counter = 2;
export default () => {
  counter = counter * 2;
  return JSON.stringify(counter);
};
