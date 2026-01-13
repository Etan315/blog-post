import { useEffect } from 'react';
import { supabase } from './supabaseClient';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store/authSlice';
import { type RootState } from './store';
import { Auth } from './Auth';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    // 1. Check for an existing session when the app loads
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setUser(session?.user ?? null));
    });

    // 2. Listen for auth changes (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setUser(session?.user ?? null));
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className='app-div'>
      {!user ? (
        <Auth />
      ) : (
        <div>
          <h1>Welcome to the Blog</h1>
          <p>Logged in as: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
          <hr />
          {/* We will put the Blog CRUD components here next */}
          <p>Next: Create, Update, Delete Blogs</p>
        </div>
      )}
    </div>
  );
}

export default App;