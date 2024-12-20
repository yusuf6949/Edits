// import React, { useState } from 'react';
// import { Book, Users, Award, Calendar, MessageSquare, HelpCircle, Moon, Sun, Cpu, Brain, Network } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import './layout.css'
// const CourseCard = ({ title, description, level, duration, rating, icon }) => (
//   <div className="cd-bg-white cd-dark:bg-gray-800 cd-rounded-lg cd-shadow-md cd-p-4">
//     <div className={`cd-course-icon ${icon.color}`}>
//       {icon.component}
//     </div>
//     <h3 className="cd-font-bold cd-text-black cd-dark:text-white">{title}</h3>
//     <p className="cd-text-sm cd-text-gray-600 cd-dark:text-gray-300">{description}</p>
//     <div className="cd-flex cd-justify-between cd-mt-2 cd-text-sm cd-text-gray-600 cd-dark:text-gray-300">
//       <span>{level}</span>
//       <span>{duration}</span>
//       <span>★ {rating}</span>
//     </div>
//   </div>
// );

// const ProgressBar = ({ progress, color }) => (
//   <div className="cd-progress-bar">
//     <div
//       className={`cd-progress-bar-fill ${color}`}
//       style={{ width: `${progress}%` }}
//     ></div>
//   </div>
// );

// const WatchlistOverlay = ({ userInfo, onClose }) => (
//   <div className="watchlist-overlay">
//     <div className="watchlist-content">
//       <img src="/api/placeholder/200/100" alt="NextHomeLabs Logo" className="watchlist-logo" />
//       <h2 className="watchlist-title">
//         Hello, {userInfo.givenName}!
//       </h2>
//       <p className="watchlist-message">
//         You have successfully joined our watchlist. Thanks for your interest in NextHomeLabs courses and the future of AI. Stay tuned! You will soon receive an email to access your free course.
//       </p>
//       <button className="watchlist-button" onClick={onClose}>
//         Got it!
//       </button>
//     </div>
//   </div>
// );

// const CourseDashboard = ({ children, isLoggedIn, userInfo, onLogout }) => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [showWatchlistOverlay, setShowWatchlistOverlay] = useState(true);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle('dark');
//   };

//   const closeWatchlistOverlay = () => {
//     setShowWatchlistOverlay(false);
//   };

//   const courses = [
//     { id: 1, title: 'Introduction to AI ', progress: 0, duration: '0 hours left', color: 'cd-bg-blue-500' },
//     { id: 2, title: 'Advanced Machine Learning Algorithms', progress: 0, duration: '0 hours left', color: 'cd-bg-purple-500' },
//     { id: 3, title: 'AI for Natural Language Processing', progress: 0, duration: '0 hours left', color: 'cd-bg-yellow-500' },
//   ];

//   const allCourses = [
//     { id: 1, title: 'Introduction to AI ', description: 'Explore the fundamental concepts of artificial intelligence, including machine learning, neural networks, and AI ethics.', level: 'Beginner', duration: '8 hours', rating: 4.8, icon: { component: <Cpu className="cd-text-white" />, color: 'cd-bg-green-600' } },
//     { id: 2, title: 'Advanced Machine Learning Algorithms', description: 'Dive deep into complex ML algorithms, focusing on deep learning, reinforcement learning, and generative models.', level: 'Advanced', duration: '12 hours', rating: 4.9, icon: { component: <Brain className="cd-text-white" />, color: 'cd-bg-red-600' } },
//     { id: 3, title: 'AI for Natural Language Processing', description: 'Learn how AI is revolutionizing language understanding and generation, covering topics like transformers and BERT.', level: 'Intermediate', duration: '10 hours', rating: 4.7, icon: { component: <Network className="cd-text-white" />, color: 'cd-bg-indigo-600' } },
//   ];

//   return (
//     <div className={`cd-flex cd-h-screen ${darkMode ? 'cd-dark' : ''}`}>
//       {/* Sidebar */}
//       <div className="cd-w-64 cd-bg-white cd-dark:bg-gray-800 cd-shadow-md">
//         <div className="cd-p-4">
//           <h1 className="cd-text-2xl cd-font-bold cd-text-black cd-dark:text-white">NextHomeLabs</h1>
//         </div>
//         <nav className="cd-mt-4">
//           {['Home', 'Bookmarks', 'Courses', 'Tutorials', 'Best Practices', 'Certifications', 'Resources', 'Events', 'Community', 'Setting', 'Help Center'].map((item, index) => (
//             <a key={index} href="#" className="cd-block cd-py-2 cd-px-4 cd-text-gray-600 cd-dark:text-gray-300 cd-hover:bg-gray-100 cd-dark:hover:bg-gray-700">
//               {item === 'Courses' ? <span className="cd-font-bold cd-text-teal-600">{item}</span> : item}
//             </a>
//           ))}
//         </nav>
   
