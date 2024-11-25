
import React from 'react';
import Gallery from './components/Gallery';

const app =() => {
    return (
      <Router> {/* Wrap the app with Router */}
     <Routes> {/* Define routes  */}
<Route path="/" element={<h1>Welcome to the Tour Comparison App!</h1>} />
<Route path="/gallery" element={<Gallery />} />

</Routes>
</Router>
    )};
    export app;