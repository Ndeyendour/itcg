const RegisterForm = () => {
  // Debug initial
  console.log('RegisterForm rendering');
  const auth = useAuth();
  if (!auth) return <div>Loading auth...</div>;

  return (
    <div style={{
      padding: '2rem',
      margin: '2rem auto',
      width: '100%',
      maxWidth: '500px',
      border: '3px solid blue', // Bordure visible
      backgroundColor: '#f8f9fa'
    }}>
      <h2 className="text-center mb-4">Inscription</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        {/* ... autres champs avec className="mb-3" ... */}
        
        <button type="submit" className="btn btn-primary w-100">
          S'inscrire
        </button>
      </form>
    </div>
  );
};