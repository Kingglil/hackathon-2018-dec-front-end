import * as React from "react";
import { Component } from "react";
import { Account } from "./types";

export interface CreateEventPageProps {
  account: Account;
}

export interface CreateEventPageState {
  title: string;
  description: string;
  creator: Account;
  imagesrc: string;
}

class CreateEventPage extends React.Component<
  CreateEventPageProps,
  CreateEventPageState
> {
  state = {
    title: undefined,
    description: undefined,
    creator: undefined,
    imagesrc: undefined
  };
  constructor(props: CreateEventPageProps) {
    super(props);
  }
  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };
  handleImageChange = e => {
    this.getBase64(e.target.files[0]).then(data =>
      this.setState({ imagesrc: data.toString() })
    );
  };
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  componentDidMount() {
    let newState = this.state;
    this.setState(newState);
  }
  handleButtonClick = () => {};
  inputStyle = { width: "80%" };
  render() {
    return (
      <div>
        <form className="pure-form pure-form-stacked">
          <label>Event Title</label>
          <input
            style={this.inputStyle}
            value={this.state.title}
            onChange={this.handleTitleChange}
            placeholder="Event Title"
          />
          <label>Event Description</label>
          <textarea
            style={this.inputStyle}
            className="pure-input-1-2"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <label>Event Image</label>
          <input
            style={this.inputStyle}
            id="file"
            type="file"
            accept="image/png, image/jpeg"
            onChange={this.handleImageChange}
          />
          <button
            type="submit"
            className="pure-button pure-button-primary"
            onClick={this.handleButtonClick}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateEventPage;