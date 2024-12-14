import React, { FC } from 'react';
import Toys from '../models/Toys';
import SingleToy from './SingleToy.tsx';

interface DisplayToysProps {
    toysList: Toys[];
    updateToys: (newToys) => void;
}

const DisplayToys: FC<DisplayToysProps> = ({ toysList, updateToys }) => {
    return (
        <div className="container">
            {
                toysList.map(toy => {
                    return <SingleToy key={toy.id} toy={toy} updateToys={updateToys} />;
                })
            }
        </div>
    )
}

export default DisplayToys;
