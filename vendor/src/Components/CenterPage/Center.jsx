import React from 'react';
import Header from '../Nav/Header';
import Sidebar from '../Nav/Sidebar';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

const Center = () => {
  return (
    <div className=' min-vh-100 m-0 p-0'>
        <header className=''>
            <Header />
        </header>
         <main className=''>
            <aside className='d-flex mx-auto gap-1'>
                <Sidebar />
                <Content />
            </aside>
            <Footer />
        </main> 
    </div>
  )
}

export default Center
