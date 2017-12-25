// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

type Props = {
  style?: StyleObj,
};

export default function Row(props: Props) {
  const { style, ...others } = props;
  return <View style={[styles.container, style]} {...others} />;
}

Row.defaultProps = {
  style: {},
};
