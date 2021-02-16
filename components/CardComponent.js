import React from 'react'
import CardWrapper from '../styles/CardComponentStyles.styles'
import Image from "next/image"
const CardComponent = ({ img, title }) => {
    return (
        <CardWrapper>
            <div className="flex-container">
                <div className="img-wrapper">
                    <Image src={img} layout="fill" />

                </div>
                <p>{title}</p>
            </div>

        </CardWrapper>
    )
}

export default CardComponent
