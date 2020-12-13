import React from 'react';
import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collection-preview/collection-preview';
//import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview';

const ShopPage = ({ collections }) => {
    return (
        <div className="shop-page">
            <CollectionsOverview />
        </div>
    );
};

export default ShopPage;
