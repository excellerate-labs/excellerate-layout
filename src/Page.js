// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type Props = {
  style?: StyleObj,
};

export default function Page(props: Props) {
  const { style, ...others } = props;
  return <View style={[styles.container, style]} {...others} />;
}

Page.defaultProps = {
  style: {},
};
