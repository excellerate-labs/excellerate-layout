// @flow
import * as React from 'react';
import { Text } from 'react-native';

import {
  Body,
  Col,
  Page,
  Row,
  Section,
  Spacing,
} from './src';

export default class App extends React.Component<*> {
  render() {
    return (
      <Page>
        <Body contentContainerStyle={{ padding: 16 }}>
          <Text>Section</Text>
          <Section style={{ borderColor: 'blue', borderWidth: 1, height: 50 }} />
          <Spacing />
          <Section>
            <Text>Row</Text>
            <Row style={{ alignItems: 'center', borderColor: 'red', borderWidth: 1, height: 100, justifyContent: 'space-around' }}>
              <Col style={{ borderColor: 'green', borderWidth: 1, height: 50, padding: 8 }}>
                <Text>Col</Text>
              </Col>
              <Col style={{ borderColor: 'green', borderWidth: 1, height: 50, padding: 8 }}>
                <Text>Col</Text>
              </Col>
              <Col style={{ borderColor: 'green', borderWidth: 1, height: 50, padding: 8 }}>
                <Text>Col</Text>
              </Col>
            </Row>
            <Spacing height={16} />
            <Row style={{ borderColor: 'orange', borderWidth: 1 }}>
              <Spacing width={50} />
              <Text>Horizontal</Text>
              <Spacing width={20} />
              <Text>Spacing</Text>
            </Row>
          </Section>
        </Body>
      </Page>
    );
  }
}
