import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage = () => {
    const history = useHistory()

    return (
        <section className="pf-page pf-page__not-found">
            Not Found -

            <button onClick={() => history.push('/')}>Go back</button>
        </section>
    )
}

export default NotFoundPage;
