import React from 'react';
import './CarPhotoPage.scss';
import {CachePolicies, useFetch} from "use-http";
import Loader from "../../components/Loader/Loader";
import {Link, useParams } from 'react-router-dom';
import ImageContainer from "../../components/ImageContainer/ImageContainer";

const CarPhotoPage = () => {
    const { photoIdx } = useParams<{ photoIdx: string }>();

    const { loading: carLoading, error: carError, data: carData } = useFetch(`/api/v1/car`, {
        headers: {
            'Content-Type': 'application/json'
        },
        cachePolicy: CachePolicies.CACHE_FIRST
    }, []);

    const getFullImageURI = (imageURI: string): string => {
        return `${imageURI}_27.jpg`
    }

    return (
        <section className={"pf-page pf-page__car-photo"}>
            {
                carLoading ? <Loader/> : !carError ? (
                    <>
                        <header>
                            <h1>{carData.title}</h1>
                            <Link className={"pf-close-btn"} to={`/car`}>X</Link>
                        </header>
                        <div className="pf-car-photo-full">
                            <ImageContainer
                                src={getFullImageURI(carData.images[photoIdx].uri)}
                                alt={"Photo failed to load"}
                            />
                        </div>
                    </>
                ) : (
                    <div className="pf-page__error">
                        An error occurred while fetching
                    </div>
                )
            }
            <header></header>
        </section>
    )
}

export default CarPhotoPage;
