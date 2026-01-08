import React, { useEffect } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Introduction />
        <Summary />
        <Experience />
        <Skills />
        <Education />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Saurav Srivastava. Built with React.bits & 21st.dev concepts.</p>
      </footer>
    </div>
  );
}

export default App;
