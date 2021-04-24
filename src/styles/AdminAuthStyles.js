import styled from 'styled-components';




export const AdminAuthStyles = styled.div`
    // display:flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;

    .form-container{
        outline: 3px solid yellow;
        Width:80vw;
        height: 100vh;
        margin: 10rem auto 5rem auto;
    }
    .member-login{
        font-weight: bold;
        font-size: 48px;
        line-height: 72px;
        


        color: #777777;

    }
    .pwd-control{
        color:red;
        cursor: default;
    }
    
`


export const FormContainer = styled.div`
    background: #E5E5E5;
    
    .member-login{
        color:#777777;
        font-weight:bold;
        font-size:2em;
        margin: 40px 0;
    }
`

export const AddFormModalStyle = styled.div`
    padding: 3rem 2rem;
    box-sizing: border-box;
    .form-header{
        font-weight: 800;
        font-size: 1.5rem;
        color: #000;
        display: flex;
        flex-direction: row;
        
        justify-content: space-between;
        
    }
    .closebtn{
        background: #000000;
        color: #FFF;
    }
    
    .form-input{
        border: 2px solid #68676F;
        border-radius: 3px;
        width:100%;
        margin:1.5rem 0;
    }
    .form-footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        
    }
    .form-footer button{
        width: 45%;
        border: 2px solid #075F49;
        border-radius: 5px;
        height: 2rem;
    }

    .green-bg{
        background: #055844;
        color:  #FFFFFF;
        border: none;
    }
    .white-bg{
        color:  #075F49;
    }
        

    
    
`
export const AddBookModalStyle = styled.div`
    padding: 3rem 2rem;
    font-size: 0.875rem;
    box-sizing: border-box;
    small-text{
        font-size: 0.6rem;
    }

    .hidden{
        display: none;
    }
    .padded{
        align-items: center;
        padding: 5px;
    }
    .m-top{
        margin-top: 1.5rem;
    }
    .upload-doc{
        width:100%;
        background: rgba(177, 224, 35, 0.1);
        border: 1px solid #055844;
        border-radius: 5px;
        height: 3rem;
        text-align: center;
        
    }

    label{
        display: block;
        font-size: 0.875rem;
        padding-bottom:0.2rem;
        
        
    }
    input, select, textarea, .padded {
        border: 1px solid rgba(127, 139, 148, 0.5);
        border-radius: 3px;
        height:2rem;
    }

    textarea{
        height: 4rem;
    }
    input:focus, select:focus, textarea:focus {
        border: 1px solid rgba(127, 139, 148, 0.9);
        outline: none
        
    }
    // toggle switch
    .switch {
    position: relative;
    display: inline-block;
    width: 2.5rem;
    height: 1.5rem;
    }

    .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    }

    input:checked + .slider {
    background-color: #055844;;
    }

    input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(1rem);
    -ms-transform: translateX(1rem);
    transform: translateX(1rem);
    }

    
    .slider.round {
    border-radius: 1rem;
    }

    .slider.round:before {
    border-radius: 50%;
    }
// toggle switch

    .flex-apart{
        display: flex;
        flex-direction: row;
        
        justify-content: space-between;
    }
    .upload-basic-top input{
        width:100%;
    }
    .upload-basic-bottom input{
        width 100px;
    }
     .description textarea{
        width:100%;
    }
    .half-width, .price{
        width: 47%;
    }
    .half-width input, .half-width select, .tags input{
        width: 100%;
    }
    .upload-basic-bottom input {}
        
    .optional{
        background: #F5F5F5;
        height: 2rem;
        padding: 0.5rem 1rem;
        margin: 1rem 0;
    }
    .form-header{
        font-weight: 800;
        font-size: 1.5rem;
        color: #000;
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
        padding-bottom: 1rem;
        
    }
    .closebtn{
        background: #000000;
        color: #FFF;
        
    }
    .upload-image{
        margin-top: 0.2rem;
    }
    .upload-span{
        font-weight: 800;
        font-size: 14px;
        text-align: center;
        color: #055844;
        padding-left: 1rem;
        

    }
    .upload-basics{
        padding: 1rem 0;
    }
    .amount{
        // display:none;
    }

    .upload-img{
        width: 25%;
        height: 8rem;
        background: #F9FBF8;
        border: 1px solid #CED4DA;
        border-radius: 5px;
        text-align:center;
    }
    .upload-img label{
        margin: 1.5rem auto;
    }
    .upload-basics-right{
        width: 70%;
    }
    .form-input{
        border: 2px solid #68676F;
        border-radius: 3px;
        width:100%;
        margin:1.5rem 0;
    }
    .form-footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        
    }
    .form-footer button{
        width: 45%;
        border: 2px solid #075F49;
        border-radius: 5px;
        height: 2rem;
    }

    .green-bg{
        background: #055844;
        color:  #FFFFFF;
        border: none;
    }
    .white-bg{
        color:  #075F49;
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
        button{
            
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
// outline: 1px solid red;
margin: 0 auto;
max-width: 40rem;
// position: relative;

.input-setting{
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    margin: 1rem 0;
    
}
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
            height:4rem;
        }
    .input-field{
        background:#fff;
        padding:15px;
        border-radius:5px;
        padding-left:20px;
        height: 8.37rem;
        box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.06);

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