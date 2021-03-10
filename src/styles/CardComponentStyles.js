import styled from 'styled-components';

const CardComponentStyles = styled.div`
    background:rgba(177,224,35,0.1);
    border: 1px solid #B1E023;
    color:#055844;
    display:flex;
    align-items:center;
    justify-content:center;
    height:150px;
    .card-content{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
    .card-image{
        width:30px;
        height:30px;
        position:relative;
        align-self:center;
    }
    p{
        margin-top:10px;
    }
`

export default CardComponentStyles;