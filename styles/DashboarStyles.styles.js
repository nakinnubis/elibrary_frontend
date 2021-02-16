import styled from 'styled-components';



const DashboardStyles = styled.div`
    .notifications-wrapper{
            border: 2px solid #CED4DA;
            border-top:none;
        }
    .card-grid{
            display:grid;
            grid-template-columns:repeat(4,1fr);
            gap:20px;
            padding-top:20px;
            padding-bottom:20px;
            img{
                width:100%;
            }
    }
    .quick-actions{
        border:2px solid #CED4DA;
        border-radius:5px;  
        h2{
            color:#777777;
            margin:0;
            padding:10px;
            font-size:18px;
        }
    }
    nav{
        background: #055844;
        
        .nav-grid{
            display:grid;
            grid-template-columns:1fr 1fr;
            align-items:center;
            .profile-div{
                display:flex;
                justify-self:end;
                font-size:14px;
            }
            .profile-name{
                color:#fff;
                margin-right:30px;
                h3{
                    text-transform:capitalize;
                }
            }
            .profile-picture{
                width:50px;
                height:50px;
                position:relative;
                border-radius:50%;
                overflow:hidden;
            }
        }
        
    }
    .wrapper{
        margin:0 auto;
        width:70%;
    }
    .nav-elements{
        border-bottom:1px solid #CED4DA;
    }
    .elements-grid{
        display:grid;
        grid-template-columns:repeat(9,1fr);
        height:50px;
        
        .nav-element{
            display:flex;
            align-items:center;
            justify-content:center;
            cursor: pointer;
            height:100%;
            border-right:1px solid #CED4DA;
            border-left:1px solid #CED4DA;
            a{
                text-align:center;
                font-size:10px;
                color: #777777;

            }
            :hover{
                background:rgba(177,224,35,0.1);
            }
            
        }
       
    }
    .member-info{
            margin-top:50px;
            margin-bottom:50px;
            .member-grid{
                display:grid;
                grid-template-columns:50% 50%;
                gap:50px;
                align-items:center;
                height:100%;
            }
            .member-info-div{
                h3{
                    color:#777777;
                    font-weight:bold;
                    margin:0;
                }
                .member-active-div{
                    .member-active-tag{
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        .active{
                            background:rgba(177,224,35,0.1);
                            padding:10px 40px;
                            color: #B1E023;

                        }
                    }
                    p{
                       color: #075F49;
                    }
                    .member-id{
                        .green-text{
                        font-weight:700;
                        }
                        
                    }
                    
                }
            }

            form{
                width:80%;
                height:100%;
                display: flex;
                flex-direction:column;
                justify-content:space-around; 
                .input-grid{
                    display:grid;
                    grid-template-columns:70% 30%;
                    gap:20px;
                    .input-btn{
                        background:#075F49;
                        color:#fff;
                        padding:10px 30px;
                        border:none;
                        border-radius:5px;
                    }
                }
            }
            
           
        }
`


export default DashboardStyles;