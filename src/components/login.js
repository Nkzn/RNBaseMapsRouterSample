import React from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class Login extends React.Component {

  login() {
    Actions.pageA();
  }

  render() {
    return (
      <Container style={{backgroundColor: '#FBFAFA'}}>
        <Header>
          <Left>
          </Left>

          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Login'}</Title>
          </Body>

          <Right>
          </Right>
        </Header>
        <Content>
          <Button onPress={() => this.login()}>
            <Text>ろぐいん</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}