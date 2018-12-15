import * as React from 'react';
import Event from './Event';

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
                        Other
                    </div>
                </div>
                <div id="common-events">
                    <div id="hot-events" className="grid-item">Hot</div>
                    <div id="new-events" className="grid-item">New</div>
                </div>
            </div>
        );
    }
}
 
export default DiscoverPage;