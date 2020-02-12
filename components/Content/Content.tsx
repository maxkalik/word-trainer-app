import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import Navigation from '../Navigation/Navigation';
import { Spinner, Notification } from '../common';
import { useStateValue } from '../../state';
import { objectToArray } from '../../helpers';

const Content: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [{ words, error, notificationMsg }, dispatch] = useStateValue();
  console.log('notificationMsg from Content:', notificationMsg);

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
            dispatch({
              type: 'FETCHING_FAILED',
              error: 'Connection is lost'
            });
          }
        });
      }
    });
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Notification title={error || notificationMsg} />
      <Navigation theme="light" />
    </>
  );
};

export default Content;
