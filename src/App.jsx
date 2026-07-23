import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {!loadingComplete && <WelcomeScreen onLoadingComplete={() => setLoadingComplete(true)} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home loadingComplete={loadingComplete} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
