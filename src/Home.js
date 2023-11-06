import React from 'react';

const homeStyle = {
  textAlign: 'center',
  padding: '100px',
  color: 'white',
};

function Home() {
  return (
    <div style={homeStyle}>
      <h1>Welcome to My Portfolio</h1>
      <p>Here, you can showcase see my skills and projects.</p>
    </div>
  );
}

export default Home;
