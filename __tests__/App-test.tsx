/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Btn, Spinner } from '../components/common';

// Note: test rerender must be required after react-native.
import TestRenderer from 'react-test-renderer';

it('Spinner Render', () => {
  TestRenderer.create(<Spinner />);
});

it('Button Render', () => {
  TestRenderer.create(<Btn filled title="Button" onPress={() => {}} mode="light" size="small" />);
  TestRenderer.create(<Btn filled title="Button" onPress={() => {}} mode="dark" size="large" />);
});
