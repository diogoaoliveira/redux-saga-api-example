import React from 'react';

const Dumb = ({ data }) => (
  <div>
    {data.map(item => (
      <div key={item.id}>
        <p>{item.name}</p>
      </div>
    ))}
  </div>
);

export default Dumb;
