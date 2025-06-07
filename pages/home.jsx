import React from 'react';
import Slider from '../src/components/slider';
import MyFooter from '../src/components/myFooter';
import {AnimateSlider } from '../src/components/slider';



export default function Home() { return (
 <>
  <Slider />
  <AnimateSlider />
  <MyFooter />
 </>
); }