import React, { useState } from 'react';
import { supabase } from './supabaseClient';

function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (email, password) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      alert('Verifique seu e-mail para o link de confirmação!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header">Supabase Auth</h1>
        <p className="description">Faça login via e-mail e senha</p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="inputField"
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={() => handleSignIn(email, password)}
            className="button block"
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
          <button
            onClick={() => handleSignUp(email, password)}
            className="button block"
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Cadastrar'}
          </button>
          <button
            onClick={handleSignOut}
            className="button block"
            disabled={loading}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;

