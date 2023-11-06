import React from 'react';

const projectStyle = {
  background: '#f4f4f4',
  padding: '20px',
};

function Projects() {
  return (
    <section style={projectStyle}>
      <h2>My Projects</h2>
      <div className="project">
        <h3>Calculator</h3>
        <p>I have made a calculator using React</p>
      </div>
      <div className="project">
        <h3>Word Counter</h3>
        <p>I have made a Word counter using React</p>
      </div>
      <div className="project">
        <h3>Age Calculator</h3>
        <p>I have made a Age Calculator using React</p>
      </div>
      {/* Add more project entries as needed */}
    </section>
  );
}

export default Projects;
