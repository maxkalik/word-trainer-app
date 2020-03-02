import React from 'react';
import { NavigationAuth } from '../../components/navigation';
import { Notification } from '../../components/common';

const Content: React.FC = (): JSX.Element => (
  <>
    <Notification />
    <NavigationAuth theme="light" />
  </>
);

export default Content;
