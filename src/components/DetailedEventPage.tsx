import * as React from 'react';
import { Event, Account } from './types';
import { fetchPost } from './lib';
import { Link } from 'react-router-dom';
import MyMapWithSetMarker from "./GoogleMapsWithSetMarkers";

export interface DetailedEventPageProps {
    match: any;
    account: Account;
    onClick: Function;
}

export interface DetailedEventPageState {
  event: Event;
}
class DetailedEventPage extends React.Component<DetailedEventPageProps, DetailedEventPageState> {
    state = {
        event: undefined
    }
    async componentDidMount() {
        console.log("The event is");
        let res = await fetchPost("getEventDetails", { id: this.props.account._id, name: this.props.match.params.name })
        let event = await res.json();
        console.log(event);
        
        this.setState({ event: event.event });
    }

    render() {         
        console.log("render");
        
        console.log(this.state.event);
        
        if(this.state.event !== undefined) {
            return (
                <div id="discover-page">
                    <div id="other-events" className="grid-item">
                        <div className="inner-item">
                            <img src={this.state.event.image} />
                            <p>Име: {this.state.event.name}</p>
                            <p>Организатор: {this.state.event.organizerName}</p>
                            <p>Описасние: {this.state.event.description}</p>
                            <p>Места: {this.state.event.limitPeople}</p>
                            <p>Дата: {this.state.event.time}</p>
                            <p>Адрес: {this.state.event.address}</p>
                            <p>Телефон за връзка: {this.state.event.phone}</p>
                        </div>
                    </div>
                    <div id="common-events">
                        <div id="hot-events" className="grid-item-2">
                            <div className="inner-item">
                            <MyMapWithSetMarker
                                lat={this.state.event.location.lat.toString()}
                                lon={this.state.event.location.lon.toString()}
                            />
                            </div>
                        </div>
                        <div id="new-events" className="grid-item-3">
                            <div className="inner-item">
                                <div className="buy-ticket-container">
                                    <Link to="/">
                                    <button className="buy-ticket"
                                        onClick={async () => {
                                            let res = await fetchPost("joinEvent", {
                                                id: this.props.account._id,
                                                name: this.state.event.name
                                            });
                                            let data = await res.json();
                                            if(data.code !== 0) {
                                                alert("Грешка!");
                                            }
                                            this.props.onClick();
                                        }}>Купи Билет</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return <></>
        }
    }
}

export default DetailedEventPage;
