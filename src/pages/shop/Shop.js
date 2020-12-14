import React from 'react';
//import { selectCollections } from '../../redux/shop/shop.selector';
//import CollectionPreview from '../../components/collection-preview/collection-preview';
//import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection';


const ShopPage = ({ match }) => {
    console.log(match.path);
    console.log('This is the match path');
    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            />
        </div>
    );
};

export default ShopPage;
