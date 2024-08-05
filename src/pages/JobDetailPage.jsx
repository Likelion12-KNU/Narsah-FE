import { useParams } from 'react-router-dom';
import "../style/JobDetailPage.css";
import Patient from '../components/Patient';
import Bar from '../components/Bar';

// // db에 구현
// const jobDetails = [
//   {
//     id: 1,
//     name: "홍*동",
//     license: "有",
//     affiliation: "無",
//     location: "서울 성북구",
//     age: 53,
//     height: 170,
//     weight: 75,
//     gender: "남성",
//     careLocation: "강원대학교병원",
//     carePeriod: "2024.08.01 부터 2024.08.20 까지",
//     diagnosis: "감기몸살",
//     hospitalizationPurpose: "검사",
//     roomType: "일반실",
//     mobilityStatus: "자가 보행",
//     assistiveDevices: "없음",
//     medications: "없음",
//     details: "간병 경력이 있는 사람 구인"
//   },
//   {
//     id: 2,
//     name: "김*신",
//     license: "有",
//     affiliation: "無",
//     location: "서울 노원구",
//     age: 39,
//     height: 165,
//     weight: 55,
//     gender: "남성",
//     careLocation: "자택",
//     carePeriod: "2024.08.01 부터 2024.08.20 까지",
//     diagnosis: "당뇨",
//     hospitalizationPurpose: "치료",
//     roomType: "X",
//     mobilityStatus: "보행 불가능",
//     assistiveDevices: "없음",
//     medications: "인슐린",
//     details: "40대 이하, 간병 유경험자 우대"
//   },

// ];

function JobDetailPage() {
  const { id } = useParams();
  const jobDetail = jobDetails.find(job => job.id === parseInt(id));

  if (!jobDetail) {
    return <p>해당하는 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="jobDetailPage">
      <Bar />
      <div className='content'>
        <Patient
          id={jobDetail.id}
          name={jobDetail.name}
          age={jobDetail.age}
          height={jobDetail.height}
          weight={jobDetail.weight}
          gender={jobDetail.gender}
          careLocation={jobDetail.careLocation}
          carePeriod={jobDetail.carePeriod}
          diagnosis={jobDetail.diagnosis}
          hospitalizationPurpose={jobDetail.hospitalizationPurpose}
          roomType={jobDetail.roomType}
          mobilityStatus={jobDetail.mobilityStatus}
          assistiveDevices={jobDetail.assistiveDevices}
          medications={jobDetail.medications}
        />
      </div>
    </div>
  );
}

export default JobDetailPage;
