import * as React from "react";
import { Account } from "./types";

export interface FriendListProps {
  account: Account;
}

export interface FriendListState {}

class FriendList extends React.Component<FriendListProps, FriendListState> {
  constructor(props: FriendListProps) {
    super(props);
  }
  render() {
    const items = this.props.account.friendList.map(friend => (
      <p>{friend.name}</p>
    ));
    return { items };
  }
}

export default FriendList;
