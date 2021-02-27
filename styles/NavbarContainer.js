import styled from 'styled-components';

export const NavbarContainer = styled.div`
    background:#055844;
    nav, .nav{
        display:flex;
        justify-content: space-between;
        align-items:center;

        .hamburger-btn{
    font-size: 1.5rem;
    position: absolute;
    top: 5px;
    width: auto;
    height: 40px;
    right: 0;
    outline: none;

    background-color: inherit;
    color: #fff;
    cursor: pointer;
    z-index: 5000;
  }

  .close-icon {
      color: #000000;
  }

        .addTransiton{
      transform: translateX(400px);
      transition: transform 0.1s ease-in-out;
        }
  .removeTransition{
      transform: translateX(20px);
      transition: transform 0.1s ease-in-out;
  }


#sidebar-list{
    background-color: #fff;
    height: 100vh;
    width: 300px;
    position: fixed;
    z-index: 2000;
    right: 0;
    top: 0;
    /* margin-top: 90px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* outline: 3px solid pink; */

    .drop-style{
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    text-transform: capitalize;
    color: #055844;
    padding: 1rem 5rem 1rem 1.5rem;
    border-bottom: 1px solid #EFEFEF;
}

.user-icon{
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1rem;
    /* outline: 3px solid blue; */
    color: #075F49;
}

.icon-cls {
    width: 20px;
    height: 20px;
    padding-right: 2rem;
}

    & .first-item {
        /* outline: 2px solid green; */
        font-size: 1.2rem;
        /* max-width: 200px; */
        align-self: flex-start;
        padding: 1rem 2rem 2rem 2rem;
        width: 70%;
        /* float: left; */
        position: relative;
        /* left: 0; */
        margin-right: 0;
    }

    .block {
      font-size: 1rem;
      color: #777777;
      cursor: pointer;
      /* margin: 2rem 0; */
      padding: 1.3rem;
      border: 1px solid #CED4DA;
      display: inline-block;
      width: 100%;


      :hover {
        color: #075F49;
      }

       /* @media(max-width: 920px) {
          .block {
              color: #777777;
              :hover {

              }
          }

        } */
    }

  }
        .profile-side{
            position: relative;
            display:flex;
            justify-content: flex-end;
            align-items: center;
            width: 300px;
            /* width:50%; */
            /* grid-template-columns:70% 30%; */
            /* gap:10px; */
            /* align-items:center; */
            cursor:pointer;
            /* outline: 1px solid red; */
            /* outline: 2px solid blue; */
            @media(max-width: 1250px){
                /* width:70%; */
            }

            @media(max-width: 920px){
                width: auto;
                /* outline: 2px solid red; */
                display: inline;

                
            }
            .profile-hamburger, .profile-img{
                position:relative;
                height:40px;
                width:40px;
            }

            @media(max-width: 920px){
                .profile-img{
                position:relative;
                height:50px;
                width: 50px;
                margin-bottom: 1rem;

                
                }

                .profile-name p {
                    color: #075F49;
                    font-weight: bold;
                    font-size: 18px;
                }
            }


            .profile-text{
                margin-right: 1rem;
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

                        @media(max-width: 920px){
                            .drop-down{
                                outline: 2px solid pink;
                                background: blue;
                                position: relative;
                            }
                        }
                    }
                }
                .down-arrow{
                    position:relative;
                    width:10px;
                    height:10px;
                    margin-left:10px;
                    
                    @media(max-width: 920px) {
                        outline: 2px solid pink;
                    }
                    
                }
            }
        }
    }

`
