import React, { Component } from "react";
import FriendCard from "./components/friendcard";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends 
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  selectFriend =()=> {
    console.log("clicked friend");

    // /**
//  * Shuffles array in place.
//  * @param {Array} a items An array containing the items.
//  */
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
    }
    const newOrder = shuffle(this.state.friends) 
    this.setState({friends: newOrder});
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log("state", this.state);
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard 
          selectFriend ={this.selectFriend}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;