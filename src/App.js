import React from 'react';
import { useSelector } from 'react-redux';
import Pages from './pages/Pages';
import { Container, Menu, PageBody, Cart } from './Template';
import MenuItem from "./components/MenuItem"
import storeImage from './assets/store.png'
import orderImage from './assets/order.png'
import profileImage from './assets/profile.png'
import bg from './assets/bg.png'
import CartIcone from './components/CartIcone';

const App = () => {
    const name = useSelector(state => state.user.name);
    return (
        <div>
            <Container>
                <Menu>
                    <MenuItem title="Loja" icon={storeImage} link="/" />
                    <MenuItem title="Pedidos" icon={orderImage} link="/orders" />
                    <MenuItem title="Meu perfil" icon={profileImage} link="/profile" />
                </Menu>
                <PageBody bg={bg}>
                    <Pages/>
                </PageBody>
                <Cart>
                    <CartIcone/>
                </Cart>
    
            </Container>
            
        </div>
    );
}

export default App