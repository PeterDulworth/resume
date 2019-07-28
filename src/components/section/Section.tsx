import React from 'react';

const Section = (props: any) => {
    return (<>
        <div className="section">{props.children}</div>
        <br/>
    </>);
};

export default Section;