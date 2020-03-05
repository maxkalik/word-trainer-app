import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import { NavigationMain } from '../navigation';
import { Spinner, Notification } from '../common';
import { objectToArray } from '../../helpers';
import { useUserValue, useNotificationValue, useWordsValue } from '../../state';

const Content: React.FC<{ user: any }> = ({ user }): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [, wordsDispatch] = useWordsValue();
  const [, dispatchNotification] = useNotificationValue();
  const [, dispatchUser] = useUserValue();

  useEffect(() => {
    dispatchUser({ user });
  }, [dispatchUser, user]);

  useEffect(() => {
    const database = firebase.database();
    var connectedRef = database.ref('.info/connected');
    var dataRef = database.ref(`${user.uid}/words`);

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
  }, [wordsDispatch, dispatchNotification, user.uid]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Notification />
      <NavigationMain />
    </>
  );
};

export default Content;
