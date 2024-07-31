import { useNavigate } from 'react-router-dom';
import userOrange from '../img/user_orange.png';
import linkImg from "../img/link.png"
import "../style/JobCard.css"

function JobCard({index, id, title, author, unit, license, affiliation, location }) {
    const navigate = useNavigate();

    return (
        <div
            key={index}
            className='jobCard'
            onClick={() => navigate(`/job/${id}`)}
        >
            <div className='cardContent'>
                <img src={userOrange} alt="user" className='userIcon' />
                <div className='cardText'>
                    <h2>{title}</h2>
                    <p>작성자: {author}</p>
                    <p>단위: {unit}</p>
                    <p>자격증: {license}</p>
                    <p>소속: {affiliation}</p>
                    <p>지역: {location}</p>
                </div>
            </div>
        </div>
    )
}

export default JobCard;
