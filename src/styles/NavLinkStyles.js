import styled from 'styled-components';

const NavLinkStyles = styled.div`
    height:7vh;
    display:grid;
    border-left:1px solid #CED4DA;
    border-right:1px solid #CED4DA;
    box-sizing:border-box;
    font-size:12px;
    .active{
        background:rgba(177,224,35,0.1);
    }
    .nav-links{
        display:grid;
        width:100%;
        height:100%;
        grid-template-columns:30% 70%;
        place-self:center;
        .nav-icon{
            position:relative;
            width:15px;
            height:15px;
            place-self:center;
        }
        .nav-texts{
            place-self:center;
        }
    }
`


export default NavLinkStyles