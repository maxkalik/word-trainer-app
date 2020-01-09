interface Word {
  id: string;
  word: string;
  translation: string;
}

const objectToArray = (obj: any): Word[] => {
  const result = Object.keys(obj).map(
    (key: string): Word => {
      return { id: key, ...obj[key] };
    }
  );
  return result;
};

export default objectToArray;
