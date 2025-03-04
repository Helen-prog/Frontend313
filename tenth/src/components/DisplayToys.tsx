import React, { FC } from 'react';
import Toys from '../models/Toys';
import SingleToy from './SingleToy.tsx';

interface DisplayToysProps {
    toysList: Toys[];
    updateToys: (newToys) => void;
    deleteToys: (id: number) => void;
}

const DisplayToys: FC<DisplayToysProps> = ({ toysList, updateToys, deleteToys }) => {
    return (
        <div className="container">
            {
                toysList.map(toy => {
                    return <SingleToy key={toy.id} toy={toy} updateToys={updateToys} deleteToys={deleteToys} />;
                })
            }
        </div>
    )
}

export default DisplayToys;
