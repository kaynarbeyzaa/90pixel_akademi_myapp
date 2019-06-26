
import React, { Component } from "react";
import { FlatList, StyleSheet,Text} from "react-native";
import { List, ListItem } from "react-native-elements";
import { Actions } from "react-native-router-flux";
;


class Contacts extends Component {
    state = {
      seed:1,
      page:1,
      data:[],
      loading:false,
      refreshing:false,
    };
    
   
    handleRefresh = () => {
        this.setState(
          {
            page: 1,
            seed: this.state.seed + 1,
            refreshing: true
          },
          () => {
            this.makeRemoteRequest();
          }
        );
    };
    
    handleLoadMore = () => {
        this.setState(
          {
            page: this.state.page + 1
          },
          () => {
            this.loadUsers();
          }
        );
    };
    
    componentDidMount() {
        this.loadUsers();
    }
    
    loadUsers = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });
    
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: page === 1 ? res.results : [...this.state.data, ...res.results],
              refreshing: false,
              loading:false
            });
          })
          .catch(error => {
            console.error(err);
          });
    };
    
    render() {
        return (
          <List style={style.scene}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <ListItem
                  button 
                  roundAvatar
                  title={item.name.first}
                  subtitle={item.email}
                  avatar={{ uri: item.picture.thumbnail }}
                  onPress={() => 
                  Actions.Chat()}
                  
                />
                
              
              )}
            
              keyExtractor={item => item.email}
              onRefreshing={this.handleRefresh}
              refreshing={this.state.refreshing}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={0}
              
            />
          </List>
        );
    }
}

const style = StyleSheet.create({
    scene: {
        flex:1,
        paddingTop:25,
        borderTopWidth:0,
        borderBottomWidth:0
    },
    user:{
        width:'100%',
        backgroundColor:'#333',
        marginBottom:10,
        paddingLeft:25,
    },
    userName:{
        fontSize:17,
        paddingVertical:20,
        color:'#fff'
    }
});


export default Contacts;

