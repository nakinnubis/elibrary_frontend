import CardComponentStyles from '../styles/CardComponentStyles';
import {useHistory} from 'react-router-dom'


const AdminCardComponent = ({ img, title, link }) => {
const history = useHistory();
  const handleClick = () =>{
    history.push(link);
  }


  return (
    <CardComponentStyles onClick={handleClick}>
      <div className='card-content'>
        <div className='card-image'>
          <img src={img} alt=""/>
        </div>
        <p>{title}</p>
      </div>
    </CardComponentStyles>
  );
};

export default AdminCardComponent;
