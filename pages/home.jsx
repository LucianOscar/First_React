import React from 'react';
import Slider from '../src/components/slider';
import {AnimateSlider } from '../src/components/slider';


export default function Home() { return (
 <>
  <Slider />
  <AnimateSlider />
  <footer className="bg-[var(--color-secondary)] text-[var(--color-text-primary)] py-4 text-center">
    <p>&copy; {new Date().getFullYear()} KEno. All rights reserved.</p>
  </footer>
 </>
); }