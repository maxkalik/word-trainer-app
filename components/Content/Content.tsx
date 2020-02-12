import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import Navigation from '../Navigation/Navigation';
import { Spinner, Notification } from '../common';
import { useStateValue } from '../../state';
import { objectToArray } from '../../helpers';

const Content: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [{ words }, dispatch] = useStateValue();
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const database = firebase.database();
    var connectedRef = database.ref('.info/connected');
    var dataRef = database.ref('words');

    dataRef.on('value', (snapshot: any) => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch({
          type: 'FETCHING_WORDS',
          words: objectToArray(data).reverse()
        });
        setLoading(false);
      } else {
        connectedRef.on('value', snap => {
          if (snap.val() === true) {
            dispatch({
              type: 'FETCHING_WORDS',
              words: []
            });
            setLoading(false);
          } else {
            setLoading(true);
            setErrorMsg('Connection is lost');
          }
        });
      }
    });
  }, [dispatch]);

  if (errorMsg) {
    return (
      <>
        <Notification title={errorMsg} />
        <Spinner />
      </>
    );
  }
  if (loading) {
    return <Spinner />;
  }
  return <Navigation theme="light" />;
};

export default Content;
