import React from 'react';
import './CarPage.scss';
import {CachePolicies, useFetch} from "use-http";
import Loader from "../../components/Loader/Loader";
import { Link } from 'react-router-dom';
import ImageContainer from "../../components/ImageContainer/ImageContainer";

interface ICarImage {
    set: string;
    uri: string;
}

const CarPage = () => {
    const { loading: carLoading, error: carError, data: carData } = useFetch(`/api/v1/car`, {
        headers: {
            'Content-Type': 'application/json'
        },
        cachePolicy: CachePolicies.NO_CACHE
    }, []);

    const getImageThumbnailURI = (imageURI: string): string => {
        return `${imageURI}_2.jpg`
    }

    return (
        <section className={"pf-page pf-page__car"}>
            <header className={"pf-page__header"}>
                <h1>Car photos</h1>
            </header>
            <main className={"pf-page__container"}>
                <div className="pf-page__grid">
                {
                    carLoading ? <Loader/> : !carError ? (
                        carData.images.map((image: ICarImage, index: number) => (
                            <Link key={`pf-car-image-${index}`} data-testid={"pf-car-image--testid"} className="pf-car-image-wrapper" to={`/car/photo/${index}`}>
                                <ImageContainer
                                    src={getImageThumbnailURI(image.uri)}
                                    alt={"Photo failed to load"}
                                />
                            </Link>
                        ))
                    ) : (
                        <div className="pf-page__error">
                            An error occurred while fetching:
                            {JSON.stringify(carError)}
                        </div>
                    )
                }
                </div>
            </main>
        </section>
    )
}

export default CarPage;
