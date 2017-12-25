// @flow
import React from 'react';
import { View } from 'react-native';

type Props = {
  height?: number,
  width?: number,
};

export default function Spacing(props: Props) {
  const { height, width } = props;
  return (
    <View style={{ height, width }} />
  );
}

Spacing.defaultProps = {
  height: 8,
  width: 8,
};
