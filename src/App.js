import "./App.css";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Product from "./components/Product/Product";
import ProductRecord from "./components/ProductRecord/ProductRecord";
import Search from "./components/Search/Search";
import User from "./components/User/User";

function App() {
    return (
        <div className='lg:flex'>
            <div className=' mr-5 mb-10'>
                <Menu />
                <User />
                <ProductRecord />
                <Footer />
            </div>
            <div className=' w-full bg-slate-100 border-l-2 border-gray-300'>
                <Search />
                <div className=' p-4'>
                    <Category />
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default App;
