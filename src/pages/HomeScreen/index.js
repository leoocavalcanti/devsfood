import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import * as C from "./styles"
import { api } from '../../api';
import CategoryItem from '../../components/CategoryItem';
import foodImage from "../../assets/food-and-restaurant.png"
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

let searchTimer = null;

const HomeScreen = () => {

    const navigate = useNavigate();

    const [headerSearch, setHeaderSearch] = React.useState("");
    const [categories, setCategories] = React.useState([]);
    const [activeCategory, setActiveCategory] = React.useState(0);
    const [products, setProducts] = React.useState([]);
    const [totalPages, setTotalPages] = React.useState(0);
    const [activePage, setActivePage] = React.useState(1);
    const [activeSearch, setActiveSearch] = React.useState("");
    const [modalStatus, setModalStatus] = React.useState(false);
    const [modalData, setModalData] = React.useState({});
    const [qt, setQt] = React.useState(1);
    

    const getProducts = async () => {

        const json = await api.getProducts(activeCategory, activePage, activeSearch);
        if(!json.error){

            setProducts(json.result.data);
            setTotalPages(json.result.pages);
            setActivePage(json.result.page)
        }

    }

    React.useEffect(() => {

        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {

            setActiveSearch(headerSearch);

        }, 2000);

    }, [headerSearch]);

    React.useEffect(() => {

        const handleCategories = async () => {

            const json = await api.getCategories();
            if(!json.error){

                setCategories(json.result);
            }
            
        }

        handleCategories();

    },[]);

    React.useEffect(() => {
        
        setProducts([]);
        getProducts();

    }, [activeCategory, activePage, activeSearch]);

    const handleProductClick = (data) => {

        setModalData(data);
        setModalStatus(true);

    }


  return (
    <C.Container>
        <Header search={headerSearch} onSearch={setHeaderSearch}/>

        {categories.length > 0 && 

                <C.CategoryArea>
                    <span>Selecione uma categoria</span>
                    <C.CategoryList>
                        <CategoryItem setActiveCategory={setActiveCategory} activeCategory={activeCategory} data={{id: 0, title: "", image: ""}} title="Todas as categorias" image={foodImage}/>
                        {categories.map((item, index) => (

                            <CategoryItem setActiveCategory={setActiveCategory} activeCategory={activeCategory} key={index} data={item}/>

                        ))}
                    </C.CategoryList>
                </C.CategoryArea>

        
        }
        {products.length > 0 && 
        
        <C.ProductArea>
            <C.ProductList>
                {products.map((item, index) => (

                    <ProductItem key={index} data={item} onClick={handleProductClick}/>
                ))}
            </C.ProductList>
        </C.ProductArea>

        }

        {totalPages > 0 &&
        
            <C.ProductPaginationArea>
                {Array(totalPages).fill(0).map((item, index) => (

                    <C.ProductPaginationItem onClick={() => setActivePage(index + 1)} key={index} current={index + 1} active={activePage}>
                        {index + 1}
                    </C.ProductPaginationItem>

                ))}
            </C.ProductPaginationArea>
        }
        <Modal status={modalStatus} setStatus={setModalStatus} qt={qt} setQt={setQt}>
            <ModalProduct data={modalData} setStatus={setModalStatus} qt={qt} setQt={setQt}/>
        </Modal>
    </C.Container>
  )
}

export default HomeScreen