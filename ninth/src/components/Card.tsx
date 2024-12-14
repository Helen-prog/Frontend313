import React from "react";

export enum CardVariant{
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width: string;
    height: string;
    children: React.ReactNode;
    variant: CardVariant;
    onClickFunc: () => void;
}


function Card({width, height, children, variant, onClickFunc}: CardProps){
    return (
        <div style={{ width, height, margin: "20px",
        border: variant === CardVariant.outlined ? '2px solid red' : 'none',
        background: variant === CardVariant.primary ? "lightgray" : ""
    }} onClick={onClickFunc}
        >
            {children}
        </div>
    )
}

export default Card;