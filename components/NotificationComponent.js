import React from 'react'
import NotificationWrapper from '../styles/NotificationWrapper.styles'
import Image from "next/image"
const NotificationComponent = () => {
    return (
        <NotificationWrapper>
            <div className="news-wrapper">
                <div className="header-wrapper">
                    <h3>
                        CONSTITUTIONAL REVIEW PROPOSAL
                    </h3>
                </div>
                <div className="content-wrapper">
                    <p>
                        Dear Esteemed Member, This is to inform you that the draft constitutional amendment proposal earlier uploaded has been withdrawn. This is to allow...
                    </p>
                </div>
            </div>
            <div className="date-wrapper">
                <p>
                    sept 8 2020
                </p>
            </div>

            <div className="image-wrapper">
                <Image src="/menu.svg" layout="fill" />
            </div>


        </NotificationWrapper>
    )
}

export default NotificationComponent
