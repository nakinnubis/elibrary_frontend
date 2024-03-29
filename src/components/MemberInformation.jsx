import { useState, useEffect } from 'react';
import MemberInfoStyles from '../styles/MemberInfoStyles';
import Message from '../assets/message.svg'

const MemberInformation = () => {
    const [user, setUser] = useState({ memberPeople: [{ otherNames: "" }]});
    const [memberStatus, setMemberStatus] = useState("")

    useEffect(()=>{
        setUser(JSON.parse(global.localStorage.getItem("user")));
        // setMemberStatus(JSON.parse(global.localStorage.getItem("memStatus"))); 
        setMemberStatus(JSON.parse(global.localStorage.getItem("memStatus"))); 

    }, [])

    return (
        <MemberInfoStyles className='wrapper container my-5 w-100 p-0'>

            <div className="row row-custom">
                <div className="col-md-6 col-custom">
                    <h2 className="wel-h2 grey-text pb-3">Welcome Back,{' '}
                        {user ? user?.memberPeople[0].otherNames : 'Goodness Ibenema'}</h2>
                    <div className="wel-details">
                        <span className="wel-box">
                            <p><span className="mem-id">Member ID:</span> {user ? user?.memberId : 'AC2019/6924'}</p>
                            <button className="active">{memberStatus ? "Active": "Inactive"}</button>
                        </span>
                        <span className="wel-msg align-items-center">
                            {/* <img src="/message.svg" alt="Message Logo" /> */}
                            <img src={Message} width="20" height="20" />
                            <p className="mb-0">0 <span className="msg-span">message</span></p>
                        </span>
                    </div>
                </div>

                <div className="col-md-5 col-custom">
                    <div className="connect">
                        <p>Connect with member</p>
                        <div className="box">
                            <input type="text" placeholder="Search with name or ID" />
                            <button>Search</button>
                        </div>

                    </div>
                </div>
            </div>
        </MemberInfoStyles>
    );
};

export default MemberInformation;
