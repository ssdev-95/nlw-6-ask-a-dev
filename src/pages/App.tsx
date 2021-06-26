import { Routes } from '../router';
import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';

function App() {
  return (
      <ThemeProvider>
    <AuthProvider>
        <Routes />
    </AuthProvider>
      </ThemeProvider>
  );
}

export default App;
