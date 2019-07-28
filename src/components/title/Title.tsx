import React from 'react';

interface ITitleProps {
    company: string,
    title?: string,
}
  
const Title = (props: ITitleProps) => {
    if (props.title) {
      return (<h6 className="header">{props.company} <span className="font-weight-normal">&mdash; {props.title}</span></h6>);
    }
    return (<h6 className="header">{props.company}</h6>);
};

export default Title;