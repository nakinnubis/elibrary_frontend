import styled from 'styled-components';


const MemberInfoStyles = styled.div`
    .member-grid{
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
    }
`


export default MemberInfoStyles;