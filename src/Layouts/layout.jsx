import Header from "../components/header.jsx"
import Footer from '../components/Footer.jsx';

const Layout=({children}) =>{
    return(
        <div className= "page">
        <Header/>
        <main>
            <div className="page_general">{children}</div>
        </main>
        
        <Footer/>
  </div>
    );
};

export default Layout
