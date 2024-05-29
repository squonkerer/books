import React, { useState } from 'react';

function Book({ title, author}) {
  const [readCount, setReadCount] = useState(0);

  const handleRead = () => {
    setReadCount(readCount + 1);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Read Count: {readCount}</p>
      <button onClick={handleRead}>Read Again</button>
    </div>
  );
}

export default Book;