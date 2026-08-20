import ProfileCard from './compenents/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'Teerapong', nickname: 'Ball',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['Badminton', 'Game'] },
    // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
    { id: 2, name: 'Kulpreeya', nickname: 'Earn',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['Flowers', 'Game'] },
    { id: 3, name: 'Methaporn', nickname: 'Mint',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['mhala', 'thai tea'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;