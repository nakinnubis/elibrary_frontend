import styled from 'styled-components';

export const NavbarContainer = styled.div`
    background:#055844;
    nav{
        display:grid;
        grid-template-columns:1fr 1fr;
        align-items:center;
        .profile-side{
            position: relative;
            justify-self:end;
            display:grid;
            width:50%;
            grid-template-columns:70% 30%;
            gap:10px;
            align-items:center;
            cursor:pointer;
            @media(max-width: 1250px){
                width:70%;
            }
            .profile-img{
                position:relative;
                height:50px;
                width:50px;
            }
            .profile-text{
                display:flex;
                align-items:center;
                color:#fff;
                justify-self:end;
                text-transform:capitalize;
                .profile-name{
                    outline:none;
                    .show{
                        display:block;
                    }
                    .hide{
                        display:none;
                    }
                    .drop-down{
                        position: absolute;
                        background:#fff;
                        border:1px solid #CED4DA;
                        border-radius:5px;
                        width:60%;
                        color: #055844;
                        z-index:500;
                        ul{
                        li{
                            padding:15px;
                            border-bottom:1px solid #CED4DA;
                            cursor:pointer;
                            text-align:center;
                            :hover{
                                background:rgba(177,224,35,0.1);
                            }
                        }
                    }
                    }
                }
                .down-arrow{
                    position:relative;
                    width:10px;
                    height:10px;
                    margin-left:10px;
                    
                }
            }
        }
    }
`
