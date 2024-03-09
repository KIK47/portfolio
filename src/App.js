import React, { useState } from 'react';

const App = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
  const toggleHistory = () => {
    setShowHistory(!showHistory);
    setShowPerformance(false);
    setShowContact(false);
  };
  
  const togglePerformance = () => {
    setShowPerformance(!showPerformance);
    setShowHistory(false);
    setShowContact(false);
  };
  
  const toggleContact = () => {
    setShowContact(!showContact);
    setShowHistory(false);
    setShowPerformance(false);
  };
  
  return (
    <div>
      <div className="navbar">
        <h1>Portfolio</h1>
        <nav>
          <ul>
            <li onClick={toggleHistory}>ประวัติ</li>
            <li onClick={togglePerformance}>ผลงาน</li>
            <li onClick={toggleContact}>ติดต่อ</li>
          </ul>
        </nav>
      </div>
      {showHistory && (
        <div className="content">
          <h2>ประวัติส่วนตัว</h2>
          <p>นายปรัชญา ตั้งสมสุข รหัสนิสิต65025480 คณะ ICT สาขา CS</p>
          <p>บ้านเลขที่ 26/908 ซอย 11 หมู่บ้านเเฟมมิลี่ปรา์ค อำเภอเมือง จังหวัดชลบุรี<br></br>การศึกษา ประถมวัยศึกษาอนุบาลชลบุรี มัธยมต้นชลบุรีสุขบท มัธยมปลายชลบุรีสุขบท อุดมศึกษามหาวิทยาลัยพะเยา</p>
        </div>
      )}
      {showPerformance && (
        <div className="content">
          <h2>ผลงาน</h2>
          <h3>Freecodecamp Html Css</h3>
          <img src="Screenshot 2024-03-09 171428 cdd.Png" alt="My Image" />
        </div>
      )}
      {showContact && (
        <div className="content">
          <h2>ติดต่อ</h2>
          <h3>Facebook</h3>
          <p>Facebook: <a href="https://www.facebook.com/profile.php?id=100080255124529">โปรไฟล์ของคุณ</a></p>
          <h3>email</h3>
          <p>kik0958570044za@gmail.com</p>
        </div>
      )}
      <div className="footer">
        <h1 id="history" style={{ color: showHistory ? '#8B4513' : 'black' }}>History</h1>
        <h1 id="performance" style={{ color: showPerformance ? '#8B4513' : 'black' }}>Performance</h1>
        <h1 id="contact" style={{ color: showContact ? '#8B4513' : 'black' }}>Contact</h1>
      </div>
      <div className="centered-image">
        <img src="2256a0713ee8e6f.png" alt="Centered Image" />
      </div>
    </div>
  );
}

export default App;
