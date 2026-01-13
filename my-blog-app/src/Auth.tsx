import { useState } from 'react';
import { supabase } from './supabaseClient';
import { useDispatch } from 'react-redux';
import { setUser } from './store/authSlice';

// This file will handle the input fields and the calls to Supabase.
export const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // Handle Registration
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) alert(error.message);
    else {
      alert('Registration successful!');
      dispatch(setUser(data.user));
    }
    setLoading(false);
  };

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) alert(error.message);
    else {
      dispatch(setUser(data.user));
    }
    setLoading(false);
  };

  return (
    <div className='login-form'>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />
        <button onClick={handleLogin} disabled={loading} style={{ marginRight: '10px' }}>
          {loading ? '...' : 'Login'}
        </button>
        <button onClick={handleSignUp} disabled={loading}>
          Register
        </button>
      </form>
    </div>
  );
};