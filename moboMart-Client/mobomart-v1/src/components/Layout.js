import { Outlet } from "react-router-dom";

import React from 'react';
import Navbar from './Navbar.js';

const layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default layout