import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';
import BlogPost from './BlogPost';

function App() {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch('/posts/my-first-post.md')
      .then((response) => response.text())
      .then((text) => {
        const { data, content } = matter(text);
        setPost({ data, content });
      });
  }, []);

  return (
    <div>
      {post.content && <BlogPost {...post} />}
    </div>
  );
}
