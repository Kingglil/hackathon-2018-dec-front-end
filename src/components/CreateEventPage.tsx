import * as React from "react";
import { Component } from "react";
import { Account } from "./types";
import EventComponent from "./Event";

export interface CreateEventPageProps {
  onClick: Function;
}

export interface CreateEventPageState {
  name: string;
  organizerName: string;
  lat: number;
  lon: number;
  description: string;
  paypal: string;
  phone: number;
  limitPeople: number;
  image: string;
  tags: string[];
  time: string;
}

class CreateEventPage extends React.Component<
  CreateEventPageProps,
  CreateEventPageState
> {
  state = {
    name: undefined,
    organizerName: undefined,
    lat: undefined,
    lon: undefined,
    description: undefined,
    paypal: undefined,
    phone: undefined,
    limitPeople: undefined,
    image: undefined,
    tags: undefined,
    time: undefined
  };
  constructor(props: CreateEventPageProps) {
    super(props);
  }
  handleTitleChange = e => {
    this.setState({ name: e.target.value });
  };
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };
  handleImageChange = e => {
    console.log(e);
    this.getBase64(e.target.files[0]).then(data =>
      this.setState({ image: data.toString() })
    );
  };
  /*handleFileButtonClick = e => {
    this.getBase64(e.target.files[0]).then(data =>
      this.setState({ imagesrc: data.toString() })
    );
  };*/
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
  inputStyle = { width: "100%" };
  render() {
    return (
      <div>
        <div id="create-event-page">
          <div id="create-event-form">
            <form className="pure-form pure-form-stacked">
              {/*Title */}
              <div>
                <label>Event Title</label>
                <input
                  style={this.inputStyle}
                  value={this.state.name}
                  onChange={this.handleTitleChange}
                  placeholder="Event Title"
                />
              </div>
              {/*Description */}
              <div>
                <label>Event Description</label>
                <textarea
                  style={this.inputStyle}
                  className="pure-input-1-2"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
              </div>
              {/* Image Src*/}
              <div>
                <label>Event Image</label>

                <div style={{ display: "inline" }}>
                  <div className="upload-btn-wrapper">
                    <button
                      className="pure-button pure-button-primary"
                      style={{ display: "inline" }}
                    >
                      Upload a file
                    </button>
                    <input
                      onChange={this.handleImageChange}
                      id="filefield"
                      type="file"
                    />
                  </div>

                  <button
                    style={{ display: "inline" }}
                    type="submit"
                    className="pure-button pure-button-primary"
                    onClick={this.handleButtonClick}
                  >
                    Submit
                  </button>
                </div>
              </div>
              {/* Organizer*/}
              <div>
                <label>Organizer</label>
                <input
                  style={this.inputStyle}
                  value={this.state.organizerName}
                  onChange={e => {
                    this.setState({ organizerName: e.target.value });
                  }}
                  placeholder="Organizer"
                />
              </div>
              {/* lat */}
              <div>
                <label>Географска ширина</label>
                <input
                  type="number"
                  style={this.inputStyle}
                  value={this.state.lat}
                  onChange={e => {
                    this.setState({ lat: parseInt(e.target.value) });
                  }}
                  placeholder="Географска ширина"
                />
              </div>
              {/* lon */}
              <div>
                <label>Географска дължина</label>
                <input
                  type="number"
                  style={this.inputStyle}
                  value={this.state.lon}
                  onChange={e => {
                    this.setState({ lon: parseInt(e.target.value) });
                  }}
                  placeholder="Географска дължина"
                />
              </div>
              {/* paypal */}
              <div>
                <label>PayPal адрес</label>
                <input
                  style={this.inputStyle}
                  value={this.state.paypal}
                  onChange={e => {
                    this.setState({ paypal: e.target.value });
                  }}
                  placeholder="PayPal адрес"
                />
              </div>
              {/* phone */}
              <div>
                <label>Телефонен номер</label>
                <input
                  type="number"
                  style={this.inputStyle}
                  value={this.state.phone}
                  onChange={e => {
                    this.setState({ phone: parseInt(e.target.value) });
                  }}
                  placeholder="Телефонен номер"
                />
              </div>
              {/* limitPeople */}
              <div>
                <label>Максимален брой хора</label>
                <input
                  type="number"
                  style={this.inputStyle}
                  value={this.state.limitPeople}
                  onChange={e => {
                    this.setState({ limitPeople: parseInt(e.target.value) });
                  }}
                  placeholder="Максимален брой хора"
                />
              </div>
              {/* tags */}
              <div>
                <label>Тагове</label>
                <input
                  style={this.inputStyle}
                  value={this.state.tags}
                  onChange={e => {
                    this.setState({ tags: e.target.value.split(" ") });
                  }}
                  placeholder="Тагове"
                />
              </div>
              {/* time */}
              <div>
                <label>Дата</label>
                <input
                  style={this.inputStyle}
                  value={this.state.time}
                  onChange={e => {
                    this.setState({ time: e.target.value });
                  }}
                  placeholder="Дата"
                />
              </div>
            </form>
          </div>
          <div id="event-preview">
            <EventComponent
              event={undefined}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEventPage;
