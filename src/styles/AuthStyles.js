import styled from 'styled-components';




export const AuthStyles = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
`


export const FormContainer = styled.div`
    background: #E5E5E5;
    .back-btn{
        margin-top:40px;
        background:rgba(177,224,35,0.1);
        color:#055844;
        font-weight:bold;
        padding:10px 15px;
        border:5px;
    }
    .member-login{
        color:#777777;
        font-weight:bold;
        font-size:2em;
        margin: 40px 0;
    }
`

export const MembershipContainer = styled.div`
    height:100vh;
    background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/auth-bg.png");
    background-size:cover;
    background-repeat:no-repeat;
    .text-container{
        color:#fff;
        font-size:32px;
        font-weight:bold;
        line-height:1.3;
        margin-top:150px;
        h1{
            text-transform:uppercase;
        }
    }
    .account-selection-btns{
        width:100%;
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:10px;
        justify-content:center;
        margin-top:100px;
        a{
            color:#fff;
            text-align:center;
            &.white-bg{
                background:#fff;
                color:#777777;
                font-size:14px;
                font-weight:bold;
                padding:15px 20px;
            }
            &.black-bg{
                background:rgba(119,119,119,0.5);
                color:#fff;
                font-size:14px;
                font-weight:bold;
                padding:15px 20px;
            }
        }
    }
    .terms-and-conditions-div{
        background:rgba(119,119,119,0.3);
        color:#fff;
        margin-top:50px;
        padding:20px;

        p{
            line-height:1.2;
            opacity:.8;
            font-size:14px;
        }
    }
`

export const NavWrapper = styled.div`
    background:#055844;
    height:15vh;
   
    .flex{
        height:100%;
        display:flex;
        align-items:center;
    }
`
export const InputContainer = styled.form`
position: relative;
 .error{
        margin:20px 0;
        p{
            text-align:center;
            color:red;
        }
       
    }
    .block{
        display:block;
    }
    .none{
        display:none;
    }
   
    .mt-40{
        margin-top:20px;
    }
    .submit-btn{
            background:#055844;
            color:#fff;
            width:100%;
            border:none;
            border-radius:5px;
            padding:15px 0;
            font-size:20px;
            margin-top:20px;
        }
    .input-field{
        background:#fff;
        padding:15px;
        border-radius:5px;
        padding-left:20px;
        label{
            font-size:14px;
            
        }
        .input-form-wrapper{
            display:grid;
            grid-template-columns:90% 10%;
            align-items:center;
            margin-top:10px;
            input{
                border:none;
                padding:10px 0;
                outline:none;
                color:#777;
            }
        }
        .input-image-wrapper{
            width:15px;
            height:15px;
            position:relative;
            display:flex;
            align-items:flex-end;
        }
        
    }

`