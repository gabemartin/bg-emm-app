import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Picker, Form } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



//Display a list of vehicles, from carList, as radio options
export default function Admin_One_Vehicle(props) {

  const selectCars = props.cars.map((car) =>{
      <Picker.Item label={car.model} value={car.id} />
  });   

  return(
    <Container>
        <Header noShadow style={{height: 100, backgroundColor: '#505050', paddingLeft: 0}}>
            <Left>
                <TouchableOpacity 
                    onPress = {() =>{props.goBack()}}
                    style={{backgroundColor: '#E5C035', margin: 0}}>
                    <Image
                        style={{width: 60, height: 60, margin: 20, resizeMode: 'contain',}}
                        source={require('../assets/arrow-left.png')}
                    />
                </TouchableOpacity>
            </Left>
            <Body>
                <Title>Header</Title>
            </Body>
            <Right>
                <Image
                    style={{width: 120, height: 70, resizeMode: 'contain', marginRight: 20}}
                    source={require('../assets/emm-logo-large.png')}
                />
            </Right>
        </Header>
        <Content>
          <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 200 }}
              onValueChange={props.oneCarChoice}
            >
              <Picker.Item label="SELECT VEHICLE" value="100" />
              <Picker.Item label={props.cars[0].model} value={props.cars[0].id} />
              <Picker.Item label={props.cars[1].model} value={props.cars[1].id} />
              <Picker.Item label={props.cars[2].model} value={props.cars[2].id} />
              <Picker.Item label={props.cars[3].model} value={props.cars[3].id} />
            </Picker>
          </Form>
        </Content>
    </Container>
  );
}
