import * as React from 'react';
import Event from './Event';
import { Account } from './types';

interface DiscoverPageProps {
    account: Account,
    events: Event[]
}
 
interface DiscoverPageState {
    
}
 
class DiscoverPage extends React.Component<DiscoverPageProps, DiscoverPageState> {
    constructor(props: DiscoverPageProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
            <div id="discover-page">
                <div id="other-events" className="grid-item">
                    <div className="inner-item">
                        <div className="events-titles">Discover</div>
                    </div>
                </div>
                <div id="common-events">
                    <div id="hot-events" className="grid-item-2">
                        <div className="inner-item">
                            <div className="events-titles">Hot</div>
                        </div>
                    </div>
                    <div id="new-events" className="grid-item-3">
                        <div className="inner-item">
                            <div className="events-titles">New</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DiscoverPage;