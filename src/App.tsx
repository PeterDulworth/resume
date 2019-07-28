import React, { useEffect, useState } from 'react';
import Section from './components/section/Section';
import List, { IList } from './components/list/List';
import Entry, { IEntryProps } from './components/entry/Entry';
import './App.scss';

interface IData {
  work: IEntryProps[],
  education: IEntryProps[],
  projects: IEntryProps[],
  skills: IList,
  courses: any,
  publications: IEntryProps[],
  awards: any,
}

const Resume = (props: any) => {
  const [data, setData] = useState<IData | null>(null);

  const handleFetchData = async () => {
      let resp = await fetch('http://peterdulworth.com/resume/resumeData.json');
      let dataJson = await resp.json();
      setData(dataJson);
  };

  useEffect(() => {
    handleFetchData().then();
  }, []);

  if (data === null) { 
    return (<div>loading ...</div>);
  } else {
    let workExpComps = data.work.map((x: any, i: any) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description} />); });
    let educationComps = data.education.map((x: any, i: any) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description} />); });
    let projectComps = data.projects.map((x: any, i: number) => { return (x.visable === false ? null : <Entry company={x.company} title={x.title} date={x.date} description={x.description} />); });
    let skillsComp = (<List title={data.skills.title} values={data.skills.values} />);
    // let courseComps = this.data.courses.map((x: any, i: number) => { return (x); });
    let publicationComps = data.publications.map((x: any, i: number) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description} />); });
    let awardComps = data.awards.map((x: any, i: number) => { return (<Entry company={x.company} title={x.title} date={x.date} description={x.description} />); });

    return (
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
      </div> 
  );
  }
};

export default Resume;
