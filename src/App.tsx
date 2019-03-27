import React, { Component } from 'react';
import './App.scss';

function Section(props: any) {
  return (<>
    <div className="section">{props.children}</div>
    <br/>
  </>);
}

interface ITitleProps {
  company: string,
  title?: string,
}

function Title(props: ITitleProps) {
  if (props.title) {
    return (<h6 className="header">{props.company} <span className="font-weight-normal">&mdash; {props.title}</span></h6>);
  }
  return (<h6 className="header">{props.company}</h6>);
}

interface IDateProps {
  date: string,
}

function Date(props: IDateProps) {
  return (<span className="date">{props.date}</span>);
}

interface IDescProps {
  description?: string,
}

function Description(props: IDescProps) {
  if (props.description) {
    return (<p className="bodyText">{props.description}</p>);
  }
  return (<p className="bodyText"></p>);
}

interface IEntryProps {
  company: string,
  title?: string, 
  date: string,
  description?: string,
  visable?: boolean,
}

function Entry(props: IEntryProps) {
  return (<>
    <Title company={props.company} title={props.title}></Title>
    <Date date={props.date}></Date>
    <Description description={props.description}></Description>
  </>);
}

interface IList {
  title: string,
  values: string[],
}

function List(props: IList) {
  return (<>
    <p className="bodyText">
      <b>{props.title} </b>
      {props.values.join(' ')}.
    </p>
  </>);
}

interface IData {
  work: IEntryProps[],
  education: IEntryProps[],
  projects: IEntryProps[],
  skills: IList,
  courses: any,
  publications: IEntryProps[],
  awards: any,
}

interface IProps {};
interface IState { data: IData, loaded: boolean, };


class Resume extends Component<IProps, any> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      data: null,
      loaded: false,
    };
  }

  async componentDidMount() {
      const resp = await fetch('./resumeData.json');
      console.log(resp);
      // this.setState({ loaded: true })
  }

  render() {
    if (!this.state.loaded) return null;

    let workExpComps = this.state.data.work.map((x: any, i: any) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description}></Entry>); });
    let educationComps = this.state.data.education.map((x: any, i: any) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description}></Entry>); });
    let projectComps = this.state.data.projects.map((x: any, i: number) => { return (x.visable === false ? null : <Entry company={x.company} title={x.title} date={x.date} description={x.description}></Entry>); });
    let skillsComp = (<List title={this.state.data.skills.title} values={this.state.data.skills.values}>x</List>);
    // let courseComps = this.data.courses.map((x: any, i: number) => { return (x); });
    let publicationComps = this.state.data.publications.map((x: any, i: number) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description}></Entry>); });
    let awardComps = this.state.data.awards.map((x: any, i: number) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description}></Entry>); });

    return (
      <>
        <div className="container">

          <nav className="navBar">
            <div className="bodyText"><div className="left"></div><a className="home" href="./../index.html">back to home</a></div>
            <div className="bodyText"><a target="_blank" className="home" href="./resume.pdf">pdf download</a></div>
          </nav>
              
              <div className="title-row">
                <div id="summary">
                  <span className="title">Peter Dulworth </span><br/>
                  <span className="sub-title">Rice 2020 Math &amp; Computer Science - <a href="http://www.peterdulworth.com">peterdulworth.com</a></span>
                  <br/>
                </div>
                
                <div id="address">
                  6330 Main Street <br/>
                  Houston, Texas 77005 <br/>
                  <b>(832) 567-5653</b><br/>
                  <b>psd2@rice.edu</b><br/>
                </div>

                <div>
                  <Section>EXPERIENCE</Section>
                  {workExpComps}
                  <Section>EDUCATION</Section>
                  {educationComps}
                  <Section>PROJECTS</Section>
                  {projectComps}
                </div>

                <div>
                  <Section>SKILLS</Section>
                  {skillsComp}
                  {/* <Section>RELEVANT COURSEWORK</Section> */}
                  {/* {courseComps} */}
                  <Section>PUBLICATIONS</Section>
                  {publicationComps}
                  <Section>AWARDS</Section>
                  {awardComps}
                </div>

              </div>
        </div> {/* container */}
      </>
    );
  }
}

export default Resume;
