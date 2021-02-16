import styled from 'styled-components';


const CardWrapper = styled.div`
    background:rgba(177,224,35,0.1);
    width:100%;
    height:120px;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 1px solid #B1E023;
    border-radius:5px;
    .flex-container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .img-wrapper{
            width:20px;
            height:20px;
            position:relative;
        }
        p{
            color:#055844;
        }
    }
`

export default CardWrapper;