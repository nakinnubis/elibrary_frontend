import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import MemberInfoStyles from '../styles/MemberInfoStyles';

const MemberInformation = () => {
  const userData = useContext(AuthContext);
  const user = userData[0].message;
  return (
    <MemberInfoStyles className='wrapper'>
      <div className='member-grid'>
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
      </div>
    </MemberInfoStyles>
  );
};

export default MemberInformation;
