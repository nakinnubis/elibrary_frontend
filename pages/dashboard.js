import React, { useContext } from 'react'
import Image from "next/image"
import DashboardStyles from '../styles/DashboarStyles.styles'
import Link from 'next/link'
import CardComponent from '../components/CardComponent'
import NotificationComponent from '../components/NotificationComponent'
import MemberInfo from '../components/MemberInfo'
import { AuthContext } from "../context/AuthContext"

const Dashboard = () => {
    const navItems = [
        {
            id: 1,
            url: "/",
            name: "Dashboard",
            img: "/"
        }, {
            id: 2,
            url: "/",
            name: "My Profile",
            img: "/"
        }, {
            id: 3,
            url: "/",
            name: "Certificate",
            img: "/"
        }, {
            id: 4,
            url: "/",
            name: "Payment History",
            img: "/"
        }, {
            id: 5,
            url: "/",
            name: "Online Payment",
            img: "/"
        }, {
            id: 6,
            url: "/",
            name: "E-Library",
            img: "/"
        }, {
            id: 7,
            url: "/",
            name: "Member Card",
            img: "/"
        }, {
            id: 8,
            url: "/",
            name: "Election",
            img: "/"
        }, {
            id: 9,
            url: "/",
            name: "Resources",
            img: "/"
        },
    ]
    const imgItems = [
        {
            id: 1,
            img: "/cash.svg",
            title: "Pay Dues"
        },
        {
            id: 2,
            img: "/directory.svg",
            title: "Member Directory"
        },
        {
            id: 3,
            img: "/access.svg",
            title: "Access Bulletin"
        },
        {
            id: 4,
            img: "/news.svg",
            title: "Nape News"
        },

    ]

    const user = useContext(AuthContext);
    const userData = user[0].message


    return (
        <DashboardStyles>
            <nav>
                <div className="wrapper">
                    <div className="nav-grid">
                        <div>
                            <Image src="/logo.svg" height="100" width="300" />
                        </div>
                        <div className="profile-div">
                            <div className="profile-name">
                                <h3>{userData.memberPeople[0].otherNames}</h3>
                            </div>
                            <div className="profile-picture">
                                <Image src="/profile.png" layout="fill" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="nav-elements">
                <div className="wrapper elements-grid">
                    {
                        navItems.map((item => (
                            <div key={item.id} className="nav-element">
                                <Link href={item.url}>
                                    <a>{item.name}</a>
                                </Link>
                            </div>
                        )))
                    }
                </div>
            </div>
            <MemberInfo name={userData.otherNames} id={userData.memberId} />

            <div className="quick-actions wrapper">
                <h2>Quick Actions</h2>
            </div>
            <div className="wrapper card-grid">
                {
                    imgItems.map(({ id, img, title }) => {
                        return (
                            <CardComponent key={id} img={img} title={title} />
                        )
                    })
                }
            </div>
            <div className="quick-actions wrapper">
                <h2>Recent Notifications</h2>
            </div>
            <div className="wrapper notifications-wrapper">
                <NotificationComponent />
                <NotificationComponent />
                <NotificationComponent />
                <NotificationComponent />
            </div>
        </DashboardStyles>
    )
}

export default Dashboard
