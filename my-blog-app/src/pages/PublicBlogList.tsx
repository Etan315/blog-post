import { useEffect, useState } from 'react';
import { supabase } from './../supabaseClient';

interface PublicBlogListProps {
  refreshTrigger?: number;
}

export const PublicBlogList = ({ refreshTrigger }: PublicBlogListProps) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const itemsPerPage = 5;

  // 2. Add refreshTrigger to the dependency array
  useEffect(() => {
    fetchPosts();
  }, [page, refreshTrigger]);

  const fetchPosts = async () => {
    const from = page * itemsPerPage;
    const to = from + itemsPerPage - 1;

    const { data, count, error } = await supabase
      .from('posts')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, to);

    if (!error && data) {
      setPosts(data);
      setTotalCount(count || 0);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 150)}...</p>
          <small>{new Date(post.created_at).toLocaleDateString()}</small>
        </article>
      ))}

      <div style={{ marginTop: '20px' }}>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>
        <span style={{ margin: '0 15px' }}>Page {page + 1} of {Math.ceil(totalCount / itemsPerPage)}</span>
        <button disabled={(page + 1) * itemsPerPage >= totalCount} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};