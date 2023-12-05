import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import ServicePage from '../../pages/ServicePage/ServicePage';
import TeamPage from '../../pages/TeamPage/TeamPage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import CartPage from '../../pages/CartPage/CartPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import ChangeLogPage from '../../pages/ChangeLogPage/ChangeLogPage';
import LicencesPage from '../../pages/LicencesPage/LicencesPage';
import PasswordPage from '../../pages/PasswordPage/PasswordPage';
import Subscription from '../Subscription/Subscription';
import CategoryPage from '../CategoryPage/CategoryPage';
import ProductPage from "../ProductPage/ProductPage";

function App() {
    const handleSubscribe = (values) => {
        const SUBSCRIBE_KEY = "subscribeData";
        const currentData = JSON.parse(localStorage.getItem(SUBSCRIBE_KEY)) || [];
        const newKey = (currentData.length + 1).toString();
        currentData.push({
            emails: {
                [newKey]: values.email
            }
        });
        localStorage.setItem(SUBSCRIBE_KEY, JSON.stringify(currentData));

    }
    return (
      <div>
          <Router>
              <Header></Header>
              <Routes>
                  <Route exact path="/" element={<HomePage/>} />
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/products" element={<ShopPage/>}/>
                  <Route path="/products/:category" element={<CategoryPage />} />
                  <Route path="/products/:category/:productName" element={<ProductPage />} />
                  <Route path="/services" element={<ServicePage/>}/>
                  <Route path="/team" element={<TeamPage/>}/>
                  <Route path="/contacts" element={<ContactPage/>}/>
                  <Route path="/cart" element={<CartPage/>}/>
                  <Route path="/error" element={<ErrorPage/>}/>
                  <Route path="/licences" element={<LicencesPage/>}/>
                  <Route path="/password-protection" element={<PasswordPage/>}/>
                  <Route path="/changelog" element={<ChangeLogPage/>}/>
              </Routes>
              <Subscription subscribe={handleSubscribe}></Subscription>
              <Footer></Footer>
          </Router>

      </div>
  );
}

export default App;
