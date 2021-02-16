import React from 'react'
import Link from 'next/link'
import MemberInfoStyles from '../styles/MemberInfoStyles.styles'

const MemberInfo = ({ name, id }) => {
    return (
        <MemberInfoStyles>
            <div className="membership-id">
                <h1>Welcome Back, {name}</h1>
                <div className="member-id">
                    <div className="member-id-flex">
                        <p>
                            <span>Member ID: </span>
                            <span>{id}</span>
                        </p>
                        <span className="active">Active</span>
                    </div>
                    <div className="members-messages">
                        <Link href="/"><a>Messages</a></Link>
                    </div>
                </div>
            </div>
            <div>
                {/* <p>Connect with Member</p>
                <form>
                    <input type="text" placeholder="Search with name and ID" className="search-input" />
                    <input type="submit" value="Search" className="search-btn" />
                </form> */}
            </div>
        </MemberInfoStyles>
    )
}

export default MemberInfo
