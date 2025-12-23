import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 p-4">
          <div className="max-w-xl text-center">
            <h1 className="text-3xl font-bold mb-4 text-red-500">Something went wrong.</h1>
            <p className="text-gray-600 mb-6">Please refresh the page or try again later.</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-red-600 text-left text-sm font-mono border border-gray-200">
              {this.state.error && this.state.error.toString()}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <LoadingScreen />
      <div className="min-h-screen text-gray-900 selection:bg-primary/20 selection:text-gray-900">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <footer className="py-8 border-t border-gray-200 bg-white/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 text-xs">
            <p>&copy; {new Date().getFullYear()} Syed Firas Peerzada.</p>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
