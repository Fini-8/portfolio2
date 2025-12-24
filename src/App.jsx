import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
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
          <Services />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <footer className="py-12 border-t border-gray-200 bg-white w-full">
          {/* FULL WIDTH — NO SIDE PADDING */}
          <div className="w-full px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 px-4">
              {/* About Section */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4">
                  Syed Firas Peerzada
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Mobile Developer specializing in React Native and cross-platform
                  applications.
                </p>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-sm text-gray-600 hover:text-gray-900">Home</a></li>
                  <li><a href="#skills" className="text-sm text-gray-600 hover:text-gray-900">Skills</a></li>
                  <li><a href="#services" className="text-sm text-gray-600 hover:text-gray-900">Services</a></li>
                  <li><a href="#projects" className="text-sm text-gray-600 hover:text-gray-900">Projects</a></li>
                  <li><a href="#achievements" className="text-sm text-gray-600 hover:text-gray-900">Achievements</a></li>
                  <li><a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4">Services</h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li>Mobile App Development</li>
                  <li>Web Development</li>
                  <li>UI / UX Design</li>
                  <li>Cross-Platform Solutions</li>
                </ul>
              </div>

              {/* Get in Touch */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4">Get in Touch</h3>
                <p className="text-xs text-gray-600">+91 90357 89815</p>
                <p className="text-sm text-gray-600">syedfiras06@gmail.com</p>
              </div>
            </div>

            {/* Bottom Bar — also edge-to-edge */}
            <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Syed Firas Peerzada. All rights reserved.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm"
              >
                Back to Top
              </button>
            </div>
          </div>
        </footer>

      </div>
    </ErrorBoundary>
  );
}

export default App;
