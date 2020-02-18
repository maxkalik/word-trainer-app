import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import Navigation from '../Navigation/Navigation';
import { Spinner, Notification } from '../common';
// import { useStateValue } from '../../state';
import { useWordsValue } from '../../state/words';
import { objectToArray } from '../../helpers';
import { useNotificationValue } from '../../state/notification';

const Content: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  // const [{ words }, wordsDispatch] = useStateValue();
  const [{ words }, wordsDispatch] = useWordsValue();
  const [{ notificationMsg }, dispatchNotification] = useNotificationValue();

  useEffect(() => {
    const database = firebase.database();
    var connectedRef = database.ref('.info/connected');
    var dataRef = database.ref('words');

    dataRef.on('value', (snapshot: any) => {
      const data = snapshot.val();
      if (data !== null) {
        wordsDispatch({
          type: 'FETCHING_WORDS',
          words: objectToArray(data).reverse()
        });
        setLoading(false);
      } else {
        connectedRef.on('value', snap => {
          if (snap.val() === true) {
            wordsDispatch({
              type: 'FETCHING_WORDS',
              words: []
            });
            setLoading(false);
          } else {
            setLoading(true);
            dispatchNotification({
              type: 'NOTIFICATION',
              notificationMsg: 'Connection is lost'
            });
          }
        });
      }
    });
  }, [wordsDispatch, dispatchNotification]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Notification />
      <Navigation theme="light" />
    </>
  );
};

export default Content;
