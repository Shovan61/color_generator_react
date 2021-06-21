import React, { useState } from 'react';
import NavBar from './NavBar';
import Values from 'values.js';
import ColorLists from './ColorLists';

function App() {
    const [color, setcolor] = useState(new Values('orange'));
    const allColor = color.all(20).slice(1, 10);

    return (
        <div style={{ height: '100vh' }}>
            {/* NavBar */}
            <NavBar style={{ height: '10vh' }} setcolor={setcolor} />
            {/* Color Boxes */}
            <ColorLists style={{ height: '90vh' }} data={allColor} />
        </div>
    );
}

export default App;
