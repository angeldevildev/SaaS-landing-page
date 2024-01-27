'use client'

import { useLayoutEffect, useState } from 'react';
import React from 'react';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { Example } from './MobileNavbar/Example';
import './navbar.css';

export default function Navbar() {
  return (
<>
  <motion.div className='navbar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="39" viewBox="0 0 120 39" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98846 3.89801C6.66785 4.82142 5.47366 5.91319 4.437 7.14219C8.67328 6.7489 14.0553 7.3911 20.3038 10.5154C26.9764 13.8516 32.3494 13.9644 36.0888 13.2431C35.7495 12.2158 35.3223 11.2285 34.8163 10.2899C30.5357 10.7413 25.0481 10.1437 18.6526 6.94611C14.5914 4.91553 11.0116 4.07906 7.98846 3.89801ZM32.3158 6.73073C28.9354 2.95382 24.0229 0.576904 18.5551 0.576904C16.9494 0.576904 15.3915 0.781926 13.9062 1.16719C15.9178 1.71606 18.0547 2.51904 20.3038 3.64361C24.9862 5.98477 29.0287 6.73859 32.3158 6.73073ZM36.8883 16.849C32.3707 17.741 26.1325 17.5578 18.6526 13.8179C11.6597 10.3214 6.09403 10.3655 2.3403 11.1997C2.14655 11.2427 1.95736 11.2879 1.77273 11.335C1.28128 12.4038 0.888982 13.5277 0.607507 14.6949C0.908138 14.6146 1.21879 14.5382 1.53931 14.467C6.09323 13.455 12.5275 13.4989 20.3038 17.3871C27.2968 20.8836 32.8625 20.8395 36.6162 20.0053C36.7448 19.9768 36.8716 19.9473 36.9962 19.9168C37.0098 19.6258 37.0167 19.3329 37.0167 19.0384C37.0167 18.2977 36.9731 17.567 36.8883 16.849ZM36.3934 23.8129C31.9197 24.595 25.8631 24.2948 18.6526 20.6896C11.6597 17.1932 6.09403 17.2372 2.3403 18.0714C1.50709 18.2565 0.757541 18.482 0.0963325 18.7201C0.0945298 18.8259 0.0936279 18.9321 0.0936279 19.0384C0.0936279 29.2345 8.35913 37.5 18.5551 37.5C27.1001 37.5 34.2893 31.6946 36.3934 23.8129Z" fill="#6640FF"/>
      </svg>
      </div>
      <ul style={{ listStyle: 'none', margin: 10, padding: 0, display: 'flex', fontFamily: 'Satoshi', fontSize: 16, textTransform: 'capitalize', marginRight: 80 }}>
        <li style={{ fontFamily: 'Satoshi Bold', marginRight: '30px' }}><a href="#">home</a></li>
        <li style={{ marginRight: '30px' }}><a href="#">about us</a></li>
        <li style={{ marginRight: '30px' }}><a href="#">pricing</a></li>
        <li><a href="#">features</a></li>
      </ul>
      <Button 
        text='sign in'
        backColor='#6640FF'
        color='#fff'
      />
    </motion.div>
    <Example />
    </>
  );
}
