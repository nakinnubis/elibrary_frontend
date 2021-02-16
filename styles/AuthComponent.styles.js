import styled from 'styled-components';

const AuthComponent = styled.div`
    display:grid;
    grid-template-columns:55% 45%;
`
export const FormsWrapper = styled.div`
    background-color:#E5E5E5;
    
    nav{
        background-color:#055844;
        .logo-wrapper{
            margin:0 auto;
            width:70%;
        }
    }
    .forms-wrapper-body{
        height:calc( 100vh - 102px);
        max-height:calc( 100vh - 102px);
        margin:0 auto;
        width:70%;
        position:relative;
        padding-top:50px;
        .go-back-btn{
            background-color:rgba(177,224,35,0.1);
            color:#055844;
            font-weight:bolder;
            padding:15px;
            border-radius:5px;
            
            a{

            }
        }
        .member-login{
            margin-top:50px;
            margin-bottom:25px;
            color: #777777;
            font-size:1.8em;
            font-weight:bolder;
        }
        .invalid-error{
            color:red;
            text-align:center;
            background:#fff;
            margin:20px 0;
            padding:10px;
        }
        .show-error{
            display:block;
        }
        .hide-error{
            display:none;
        }
        .email-entry{
            
            margin-bottom:20px;
        }
        .password-entry{
            
        }
        .input-wrapper{         
            padding:10px 20px;
            background: #FFF;
            box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.06);
            border-radius: 5px;
            label{
                font-size:14px;
            }
            .input-wrapper{
                display:grid;
                grid-template-columns:90% 10%;
                background:transparent;
                align-items:center;
                padding:10px 0;
            }
            input{
                display:block;
                width:80%;
                margin-top:10px;
                border:none;
                font-size:18px;
                outline:none;
                ::placeholder{
                    font-size:18px;
                }
                
            }
        }
        .reset-password-div{
            display:flex;
            justify-content:space-between;
            margin:20px 0;
            color:#7F8B94;
        }
        .submit-btn{
            background-color:#055844;
            color:#FFFFFF;
            width:100%;
            padding:15px 0;
            border:none;
            border-radius:5px;
            cursor:pointer;
        }
    }
`
export const MembershipWrapper = styled.div`
    height:100vh;
    background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/auth-bg.png");
    background-size:cover;
    background-repeat:no-repeat;
    padding-top:120px;
    .container{
        width:80%;
        margin:0 auto;
    }
    .membership-text{
        color:#fff;
        p{
            line-height:1.5;    
            font-size:2em;
            font-weight:bolder;  
        }
    }
    .membership-type-div{
        margin-top:80px;
        display:grid;
        grid-template-columns:1fr 1fr;

        .individual-membership-btn{
            background:#fff;
            padding:15px;
            border:none;
            cursor:pointer;
        }
        .corporate-membership-btn{
            background: rgba(119, 119, 119, 0.5);
            color:#fff;
            padding:15px;
            border:none;
            cursor:pointer;
        }
        
    }
    .membership-note-div{
            background: rgba(119, 119, 119, 0.5);
            margin-top:50px;
            padding:20px;
            color:#fff;
            line-height:1.5;
            font-size:14px;
            font-weight:300;
        }
`

export default AuthComponent;