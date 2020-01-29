import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import Navigation from '../Navigation/Navigation';
import { Spinner } from '../common';
import { useStateValue } from '../../state';
import { objectToArray } from '../../helpers';

const Content: React.FC = (): JSX.Element => {
  const [spinner, setSpinner] = useState(true);
  const [{ words, error }, dispatch] = useStateValue();

  useEffect(() => {
    const database = firebase.database().ref('words');
    database.on('value', (snapshot: any) => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch({
          type: 'FETCHING_WORDS',
          words: objectToArray(data).reverse()
        });
        setSpinner(false);
      } else {
        dispatch({
          type: 'FETCHING_FAILED',
          error: 'Fetching error'
        });
      }
    });
  }, [dispatch]);

  if (spinner) {
    return <Spinner />;
  }
  return <Navigation theme="light" />;
};

export default Content;
