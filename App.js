import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="portfolio-container">
     
      <header className="header">
        <h1>Đinh Thanh Bình</h1>
        <h2>Sinh viên Công nghệ Thông tin - K24TT | UDCK</h2>
        <p>Mục tiêu: Intern Web Developer</p>
        
        <nav className="nav-menu">
          <button 
            className={activeTab === 'about' ? 'active' : ''} 
            onClick={() => setActiveTab('about')}
          >
            Giới thiệu
          </button>
          <button 
            className={activeTab === 'skills' ? 'active' : ''} 
            onClick={() => setActiveTab('skills')}
          >
            Kỹ năng
          </button>
          <button 
            className={activeTab === 'projects' ? 'active' : ''} 
            onClick={() => setActiveTab('projects')}
          >
            Dự án
          </button>
        </nav>
      </header>

    
      <main className="content">
        {activeTab === 'about' && (
          <section className="card fade-in">
            <h3>Giới thiệu bản thân</h3>
            <p>
              Xin chào! Mình là Bình. Mình có niềm đam mê lớn với lập trình Web và hiện đang
              không ngừng trau dồi các công nghệ Frontend như HTML, CSS, JavaScript và ReactJS. 
              Mình luôn sẵn sàng học hỏi và mong muốn được làm việc trong môi trường thực tế.
            </p>
          </section>
        )}

        {activeTab === 'skills' && (
          <section className="card fade-in">
            <h3>Kỹ năng chuyên môn</h3>
            <ul>
              <li><strong>Frontend:</strong> HTML, CSS, JavaScript, ReactJS</li>
              <li><strong>Backend/Database:</strong> SQL Server</li>
              <li><strong>Công cụ:</strong> Git, VS Code, Canva (Thiết kế đồ họa cơ bản)</li>
            </ul>
          </section>
        )}

        {activeTab === 'projects' && (
          <section className="card fade-in">
            <h3>Dự án tiêu biểu</h3>
            <div className="project-item">
              <h4>Website giới thiệu lớp</h4>
              <p>Trang web tĩnh sử dụng HTML/CSS để giới thiệu các thành viên.</p>
            </div>
           
          </section>
        )}
      </main>
      
      <footer>
        <p>Email: dtbinh.k24tt@kontum.udn.vn | SĐT: 0378040661 </p>
      </footer>
    </div>
  );
}

export default App;