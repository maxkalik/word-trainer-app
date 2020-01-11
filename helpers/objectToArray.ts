interface FireBaseProps {
  word: string;
  translation: string;
}

interface Words {
  id: string;
  word: string;
  translation: string;
}

const objectToArray = (obj: { [id: string]: FireBaseProps }): Words[] => {
  const result = Object.keys(obj).map(
    (key: string): Words => {
      return { id: key, ...obj[key] };
    }
  );
  return result;
};

export default objectToArray;
