import * as React from 'react';
import { Account, Event } from './types';
import EventComponent from './Event';

export interface PersonalCreatedEventsPageProps {
    events: Event[];
    account: Account;
    //0 - Personal
    //1 - Created
    type: number;
    onClick: Function;
}
 


export interface PersonalCreatedEventsPageState {
    
}
 


class PersonalCreatedEventsPage extends React.Component<PersonalCreatedEventsPageProps, PersonalCreatedEventsPageState> {


    constructor(props: PersonalCreatedEventsPageProps) {
        super(props);
        this.state = {  };
    }

    onClick = () => {

    }

    render() { 
        const items = this.props.events.map((value) => (
            <div className="event-card full-width">
              <EventComponent height={200} onClick={this.onClick} event={value} />
            </div>
          ));

        return ( 
            <div id="personal-created-events-page">
                <div id="personal-created-events-page-container">
                    <div className="events-titles">
                        <p>{this.props.type === 0 ? "Personal events"
                            : "Created Events"}</p>
                        <div className="pc-events">
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 


export default PersonalCreatedEventsPage;