//         <div className="cd-p-4 cd-text-sm cd-bottom-4 cd-text-gray-600 cd-dark:text-gray-300">{userInfo.email}</div>
//         <button 
//           className="cd-absolute cd-bottom-4 cd-left-4 cd-flex cd-items-center cd-text-gray-600 cd-dark:text-gray-300"
//           onClick={toggleDarkMode}
//         >
//           {darkMode ? <Sun className="cd-mr-2" /> : <Moon className="cd-mr-2" />}
//           <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="cd-flex-1 cd-p-8 cd-overflow-auto cd-bg-gray-100 cd-dark:bg-gray-900">
//         <div className="cd-flex cd-justify-between cd-items-center cd-mb-6">
//           <h2 className="cd-text-2xl cd-font-bold cd-text-black cd-dark:text-white">
//             {isLoggedIn ? `Welcome, ${userInfo.givenName}!` : 'Welcome, Guest!'}
//           </h2>
//           <div className="cd-flex cd-items-center">
//             <input type="text" placeholder="Search..." className="cd-input cd-mr-4 cd-dark:bg-gray-700 cd-dark:text-white" />
//             {isLoggedIn ? (
//               <>
//                 <button 
//                   onClick={onLogout}
//                   className="cd-bg-red-500 cd-hover:bg-red-600 cd-text-white cd-font-bold cd-py-2 cd-px-4 cd-rounded"
//                 >
//                   Logout
//                 </button>
//                 {userInfo.picture && (
//                   <img 
//                     src={userInfo.picture} 
//                     alt="User profile" 
//                     className="cd-w-8 cd-h-8 cd-rounded-full cd-ml-4" 
//                   />
//                 )}
//               </>
//             ) : (
//               <button className="cd-bg-blue-500 cd-hover:bg-blue-600 cd-text-white cd-font-bold cd-py-2 cd-px-4 cd-rounded">
//                 Login
//               </button>
//             )}
//           </div>
//         </div>

//         {children}

//         <h3 className="cd-text-xl cd-font-bold cd-mb-4 cd-text-black cd-dark:text-white">Your Courses</h3>
//         <div className="cd-grid cd-grid-cols-3 cd-gap-4 cd-mb-8">
//           {courses.map(course => (
//             <div key={course.id} className="cd-bg-white cd-dark:bg-gray-800 cd-rounded-lg cd-shadow cd-p-4">
//               <h4 className="cd-font-bold cd-mb-2 cd-text-black cd-dark:text-white">{course.title}</h4>
//               <ProgressBar progress={course.progress} color={course.color} />
//               <p className="cd-mt-2 cd-text-sm cd-text-gray-600 cd-dark:text-gray-300">{course.progress}% complete • {course.duration}</p>
//             </div>
//           ))}
//         </div>

//         <div className="cd-flex cd-justify-between cd-items-center cd-mb-4">
//           <h3 className="cd-text-xl cd-font-bold cd-text-black cd-dark:text-white">All Courses</h3>
//           <select className="cd-select cd-dark:bg-gray-700 cd-dark:text-white">
//             <option>Recommendation</option>
//             <option>Trending</option>
//             <option>Newly Added</option>
//             <option>Most Popular</option>
//             <option>Ratings</option>
//           </select>
//         </div>

//         <div className="cd-grid cd-grid-cols-3 cd-gap-4">
//           {allCourses.map(course => (
//             <CourseCard key={course.id} {...course} />
//           ))}
//            {showWatchlistOverlay && isLoggedIn && (
//           <WatchlistOverlay userInfo={userInfo} onClose={closeWatchlistOverlay} />
//         )}
//         </div>

       
//       </div>
//     </div>
//   );
// };



// export default CourseDashboard;



import React, { useState } from 'react';
import { MessageSquare, PlusCircle, Send, Moon, Sun } from 'lucide-react';
import './layout.css'

const ChatMessage = ({ message, isUser }) => (
  <div className={`cd-flex cd-mb-4 ${isUser ? 'cd-justify-end' : 'cd-justify-start'}`}>
    <div className={`cd-max-w-3/4 cd-p-3 cd-rounded-lg ${isUser ? 'cd-bg-blue-500 cd-text-white' : 'cd-bg-gray-200 cd-text-black cd-dark:bg-gray-700 cd-dark:text-white'}`}>
      {message}
    </div>
  </div>
);

