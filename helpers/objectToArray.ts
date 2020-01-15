const objectToArray = (obj: { [key: string]: object }): object[] => {
  const result = Object.keys(obj).map(key => {
    return { id: key, ...obj[key] };
  });
  return result;
};

export default objectToArray;
