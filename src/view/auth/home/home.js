import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../../components/button/button';
import ButtonRegist from '../../../components/buttonRegist/buttonRegist';
import { getLoginUrl, getRegistUrl } from '../../../constants/routes/routes';
import './stylee.scss';

const Home = () => {

    const history = useHistory();

    const goToLoginHandler = () => {
        console.log(getLoginUrl())
        history.push(getLoginUrl());
    }

    const goToRegistHandler = () => {
        history.push(getRegistUrl());
    }

    return (
        <div className="section-home">
            <div className="section-home__content">
                <div className="section-home__icon">
                    <ion-icon size="large" name="person-outline"></ion-icon>
                </div>
                <Button className="btn-login u-margin-top-medium" onClick={goToLoginHandler} name={'Login'} />
                <div className="u-margin-top-medium">
                    <ButtonRegist className="btn-registration" onClick={goToRegistHandler} name={'Registration'} />
                </div>
            </div>
        </div>
    )
}

export default Home;