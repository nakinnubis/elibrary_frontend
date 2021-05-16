import styled from "styled-components/macro";

const NotificationStyles = styled.div`
  display: grid;
  grid-template-columns: 60% 30% 10%;
  align-items: center;
  color: #777777;
  padding: 20px;
  .news-wrapper {
    display: grid;
    gap: 5px;
    h3 {
      font-size: 14px;
      margin: 0;
      color: #777777;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      color: #777777;
      margin: 0;
      line-height: 1.5;
    }
  }

  .image-wrapper {
    position: relative;
    height: 25px;
    width: 100px;
  }
  .date-wrapper {
    p {
      text-align: center;
      margin: 0;
      font-size: 14px;
    }
  }

@media screen and (max-width: 678px){
  grid-template-columns: 90% 10%;
  grid-template-rows: auto;
  grid-template-areas: "title title"
                       "date dots";

  padding: 20px 10px;
  .news-wrapper{
    grid-area: title;
  }
 
  .content-wrapper{
    font-size: 14px;
    line-height: 1.5
  }

  .date-wrapper{
    grid-area: date;
    padding: 10px 0;

    p{
      text-align:justify;
    }
  }

  .image-wrapper{
    grid-area: dots;
    width: 50px;

    img{
      height:25px;
    }
  }
}


`;

export default NotificationStyles;
