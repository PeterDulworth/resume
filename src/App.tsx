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

class Resume extends Component<any, any> {

  public data: IData = {
    work: [
      {
        company: "Two Sigma",
        title: "Robotics Mentor",
        date: "Spring 2019",
        description: "FIRST robotics mentor for Yates HS (team 7115) through two sigma.",
      },
      {
        company: "Rice University COMP 310",
        title: "Teaching Assistant",
        date: "Spring 2019",
        description: "Responsibilities include: grading, and weekly office hours.",
      },
      {
        company: "Rice University COMP 182",
        title: "Teaching Assistant",
        date: "Spring 2018",
        description: "Responsibilities include: grading, weekly office hours, and assisting students with weekly in class problem solving sessions.",
      },
      {
        company: "Rice University Department of CS",
        title: "Research Assistant",
        date: "June 2017 - June 2018",
        description: "Built a python application for visualizing evolutionary diversity across genomes ALPHA: a toolkit for Automated Local PHylogenomic Analyses, that provides an intuitive user interface for phylogenetic analyses and data-viz.",
      },
      {
        company: "BreviTest Technologies LLC.",
        title: "SWE Intern",
        date: "Summer 2014 - 2016 ",
        description: "Built the backend (using node.js) of a website that connects our product (a rapid, point-of-care device which accurately automates enzyme immunoassays) to both the users and the company.",
      }
    ],
    education: [
      {
        company: "Rice University",
        title: "Computer Science B.S., Mathematics B.A.",
        date: "Fall 2016 - Spring 2020",
      }
    ],
    projects: [
      {
        company: "Moodsic: Image Classification",
        title: "Finalist at TAMU Hacks 2018",
        date: "Spring 2019",
        description: "Built a web application that takes in an image of the user, classifies it based on their expression using the Microsoft Azure API and recommends a playlist based on their mood using the Spotify API. Built in 24hrs at the 2018 TAMU hackathon using HTML, CSS, JavaScript, Python and Flask.",
      },
      {
        company: "Hidden Markov Model POS Tagging",
        date: "Spring 2017",
        description: "Developed a program to tag each word in a textfile with it's part of speech using a second order Hidden Markov Model and the trigram-viterbi algorithm.",
      },
      {
        company: "ChatApp",
        date: "Fall 2018",
        description: "Designed and implemented a flexible, extensible communications program using RMI with the ability to text chat and be dynamically extensible for the transmission of custom data using MVC for the app and mini-MVCs for chatrooms.",
      },
    ],
    skills: {
      title: "Languages & Technologies:",
      values: [
        "Python", "JavaScript", "Java", "C", "C++", "react.js", "TypeScript", "node.js", 
        "HTML", "CSS", "Sass / SCSS", "PHP", "PySpark", "Hadoop", "TensorFlow", "(VCS: git, svn)",
      ],
    },
    courses: {
      title: "Math & Science:",
      values: [
        "DiffE", "Lin. Al.", "Abstract Al.", "Real Analysis", "Modern Geometry", "Number Theory",
      ],
    },
    publications: [
      {
        company: "DGEN",
        title: "A Test Statistic for Detection of General Introgression Scenarios",
        date: "Presented: 21 August 2018",
        description: "WABI 2018, https://doi.org/10.1101/348649",
        visable: false,
      },
      {
        company: "ALPHA",
        title: "A Toolkit for Automated Local Phylogenomic Analyses",
        date: "Published: 19 March 2018",
        description: "Bioinformatics, bty173, https://doi.org/10.1093/bioinformatics/bty173",
        visable: false,
      },
    ],
    awards: [
      {
        company: "TAMU Hacks 2018",
        description: "Won the award for best project by first time hacker and was a finalist (top 7 out of 104 projects) at TAMU Hacks 2018.",
      },
      {
        company: "Rice University President's Honor Roll",
        description: "The President's Honor Roll is recognition of an undergraduate's outstanding academic achievement that particular semester (fall semester 2018).",
      },
      {
        company: "VEX Robotics",
        description: "3x world runner up, 3x math division champion. Ranked #1 in robot efficiency out of over 14,000 teams. 11x excellence award. 25x regional champ., 2x state champ.",
      },
    ],
  };

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    let workExpComps = this.data.work.map((x, i) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description}></Entry>); });
    let educationComps = this.data.education.map((x, i) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description}></Entry>); });
    let projectComps = this.data.projects.map((x: any, i: number) => { return (x.visable === false ? null : <Entry company={x.company} title={x.title} date={x.date} description={x.description}></Entry>); });
    let skillsComp = (<List title={this.data.skills.title} values={this.data.skills.values}>x</List>);
    // let courseComps = this.data.courses.map((x: any, i: number) => { return (x); });
    let publicationComps = this.data.publications.map((x: any, i: number) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description}></Entry>); });
    let awardComps = this.data.awards.map((x: any, i: number) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description}></Entry>); });

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
