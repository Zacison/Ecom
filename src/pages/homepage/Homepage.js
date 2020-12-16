import React from 'react';
import './Homepage-styles.scss';
import { HomePageContainer } from './homepage.styles';
import Directory from '../../components/directory/Directory';

const HomePage = (props) => {
    console.log(props);
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
};

export default HomePage;
