import styled from 'styled-components';




const MemberInfoStyles = styled.div`
    margin:50px auto;
    width:70%;
    display:grid;
    gap:50px;
    grid-template-columns: 60% 40%;
    .members-connect{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        border: 1px solid #EFEFEF;
            p{
                font-size:12px;
                color:#777777;
              
            }
            form{
                height:40px;
                .search-btn{
                    color:#EFEFEF;
                    background:#075F49;
                    padding:0 20px;
                    border:none;
                    border-radius:5px;
                    height:100%;
                    display:block;
                }
                .search-input{
                    height:100%;
                    width:60%;
                    margin-right:20px;
                    padding:0 10px;
                    display:block;
                }
            }
       }
    .membership-id{
        .member-id{
            display:flex;
            justify-content:space-between;
            align-items:center;
            h1{
            font-size:24px;
            color:#777777;
            font-weight:bolder;
            text-transform:lowercase;
        }
        .member-id-flex{
            display:flex;
            align-items:center;
            padding:5px;
            font-size:12px;
            width:70%;
            border: 1px solid #EFEFEF;
            justify-content:space-between;
        }
        .active{
            background:rgba(177,224,35,0.1);
            color:rgba(177,224,35,1);
            padding:7px 20px;
        }
        .members-messages{
            border: 1px solid #EFEFEF;
            height:100%;
            padding:15px 30px;
            color:#777777;
            a{
                font-size:12px;
            }
        }
        }
       
    }
`



export default MemberInfoStyles;