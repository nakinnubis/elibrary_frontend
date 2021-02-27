import styled from 'styled-components';


const MemberInfoStyles = styled.section`

    .row-custom {
        padding: 0;
        /* margin-top: 5rem; */
        display: flex;
        justify-content: space-between;
    
    .col-custom {
        padding: 0.75rem;
    

            .wel-h2{
                font-weight: 800;
                font-size: 1.5rem;
                line-height: 2.25rem;
                
            }

            .wel-details {
            display: flex;
            flex-flow: row wrap;
            
        }
        .wel-box,
        .wel-msg {
            border-radius: 4px;
            
            background: #FFFFFF;
            border: 1px solid #EFEFEF;
            box-sizing: border-box;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            padding: 0.625rem;
            /* outline: 1px solid green; */
        }
        .wel-box {
            width: 67%;
            margin-right: 3%;
            
            
        }

        .wel-box .mem-id {
            color: #055844;
            font-weight: bold;
        }
        .wel-box .active {
            background: rgba(177, 224, 35, 0.1);
            border: none;
            border-radius: 3px;
            font-family: Poppins;
            font-weight: bold;
            font-size: 0.75rem;
            line-height: 1.125rem;
            color: #B1E023;
            outline: none;
            padding: 0 2rem;
        }

        .wel-msg {
            width: 30%;
            
            
        }
        .wel-msg img {
            height: 1.4rem;
            /* align-self: center; */
            /* outline:1px solid red; */
        }
        .wel-msg p {
            font-family: Poppins;
            font-weight: normal;
            font-size: 0.9rem;
            line-height: 1.125rem;
            color: #777777;
            /* align-self: baseline; */
            /* outline:1px solid green; */

        }


        .connect {
            border: 1px solid grey;
            border-radius: 4px;
            height: auto;
            background: #FFFFFF;
            border: 1px solid #EFEFEF;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 0.625rem;
        }
        .connect .box{
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
        }
        .connect .box input {
            padding: 0.625rem;
            background: #FFFFFF;
            border: 1px solid #EFEFEF;
            border-radius: 3px;
        }
        .connect .box button {
            background: #075F49;
            border-radius: 3px;
            color: #FFFFFF;
            padding: 0.5rem 2rem;
        }
        .connect p {
            font-size: 0.9rem;
            line-height: 1.125rem;
            color: #777777;
        }

    }

    

}

@media only screen and (max-width: 990px) {
    .msg-span{
        display: none;
    }
    .wel-msg {
    width: auto;

    }
    .wel-msg img{
        padding-right: 1rem;
    }
}
    /* .member-grid{
        display:grid;
        grid-template-columns:60% auto;
        margin-top:50px;
        margin-bottom:20px;
        form{
            border: 1px solid #EFEFEF;
            border-radius:5px;
            padding:20px;
            label{
                color:#777777;
                
            }
            .input-fields{
                margin-top:20px;
                .input-entry{
                    width:70%;
                    border:1px solid #EFEFEF;
                    padding: 10px;
                    border-radius:5px;
                }
                .input-btn{
                    padding: 10px 30px;
                    border:none;
                    margin-left:10px;
                    color:#FFF;
                    background:#075F49;
                    border-radius:5px;
                }
            }
            
        }
        h1{ 
                color:#777777;
                font-weight:bold;
                font-size:1.5em;
                margin-bottom:20px;
            }
        .member-id-grid{
            display:grid;
            width:80%;
            gap:10px;
            grid-template-columns:70% 30%;
            .messages{
                color:#777777;
            }
            .member-id-flex{
                display:flex;
                justify-content:space-between;
                align-items:center;
                border:1px solid #EFEFEF;
                padding:20px;
                border-radius:5px;

                .active{
                    color:#B1E023;
                    padding:7px 20px;
                    background:rgba(177,224,35,0.2);
                }
                
            }
            .messages{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border:1px solid #EFEFEF;
                    border-radius:5px;
                }
            
        }
    } */
`


export default MemberInfoStyles;