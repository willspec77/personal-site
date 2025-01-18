import React from 'react';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="William Spector's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>Resume</h2>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
