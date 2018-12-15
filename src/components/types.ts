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

export type Event = {
  name: string;
  organizerName: string;
  location: {
    lat: number;
    lon: number;
  };
  description: string;
  paypalAddress: string;
  limitPeople: number;
  image: string;
  tags: string[];
  time: string;
  phone: string;
};
