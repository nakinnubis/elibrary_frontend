import styled from 'styled-components';


const NavElementsContainer = styled.div`
    border-bottom: 1px solid #CED4DA;
    height: 7vh;
    
    .nav-grid{
        display:grid;
        grid-template-columns:repeat(9,1fr);
    }

    @media(max-width: 920px){
        display: none;
    }
`


export default NavElementsContainer