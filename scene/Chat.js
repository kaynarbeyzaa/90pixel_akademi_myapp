
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  SafeAreaView
} from "react-native";

export class Chat extends Component {
  constructor(props){
    super(props);
    this.state= {
      message: '',
      messageArray: []
    };
  } 
  sendMessage=() => {
    const newArray=[...this.state.messageArray,this.state.message];
    this.setState({
      messageArray: newArray,
      message: ''
    })
  }
  render () {
    return (
      <SafeAreaView >
        <KeyboardAvoidingView style={styles.container} enabled>
          <ScrollView>
           <FlatList
              keyExtractor={(item, index) => `list-item-${index}`} 
              data={this.state.messageArray}
              extraData={this.state}
              renderItem={({ item ,index}) => (
                  <View key={index} style={styles.messageBubble}>
                    <Text style={styles.text}>{item}</Text>
                  </View>
              )}
            />
          </ScrollView>
          <View style={styles.bottom}>
            <TextInput
              placeholder="Text..."
              placeholderTextColor="#3d055b"
              value={this.state.message}
              onChangeText={(text) => 
                this.setState({message:text}) 
              }
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
              this.sendMessage()
              }}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c4c9e8",
  },
  bottom: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderColor: "#fff",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  messageBubble: {
    flex: 1,
    padding: 15,
    backgroundColor: "#3d055b",
    alignSelf: "flex-end",
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 50
  },
  text:{
    color: "#fff"
  },
  input: {
    height: 40,
    padding: 5,
    flex: 9,
    color: "#3d055b",
    marginLeft: 5
  },
  button: {
    alignSelf: 'stretch',
    padding : 10,
    backgroundColor : '#3d055b',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    alignSelf: "center"
  }
});

export default Chat;