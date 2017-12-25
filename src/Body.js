// @flow
import React from 'react';
import { ScrollView, View } from 'react-native';

type Props = {
  fixed?: boolean,
};

export default function Body(props: Props) {
  const { fixed, ...others } = props;
  if (fixed) {
    return <View {...others} />;
  }
  return <ScrollView {...others} />;
}

Body.defaultProps = {
  fixed: false,
};
