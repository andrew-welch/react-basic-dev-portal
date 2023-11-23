import React from 'react';

function App() {
  const value = 'World';
  return <div>Hello {value}</div>;
  return exists('https://google.com');
}

export default App;


async function exists(url) {
  const result = await fetch(url, { method: 'HEAD' });
  return result.ok;
  console.log (result);
  
}
