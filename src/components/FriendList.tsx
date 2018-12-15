import * as React from "react";
import { Account } from "./types";

const friendsImage = require("./friendsicon-01.png");

interface FriendListProps {
  friendList: Account[];
}

interface FriendListState {
  shown: boolean;
}

class FriendList extends React.Component<FriendListProps, FriendListState> {
  constructor(props: FriendListProps) {
    super(props);
    this.state = { shown: false };
  }
  handleButtonClick = () => {
    this.setState({ shown: !this.state.shown });
  };
  render() {
    const items =
      this.props.friendList !== undefined
        ? this.props.friendList.map(friend => (
            <li
              className="collection-item avatar"
              style={{
                backgroundColor: "skyblue",
                paddingLeft: "0px"
              }}
            >
              <span>{friend.fullName}</span>
            </li>
          ))
        : undefined;
    console.log(items);
    return (
      <React.Fragment>
        <ul
          style={{
            overflowY: "scroll",
            overflowX: "hidden",
            color: "black",
            width: "200px",
            maxHeight: "500px",
            display: this.state.shown ? "block" : "none",
            position: "fixed",
            marginBottom: "0px",
            paddingBottom: "0px",
            bottom: "40px",
            right: "0px"
          }}
          className="collection"
        >
          {items}
        </ul>
        <img
          src={friendsImage}
          style={{
            width: "40px",
            height: "40px",
            position: "fixed",
            bottom: "0px",
            right: "0px"
          }}
          onClick={this.handleButtonClick}
        />
      </React.Fragment>
    );
  }
}

export default FriendList;

/*
<FriendList
            account={{
              name: "stoqn kolev",
              friendList: [
                { name: "stoqn kolev1", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev3", friendList: undefined },
                { name: "stoqn kolev4", friendList: undefined }
              ]
            }}
          />
*/
