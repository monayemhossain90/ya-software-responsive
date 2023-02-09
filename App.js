
import './App.css';
import Header from './components/Header/Header';
import About from './components/UI/About';
import Banner from './components/UI/Banner';
import Blog from './components/UI/Blog';
import Counter from './components/UI/Counter';
import Newsletter from './components/UI/Newsletter';
import Services from './components/UI/Services';
import Testimonials from './components/UI/Testimonials';

function App() {
  return (
    <>
     <Header/>
     <Banner/>
     <Counter/>
     <About/>
     <Services/>
     <Testimonials/>
     <Blog/>
      <Newsletter/>
    </>
  );
}

export default App;
