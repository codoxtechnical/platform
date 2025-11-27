import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/AppRoutes.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;