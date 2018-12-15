export type Account = {
  username: string;
  fullname: string;
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
  paypal: string;
  phone: number;
  limitPeople: number;
  image: string;
  tags: string[];
  time: string;
};
