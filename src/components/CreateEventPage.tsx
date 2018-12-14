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
    let newState = {
      title: "title",
      description: "desc",
      creator: this.props.account,
      imagesrc: undefined
    };
    this.setState(newState);
  }
  handleButtonClick = () => {};
  render() {
    return (
      <form className="pure-form pure-form-aligned">
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="title">Event Title:</label>
            <input
              id="title"
              value={this.state.title}
              onChange={this.handleTitleChange}
              placeholder="Event Title"
            />
          </div>

          <div className="pure-control-group">
            <label htmlFor="description">Event Description</label>
            <textarea
              id="description"
              className="pure-input-1-2"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </div>

          <div className="pure-control-group">
            <label htmlFor="file">Event Image</label>
            <input
              id="file"
              type="file"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
            />
          </div>
          <div className="pure-controls">
            <button type="submit" className="pure-button pure-button-primary">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default CreateEventPage;
