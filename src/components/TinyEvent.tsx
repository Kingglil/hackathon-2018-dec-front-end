import * as React from 'react';
import { Event } from './types';

export interface TinyEventProps {
    event: Event;
    onClick?: Function;
    height?: number;
}
 
export interface TinyEventState {
    
}
 
class TinyEvent extends React.Component<TinyEventProps, TinyEventState> {
    static defaultProps = {
        event: {
          name: "No name",
          description: "No desc"
        },
        height: 400
      }

    onClick = () => {
        if(this.props.onClick !== undefined) {
            this.props.onClick(this.props.event);
        }
    }

    render() { 
        return (
            <div onClick={this.onClick} className="row tiny" style={{ maxWidth: "400", maxHeight: this.props.height, padding: "20px" }}>
                <div className="card">
                    <span className="card-title" style={{ color: "blue" }}>
                        {this.props.event.name}
                    </span>
                    <div className="card-content">
                        <p className="event-card-p">{this.props.event.description}</p>
                    </div>
                    <div className="card-action">
                        <p className="event-card-p">{this.props.event.address}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TinyEvent;