import * as React from "react";

type LandingPageProps = {
    onClick: Function
}

const LandingPage = (props: LandingPageProps) => {
    
    const onClick = (path: number) => {
        props.onClick(path);   
    }

    return (
        <div>
            <div>lp</div>
            <button onClick={() => onClick(1)}>l</button>
            <button onClick={() => onClick(2)}>r</button>
        </div>
    );
};

export default LandingPage;
