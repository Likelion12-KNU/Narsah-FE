import { useParams } from 'react-router-dom';
import "../style/JobDetailPage.css"; 
import userOrange from '../img/user_orange.png'; 

const jobDetails = [
  {
    id: 1,
    name: "홍*동",
    license: "有",
    affiliation: "無",
    location: "서울 성북구",
    age: 53,
    height: 170,
    weight: 75,
    gender: "남성",
    careLocation: "강원대학교병원",
    carePeriod: "2024.08.01 부터 2024.08.20 까지",
    diagnosis: "감기몸살",
    hospitalizationPurpose: "검사",
    roomType: "일반실",
    mobilityStatus: "자가 보행",
    assistiveDevices: "없음",
    medications: "없음",
    details: "간병 경력이 있는 사람 구인"
  },
  {
    id: 2,
    name: "김*신",
    license: "有",
    affiliation: "無",
    location: "서울 노원구",
    age: 39,
    height: 165,
    weight: 55,
    gender: "남성",
    careLocation: "자택",
    carePeriod: "2024.08.01 부터 2024.08.20 까지",
    diagnosis: "당뇨",
    hospitalizationPurpose: "치료",
    roomType: "X",
    mobilityStatus: "보행 불가능",
    assistiveDevices: "없음",
    medications: "인슐린",
    details: "40대 이하, 간병 유경험자 우대"
  },

];

function JobDetailPage() {
  const { id } = useParams();
  const jobDetail = jobDetails.find(job => job.id === parseInt(id));

  if (!jobDetail) {
    return <p>해당하는 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="jobDetailPage">
      <div className="detailCard">
        <div className="userHeader">
          <img src={userOrange} alt="user" className="userIcon" />
          <div className="userInfo">
            <h2>{jobDetail.name} 환자</h2>
            <div className="userAttributes">
              <p><strong>나이:</strong> {jobDetail.age}세</p>
              <p><strong>키:</strong> {jobDetail.height}cm</p>
              <p><strong>몸무게:</strong> {jobDetail.weight}kg</p>
              <p><strong>성별:</strong> {jobDetail.gender}</p>
              <p><strong>간병 장소:</strong> {jobDetail.careLocation}</p>
            </div>
          </div>
        </div>
        <div className="detailInfo">
          <h3>세부 정보</h3>
          <p><strong>요구 간병 기간:</strong> {jobDetail.carePeriod}</p>
          <p><strong>진단명:</strong> {jobDetail.diagnosis}</p>
          <p><strong>입원 목적:</strong> {jobDetail.hospitalizationPurpose}</p>
          <p><strong>병실 유형:</strong> {jobDetail.roomType}</p>
          <p><strong>거동 상태:</strong> {jobDetail.mobilityStatus}</p>
          <p><strong>보조 장치 여부:</strong> {jobDetail.assistiveDevices}</p>
          <p><strong>복용 약:</strong> {jobDetail.medications}</p>
        </div>
      </div>
    </div>
  );
}

export default JobDetailPage;
