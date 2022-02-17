import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Layout/Navbar';
import Alert from './Components/Layout/Alert';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import User from './Pages/User';

function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='container mx-auto px-3 pd-12'>
        <Alert />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:login' element={<User />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
