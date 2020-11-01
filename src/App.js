import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/header';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop/" component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
