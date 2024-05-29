import React, { useState } from 'react';

function AddBookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDesription] = useState('');
  const [coverUrl, setCoverUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    onAddBook({ title, author, coverUrl, description });
    setTitle('');
    setAuthor('');
    setCoverUrl('');
    setDesription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDesription(e.target.value)} />
      </label>
      <label>
        Cover URL:
        <input type="text" value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;