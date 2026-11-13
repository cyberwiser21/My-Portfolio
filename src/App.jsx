import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingFallback from './components/LoadingFallback';

// Phase 5: Code Splitting & Route-Level Lazy Loading
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route 
          index 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Home />
            </Suspense>
          } 
        />
        <Route 
          path="about" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          } 
        />
        <Route 
          path="projects" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Projects />
            </Suspense>
          } 
        />
        <Route 
          path="projects/:id" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <ProjectDetail />
            </Suspense>
          } 
        />
        <Route 
          path="services" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Services />
            </Suspense>
          } 
        />
        <Route 
          path="contact" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
            </Suspense>
          } 
        />
        <Route 
          path="*" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <NotFound />
            </Suspense>
          } 
        />
      </Route>
    </Routes>
  );
}
