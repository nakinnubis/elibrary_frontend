import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import MemberInfoStyles from '../styles/MemberInfoStyles';
import Image from 'next/image';

const MemberInformation = () => {
  // const [user] = useContext(AuthContext);
  // const user = userData[0]
  const [user, setUser] = useState({memberPeople:[{otherNames:""}]});
  console.log("user+++", user)

  useEffect(() => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    setUser(user)
  }, [])
  return (
    <MemberInfoStyles className='wrapper container my-5 w-100 p-0'>
      {/* <div className='member-grid'>
        <div>
          <div>
            <h1>
              Welcome Back,{' '}
              {user ? user.memberPeople[0].otherNames : 'Goodness Ibenema'}
            </h1>
          </div>
          <div className='member-id-grid'>
            <div className='member-id-flex'>
              <p>Member ID: {user ? user.memberId : 'AC2019/6924'}</p>
              <p className='active'>Active</p>
            </div>
            <div className='messages'>
              <Image src='/message.svg' width="20" height="20" />
              <p>0 Messages</p>
            </div>
          </div>
        </div>

        <form>
          <label>Connect with Member</label>
          <div className='input-fields'>
            <input
              type='text'
              placeholder='Search with name or ID'
              className='input-entry'
            />
            <input type='submit' value='Search' className='input-btn' />
          </div>
        </form>
      </div> */}


            <div className="row row-custom">
                <div className="col-md-6 col-custom">
                    <h2 className="wel-h2 grey-text pb-3">Welcome Back,{' '}
              {user ? user?.memberPeople[0].otherNames : 'Goodness Ibenema'}</h2>
                    <div className="wel-details">
                        <span className="wel-box">
                            <p><span className="mem-id">Member ID:</span> {user ? user.memberId : 'AC2019/6924'}</p>
                            <button className="active">Active</button>
                        </span>
                        <span className="wel-msg align-items-center">
                            {/* <img src="/message.svg" alt="Message Logo" /> */}
                            <Image src='/message.svg' width="20" height="20" />
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
