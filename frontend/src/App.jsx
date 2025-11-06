import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import DiscoverClasses from './components/Discover';
import BrowseByCategory from './components/Category';
import SixReason from './components/SixReason';
import Testimonials from './components/Testimonials';
import Teachers from './components/Teachers';
import BecomeTeacher from './components/BecomeTeacher';
import Blogs from './components/Blogs';
import CTASection from './components/CTASection';
import FooterSection from './components/Footer';
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductList/>
      <DiscoverClasses/>
      <BrowseByCategory/>
      <SixReason/>
      <Testimonials/>
      <Teachers/>
      <BecomeTeacher/>
      <Blogs/>
      <CTASection/>
      <FooterSection/>
    </div>
  );
}

export default App;