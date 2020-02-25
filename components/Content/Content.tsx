import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import Navigation from '../Navigation/Navigation';
import { Spinner, Notification } from '../common';
import { useWordsValue } from '../../state/words';
import { objectToArray } from '../../helpers';
import { useNotificationValue } from '../../state/notification';

const Content: React.FC<{ userUID: string }> = ({ userUID }): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [, wordsDispatch] = useWordsValue();
  const [, dispatchNotification] = useNotificationValue();

  console.log(userUID);

  useEffect(() => {
    const database = firebase.database();
    var connectedRef = database.ref('.info/connected');
    var dataRef = database.ref('words');

    const fetchingWords = (data: object[]): void => {
      wordsDispatch({ words: data });
      setLoading(false);
    };

    dataRef.on('value', (snapshot: any) => {
      const data = snapshot.val();
      if (data !== null) {
        fetchingWords(objectToArray(data).reverse());
      } else {
        connectedRef.on('value', snap => {
          if (snap.val() === true) {
            fetchingWords([]);
          } else {
            setLoading(true);
            dispatchNotification({ msg: 'Connection is lost' });
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
