import * as React from 'react';
import Event from './Event';
import { Account } from './types';

export interface PersonalCreatedEventsPageProps {
    events: Event[];
    account: Account;
    //0 - Personal
    //1 - Created
    type: number;
}
 


export interface PersonalCreatedEventsPageState {
    
}
 


class PersonalCreatedEventsPage extends React.Component<PersonalCreatedEventsPageProps, PersonalCreatedEventsPageState> {
    

    constructor(props: PersonalCreatedEventsPageProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <div id="personal-created-events-page">
                <div id="personal-created-events-page-container">
                    <div className="events-titles">
                        {this.props.type === 0 ? "Personal events"
                            : "Created Events"}
                    </div>
                </div>
            </div>
        );
    }
}
 


export default PersonalCreatedEventsPage;