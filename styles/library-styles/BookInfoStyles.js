import styled from 'styled-components';

const BookInfoStyles = styled.div`
.hero-bg{
    height:150px;
    width:100%;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    background:url("/bg.png");
    background-size:cover;
    a{
        margin-bottom:20px;
        background:#075F49;
        z-index:200;
        padding:5px 20px;
        border-radius:5px;
        font-size:14px;
        color:#EFEFEF;
    }
    
}
.book-pricing-bg{
        box-shadow: 0px 7px 20px rgba(202, 203, 207, 0.5);
        .title-div{
        border-bottom:2px solid #EFEFEF;
        display:flex;
        font-size:12px;
        padding:20px 10px;
        align-items:center;
        color:#777777;
    }
    .start-reading-div{
        display:flex;
        padding:20px 0;
        justify-content:center;
        align-items:center;
        
        p{
            margin-left:20px;
            color:#777777;
            font-size:14px;
        }
    }
}


`

export default BookInfoStyles;