export type Account = {
  _id: number;
  username: string;
  fullName: string;
  email: string;
  password: string;
  phone: number;
  paypalAddress: string;
  organazier: string;
  friendList: Account[];
};

export type Event = {};
