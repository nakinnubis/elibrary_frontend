import { useState, useEffect } from 'react';
import MemberInfoStyles from '../styles/MemberInfoStyles';
import Message from '../assets/message.svg'

const AdminInformation = () => {
    // const [admin, setAdmin] = useState({ memberPeople: [{ otherNames: "" }]});
    const [admin, setAdmin] = useState("");
    

    useEffect(()=>{
        setAdmin(JSON.parse(global.localStorage.getItem("admin")));
        // setAStatus(JSON.parse(global.localStorage.getItem("memStatus"))); 
    }, [])

    return (
        <MemberInfoStyles className='wrapper container my-5 w-100 p-0'>

            <div className="row row-custom">
                <div className="col-md-6 col-custom">
                    <h2 className="wel-h2 grey-text pb-3">Welcome Back,{' '}
                        {admin ? admin?.username : 'Unknown User'}</h2>
                    <div className="wel-details">
                        <span className="wel-box">
                            <p><span className="mem-id">Admin ID:</span> {admin ? admin?.adminId : 'AC2019/6924'}</p>
                            <button className="active">Active</button>
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

export default AdminInformation;
