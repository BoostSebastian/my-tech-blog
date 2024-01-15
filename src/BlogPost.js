import React from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

function BlogPost({ content, data }) {
  const { title } = data;

  return (
    <div>
      <h1>{title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default BlogPost;