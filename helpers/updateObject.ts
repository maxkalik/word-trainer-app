const updateObject = (obj: object, newProp: object): object => {
  return { ...obj, ...newProp };
};

export default updateObject;
