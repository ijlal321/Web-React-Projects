import React from 'react';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div style={{ 
            backgroundImage: `url("https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <h2 style={{ color: 'white', fontSize: '60px' }}>food menu</h2>
            <Link to="/menu">
                <button style={{fontSize: '30px'}}>Order Now</button>
            </Link>
        </div>
    );
}

export default Home;