const GenerativeAIInterface = ({ isLoggedIn, userInfo, onLogout }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(1);
  const [chats, setChats] = useState([{ id: 1, name: 'New Chat' }]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setChatHistory([...chatHistory, { message: input, isUser: true }]);
      // Simulated AI response
      setTimeout(() => {
        setChatHistory(prev => [...prev, { message: `AI response to: ${input}`, isUser: false }]);
      }, 1000);
      setInput('');
    }
  };

  const startNewChat = () => {
    const newChatId = chats.length + 1;
    setChats([...chats, { id: newChatId, name: `New Chat ${newChatId}` }]);
    setCurrentChatId(newChatId);
    setChatHistory([]);
  };

  return (
    <div className={`cd-flex cd-h-screen ${darkMode ? 'cd-dark' : ''}`}>
      {/* Sidebar */}
      <div className="cd-w-64 cd-bg-white cd-dark:bg-gray-800 cd-shadow-md cd-flex cd-flex-col">
        <div className="cd-p-4">
          <h1 className="cd-text-2xl cd-font-bold cd-text-black cd-dark:text-white">AI Assistant</h1>
        </div>
        <button 
          onClick={startNewChat}
          className="cd-flex cd-items-center cd-justify-center cd-bg-blue-500 cd-hover:bg-blue-600 cd-text-white cd-font-bold cd-py-2 cd-px-4 cd-rounded cd-m-4"
        >
          <PlusCircle className="cd-mr-2" />
          New Chat
        </button>
        <nav className="cd-mt-4 cd-flex-grow cd-overflow-y-auto">
          {chats.map(chat => (
            <a 
              key={chat.id} 
              href="#" 
              className={`cd-block cd-py-2 cd-px-4 cd-text-gray-600 cd-dark:text-gray-300 cd-hover:bg-gray-100 cd-dark:hover:bg-gray-700 ${currentChatId === chat.id ? 'cd-bg-gray-200 cd-dark:bg-gray-600' : ''}`}
              onClick={() => setCurrentChatId(chat.id)}
            >
              <MessageSquare className="cd-inline cd-mr-2" />
              {chat.name}
            </a>
          ))}
        </nav>
        <div className="cd-p-4 cd-text-sm cd-text-gray-600 cd-dark:text-gray-300">
          {isLoggedIn ? userInfo.email : 'Guest'}
        </div>
        <button 
          className="cd-flex cd-items-center cd-justify-center cd-p-4 cd-text-gray-600 cd-dark:text-gray-300"
          onClick={toggleDarkMode}
        >
          {darkMode ? <Sun className="cd-mr-2" /> : <Moon className="cd-mr-2" />}
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="cd-flex-1 cd-flex cd-flex-col cd-bg-gray-100 cd-dark:bg-gray-900">
        {/* Header */}
        <div className="cd-bg-white cd-dark:bg-gray-800 cd-p-4 cd-shadow cd-flex cd-justify-between cd-items-center">
          <h2 className="cd-text-xl cd-font-bold cd-text-black cd-dark:text-white">
            {isLoggedIn ? `Welcome, ${userInfo.givenName}!` : 'Welcome, Guest!'}
          </h2>
          <div className="cd-flex cd-items-center">
            {isLoggedIn ? (
              <button 
                onClick={onLogout}
                className="cd-bg-red-500 cd-hover:bg-red-600 cd-text-white cd-font-bold cd-py-2 cd-px-4 cd-rounded"
              >
                Logout
              </button>
            ) : (
              <button className="cd-bg-blue-500 cd-hover:bg-blue-600 cd-text-white cd-font-bold cd-py-2 cd-px-4 cd-rounded">
                Login
              </button>
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className="cd-flex-1 cd-flex cd-overflow-hidden">
          {/* Input Area */}
          <div className="cd-w-1/2 cd-p-4 cd-flex cd-flex-col">
            <div className="cd-flex-1 cd-overflow-y-auto cd-mb-4">
              {chatHistory.filter(msg => msg.isUser).map((msg, index) => (
                <ChatMessage key={index} message={msg.message} isUser={true} />
              ))}
            </div>
            <form onSubmit={handleSubmit} className="cd-flex">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="cd-flex-1 cd-p-2 cd-border cd-border-gray-300 cd-rounded-l cd-dark:bg-gray-700 cd-dark:text-white cd-dark:border-gray-600"
              />
              <button 
                type="submit" 
                className="cd-bg-blue-500 cd-hover:bg-blue-600 cd-text-white cd-font-bold cd-py-2 cd-px-4 cd-rounded-r"
              >
                <Send />
              </button>
            </form>
          </div>

          {/* Chat History */}
          <div className="cd-w-1/2 cd-bg-white cd-dark:bg-gray-800 cd-p-4 cd-overflow-y-auto">
            {chatHistory.map((msg, index) => (
              <ChatMessage key={index} message={msg.message} isUser={msg.isUser} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerativeAIInterface;