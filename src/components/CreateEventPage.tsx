import * as React from "react";
import { Component } from "react";
import { Account, Event } from "./types";
import EventComponent from "./Event";
import { fetchPost } from "./lib";
import MyMap from "./GoogleMapsTest";

interface CreateEventPageProps {
  onClick: Function;
}

class CreateEventPage extends React.Component<CreateEventPageProps, Event> {
  state = {
    name: undefined,
    organizerName: undefined,
    location: {
      lat: undefined,
      lon: undefined
    },
    description: undefined,
    paypalAddress: undefined,
    phone: undefined,
    limitPeople: undefined,
    image: undefined,
    tags: undefined,
    time: undefined,
    address: undefined
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
  handleAddressChange = (e) => {
      this.setState({
        address: e.target.value
      });
    e.preventDefault();
  }
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
  handleButtonClick = async (event) => {
    let res = await fetchPost("addEvent", this.state);
    let data = await res.json();
    if(data.code === 0) {
      alert("nqma6 gre6ka kolega");
    } 
    else {
      alert("ima6 gre6ka kolega");
    }
    event.preventDefault();
  };
  inputStyle = { width: "100%" };
  render() {
    return (
      <React.Fragment>
        <div style={{ height: "500px", width: "500px" }}>
          <MyMap
            onMarkerPlaced={coords => {
              let lat = coords.lat().toFixed(5);
              let lng = coords.lng().toFixed(5);
              this.setState({ location: { lat: lat, lon: lng } });
            }}
          />
        </div>
        <div>
          <div id="create-event-page">
            <div id="create-event-form">
              <form className="pure-form pure-form-stacked">
                {/*Title */}
                <div>
                  <label>Заглавие</label>
                  <input
                    style={this.inputStyle}
                    value={this.state.name}
                    onChange={this.handleTitleChange}
                    placeholder="Заглавие"
                  />
                </div>
                {/*Description */}
                <div>
                  <label>Описание</label>
                  <textarea
                    style={this.inputStyle}
                    className="pure-input-1-2"
                    placeholder="Описание"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                  />
                </div>
                {/* Organizer*/}
                <div>
                  <label>Организатор</label>
                  <input
                    style={this.inputStyle}
                    value={this.state.organizerName}
                    onChange={e => {
                      this.setState({ organizerName: e.target.value });
                    }}
                    placeholder="Организатор"
                  />
                </div>
                {/* lat */}
                <div>
                  <label>Географска ширина</label>
                  <input
                    type="number"
                    style={this.inputStyle}
                    value={this.state.location.lat}
                    onChange={e => {
                      this.setState({
                        location: {
                          lat: parseInt(e.target.value),
                          lon: this.state.location.lon
                        }
                      });
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
                    value={this.state.location.lon}
                    onChange={e => {
                      this.setState({
                        location: {
                          lon: parseInt(e.target.value),
                          lat: this.state.location.lat
                        }
                      });
                    }}
                    placeholder="Географска дължина"
                  />
                </div>
                {/* paypal */}
                <div>
                  <label>PayPal адрес</label>
                  <input
                    style={this.inputStyle}
                    value={this.state.paypalAddress}
                    onChange={e => {
                      this.setState({ paypalAddress: e.target.value });
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
                      this.setState({ phone: e.target.value });
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
                      this.setState({
                        tags: e.target.value.split(",")
                      });
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

                  <button
                    style={{ display: "inline" }}
                    type="button"
                    className="pure-button pure-button-primary"
                    onClick={this.handleButtonClick}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div id="event-preview">
              <EventComponent event={this.state} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateEventPage;
/** {/* Address 6matki 
<div>
<label>Дата</label>
<input
  style={this.inputStyle}
  value={this.state.address}
  onChange={e => {
    this.setState({ address: e.target.value });
  }}
  placeholder="Адрес"
/>
</div> */