import React from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class PageA extends React.Component {
  render() {
    return (
      <Container style={{backgroundColor: '#FBFAFA'}}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.login({ type: ActionConst.RESET })}>
              <Icon active name="power" />
            </Button>
          </Left>

          <Body>
            <Title>ほーむ</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => Actions.pageB()}>
              <Icon active name="map" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>ほーむほげほげ</Text>
        </Content>
      </Container>
    );
  }
}