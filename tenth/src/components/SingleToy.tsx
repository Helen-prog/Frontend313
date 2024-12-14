import React, { FC, useState } from 'react';
import Toys from '../models/Toys';
import { MdCurrencyRuble, MdModeEdit, MdDelete } from "react-icons/md";
import EditToysForm from './EditToysForm.tsx';

interface SingleToyProps {
    toy: Toys;
    updateToys: (newToys: Toys) => void;
}

const SingleToy: FC<SingleToyProps> = ({ toy, updateToys }) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div className="toys-block">
            <div className="toy">
                <img src={`/images/${toy.img}`} alt={toy.title} />
                <h2>{toy.title}</h2>
                <p>{toy.price} <MdCurrencyRuble /></p>
            </div>
            <div className="toys-control">
                <MdModeEdit onClick={handleToggleEdit} />
                <MdDelete />
            </div>
            {
                edit ? <EditToysForm data={toy} updateToys={updateToys} handleToggleEdit={handleToggleEdit} /> : null
            }
        </div>
    )
}

export default SingleToy;