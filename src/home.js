import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import MarketSizeAdoptionDashboard from './components/graph.js';
import BackgroundDots from './components/BackgroundDots.js';
import ContactPage from './components/contact.js';
import { useNavigate } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTwitter, faTelegramPlane, faInstagram } from '@fortawesome/free-brands-svg-icons';import { 
  faBrain, 
  faCode, 
  faRobot, 
  faChartLine, 
  faLink,
  faAdjust, 
  faShieldAlt,
  faComments 

} from '@fortawesome/free-solid-svg-icons';


import logo21 from './components/nhl934.png';
import logo222 from './assets/222.png';

import founder2 from './assets/founder.png';
import logo11 from './assets/logo1.jpeg';
import logo22 from './assets/logo2.jpg';

import logo33 from './assets/nvidia.webp';
import logo55 from './assets/logo5.png';
import news11 from './assets/news1.avif';
import news22 from './assets/smaller.webp';
import news44 from './assets/ai-in-ind.webp';
import news33 from './assets/ai-in-env.webp';
import Support from './support.js';
import parameters from './components/parameters.svg';
import ConsultSVG from './components/consult.svg';
import Homeimg from './components/homesvg.js';

const App = () => {

 const [showContactPage, setShowContactPage] = useState(false);

 const [isNavActive, setIsNavActive] = useState(false);

 const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollTop = useRef(0);

  const [isMoreContentVisible, setIsMoreContentVisible] = useState(false);
  const [isFounderContentVisible, setIsFounderContentVisible] = useState(false);

  const toggleMoreContent = () => setIsMoreContentVisible(!isMoreContentVisible);
  const toggleFounderContent = () => setIsFounderContentVisible(!isFounderContentVisible);
  const navigate = useNavigate();

  const [showSupport, setShowSupport] = useState(false);

  const toggleSupport = () => {
    setShowSupport(true);
  };
  
  const closeSupport = () => {
    setShowSupport(false);
  };



  const handleGetStarted = () => {
    window.location.href = 'https://centgpt.com';
  };


  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {

        setIsNavVisible(false);
      } else {
     
        setIsNavVisible(true);
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

 const toggleNav = () => {
  setIsNavActive(!isNavActive);
};



  const handlecontactus = () => setShowContactPage(true);

  if (showContactPage) {
    return <ContactPage onClose={() => setShowContactPage(false)} />;
  }

  return (
    <>
          <BackgroundDots />
          <button className="ask-ai-button" onClick={toggleSupport}>
        <FontAwesomeIcon icon={faComments} className='ask_ai_icon' /> Ask AI
      </button>

      {showSupport && <Support onClose={closeSupport} />}
      
          <header className={`header ${isNavVisible ? 'visible' : 'hidden'}`}>
          <nav className="navbar">
          <div className="nav-content">
            <div className="logo-container">
              <img src={logo21} alt="NextHomeLabs Logo" />
              <a href="#home" className="logo">NextHome<span>Labs</span></a>
            </div>
            <button 
  className={`hamburger ${isNavActive ? 'active' : ''}`}
  onClick={toggleNav}
  type="button"
>
  <span></span>
  <span></span>
  <span></span>
</button>

<div className={`nav-links ${isNavActive ? 'active' : ''}`}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Models</a>
              <a onClick={handlecontactus}>Business</a>
              <a href="#services">Legal</a>
              <a href="#news">News</a>
              <a onClick={handlecontactus} >Contact</a>
              <div className="social-icons">
                <a href="https://whatsapp.com/channel/0029VadGwzLGehEGiW64dD0q" ><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href="https://twitter.com/NextHomeLabs" ><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://t.me/+dMyT506gYm45OGE0"><FontAwesomeIcon icon={faTelegramPlane} /></a>
              </div>

              <button type="button" onClick={handleGetStarted} className="button323">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section className="home" id="home">
   

        <div className="home-content">
          <h1>NextHome <span>Labs</span></h1>
          <h3 className="text-animation">We Are Shaping the Future Of <span></span></h3>
          <div className="home-svg">
          < Homeimg />
          
          </div>
          <p>Welcome to NextHomeLabs, where we're redefining the landscape of technology. Our mission is to harness the transformative power of artificial intelligence and blockchain, creating innovative solutions that enhance efficiency, security, and quality of life.</p>
          <div className="buttons33">
          <a className="button32 primary" onClick={handleGetStarted}>Get Started</a>

          <a href="#" className="button33 secondary">Discover More</a>

          </div>
        </div>
        <div className="background" id="background"></div>
      </section>

      <div className="about" id="about">
        <div className="about-img">
          <img src={logo222} alt="NextHomeLabs Logo" />
        </div>
        <div className="about-content">
          <h2>NextHome<span>Labs</span></h2>
          <p>Next Home Labs is a technology company specialized in Artificial intelligence, Machine Learning and blockchain Our team is committed to developing advanced technologies that enhance security and operational efficiency.</p>
          <div className={`more-content ${isMoreContentVisible ? 'visible' : ''}`}>
       
        <p>At Next Home Labs, we are dedicated to exploring the vast potential of AI to revolutionize various industries, from healthcare and finance to security and smart home systems. Our team of experts is at the forefront of AI research and development, creating intelligent systems that learn and adapt to the needs of users, providing unparalleled convenience and efficiency.</p>
        <p>Blockchain technology is another cornerstone of our innovation strategy. We are committed to leveraging the power of blockchain to create secure, transparent, and efficient systems for financial transactions, data management, and beyond. Our blockchain solutions are designed to ensure the highest level of security and trust, empowering businesses and individuals to operate with confidence in the digital age.</p>
        <p>Furthermore, we are continually investing in the development of future technologies, anticipating the next big breakthroughs that will shape our world. Our forward-thinking approach ensures that we are always prepared to meet the evolving demands of our clients and stay ahead in the rapidly changing tech landscape.</p>
        <p>Join us on our journey to harness the power of technology to create a smarter, more secure, and more efficient future. At Next Home Labs, we believe in the transformative power of innovation, and we are committed to making a positive impact through our advanced technological solutions.</p>
   
          </div>
          <a href="#" className="btn" onClick={toggleMoreContent}>
            {isMoreContentVisible ? 'Read Less' : 'Read More'}
          </a>
        </div>
      </div>

      <div className="ai-blockchain-focus" id="course">
        <h2 className="heading">Why Artificial Intelligence and Blockchain</h2>
    <div className="focus-content">
        <p>At NextHome Labs, we believe that Artificial Intelligence (AI) and Blockchain are the cornerstones of future technological advancements. Our focus on these technologies stems from our commitment to harnessing their potential to revolutionize various industries, enhance security, and improve operational efficiency. By integrating AI and Blockchain into our products and services, we aim to create smarter, more efficient solutions that can adapt to the ever-changing needs of our clients.</p>
    </div>
      </div>

      <div className="services" id="services">
        <h2 className="heading">Our Research and Focus</h2>
        <p className='servicesp'> At NextHomeLabs, we're dedicated to pushing the boundaries of AI and blockchain technologies through innovative research.</p>
        <div className="services-container">
          <ServiceBox
            icon={faBrain}
            title="Advanced Machine Learning"
            description="Exploring cutting-edge machine learning algorithms and techniques to solve complex problems and enhance AI capabilities."
          />
          <ServiceBox
            icon={faCode}
            title="Natural Language Processing"
            description="Developing sophisticated NLP models to enable machines to understand, interpret, and respond to human language effectively."
          />
          <ServiceBox
            icon={faChartLine}
            title="Predictive Analytics"
            description="Utilizing AI to analyze data trends and make accurate predictions for business intelligence and decision-making."
          />
          <ServiceBox
            icon={faLink}
            title="Explainable AI"
            description="Developing techniques to make AI decision-making processes more transparent and understandable, allowing users to trust and effectively manage AI-driven systems."
          />
          <ServiceBox
            icon={faAdjust}
            title="AI Ethics and Bias Mitigation"
            description="Researching methods to ensure that AI systems are fair, unbiased, and ethical, promoting trust and social responsibility in AI applications."
          />
          <ServiceBox
            icon={faRobot}
            title="AI Agents and Multi-Agent Systems"
            description="Exploring the design and implementation of autonomous agents and multi-agent systems that can collaborate and compete in dynamic environments."
          />
          <ServiceBox
            icon={faBrain}
            title="Quantum Computing and AI"
            description="Investigating the potential of quantum computing to accelerate AI processes and solve complex problems that are infeasible for classical computers."
          />
          <ServiceBox
            icon={faShieldAlt}
            title="AI for Cybersecurity"
            description="Leveraging AI to detect and prevent cyber threats in real-time, enhancing the security and resilience of digital systems."
          />
        </div>
      </div>
 

<section className="ai-course-intro">
  <div className="ai-course-content">
    <AiBox
      title="Cent-GPT"
      description="CentGPT stands as NextHomeLabs' flagship AI model and central hub of knowledge, engineered to transform how businesses and individuals engage with artificial intelligence. CentGPT features advanced natural language processing, multi-modal learning, and expert coding abilities."  // features={[
      //   "Advanced Natural Language Understanding",
      //   "Multi-modal Learning",
      //   "Adaptive Learning",
      //   "Customizable for Specific Domains",
      //   "Ethical AI Framework",
      //   "Expert Coder"
      // ]}
      // applications={[
      //   "Intelligent Virtual Assistants",
      //   "Data Analysis and Insights",
      //   "Content Generation",
      //   "Predictive Modeling",
      //   "Software Development Support"
      // ]}
      // coderCapabilities={[
      //   "Code Generation",
      //   "Code Completion",
      //   "Debugging Assistant",
      //   "Code Optimization",
      //   "Language Translation",
      //   "Documentation Generation",
      //   "Best Practices Enforcement"
      // ]}
      handleGetStarted={handleGetStarted}
      parameters={parameters}
    />
  </div>
</section>
      {/* Dream Worlds Section */}
      <section className="dream-worlds">
        <div className="dream-worlds-container">
          <div className="text-content">
            <h1>Empowering <span className="highlight">Innovations</span></h1>
            <div className="svg-content-smalldevices">
            <img src={ConsultSVG} alt="Home" />
            </div>
            <p>Revolutionize your business with the transformative power of AI. Our cutting-edge solutions are designed to significantly boost your team's productivity and operational efficiency, paving the way for unprecedented growth and success in the digital age.</p>
            <div className="buttons">
            <a  onClick={handlecontactus}  className="button32 primary">Sign Up</a>
            <a onClick={handleGetStarted} className="button33 secondary">Discover More</a>

            </div>

          </div>
          <div className="svg-content-desktop">
          <img src={ConsultSVG} alt="Home" />
          </div>
        </div>
      </section>

      <section className="graph-section">

          <MarketSizeAdoptionDashboard />
 
      </section>

    


      {/* <section className="testimonials" id="testimonials">
      <div className="testimonials-box">
        <h2 className="heading"> Co Founder</h2>
        <div className="wrapper">
          <div className="testimonial-item">
            <img src={founder2} alt="Ohood Richard" />
            <h1>Ohood Richard</h1>
            <h2>Founder</h2>
            <div className="rating"></div>
            <p>
              Ohood Richard, a distinguished thought leader with 10 years of experience in blockchain and 4 years in AI, is passionate about artificial intelligence and blockchain technologies.
            </p>
            <p className={isFounderContentVisible ? '' : 'hidden'}>
              His extensive expertise spans from conceptualizing AI-driven solutions to implementing robust blockchain architectures, positioning NextHomeLabs at the cutting edge of technological advancement. With a decade of blockchain experience and four years dedicated to AI, Ohood brings a unique blend of deep technical knowledge and visionary leadership. Under Ohood's guidance, the company continues to push the boundaries of what's possible, creating powerful synergies between AI and blockchain that promise to reshape industries and enhance digital experiences worldwide.
            </p>
            <span className="read-more-btn" onClick={toggleFounderContent}>
              {isFounderContentVisible ? 'Read less' : 'Read more'}
            </span>
          </div>
        </div>
      </div>
    </section> */}

      <section className="partners" >
        <h2 className="headingp">PARTNERS</h2>
        <div className="logo-pcontainer">
          <div className="logo-slider">
            <div className="logo-item"><img src={logo11} alt="Partner 2" /></div>
            <div className="logo-item"><img src={logo22} alt="Partner 2" /></div>
            <div className="logo-item"><img src={logo33} alt="Partner 3" /></div>
            <div className="logo-item"><img src={logo55} alt="Partner 5" /></div>
          </div>
        </div>

        </section>
        <section className="projects" id="news">

        <h2 className="headingn">News And Updates</h2>
        <div className="projects-box">
          <NewsCard
            image={news11}
            title="AI in Human Resources and Operations"
            description=" Many businesses are leveraging AI to streamline HR processes, supply chain management, and marketing. You can emphasize how your AI solutions can help companies reduce costs and increase efficiency in these areas, reflecting the growing trend of AI adoption in operational management​("
            link="https://nexthomelabs.com/articlesl#ai-hr-operations"

          />
         <NewsCard
    image={news22}
    title="CentGPT: Uganda's Breakthrough in Local AI Technology"
    description="Nexthomelabs introduces CentGPT, marking a significant milestone in Uganda's AI landscape. The innovative AI model showcases local technological prowess, offering a tailored solution that addresses regional needs while demonstrating Uganda's growing capabilities in artificial intelligence. This launch highlights the country's potential to become a key player in the African tech innovation ecosystem."
    link="https://nexthomelabs.com/articles#centgpt-uganda"
/>

           <NewsCard
            image={news33}
            title="AI in Environmental Sustainability"
            description="
Trend: AI is being used to combat climate change by optimizing energy use, improving waste management, and predicting environmental trends. AI-driven insights can help businesses adopt more sustainable practices and reduce their carbon footprint."
link="https://nexthomelabs.com/articles#ai-environmental-sustainability"

        />
           <NewsCard
            image={news44}
            title="AI in Creative Industries"
            description="
Trend: AI is increasingly being used in creative fields such as art, music, and content creation. AI tools can generate artwork, compose music, and even write stories, opening up new possibilities for creativity."
link="https://nexthomelabs.com/articles#ai-creative-industries"

        />


        </div>
      </section>

      <div className="nhlj-container">
        <div className="nhlj-join-section">
          <h2 className="nhlj-join-title">Join our community</h2>
          <div className="nhlj-button-group">
            <a href="https://chat.whatsapp.com/EcaYoVLg2gV4wKAliMYhsU" className="nhlj-button">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
            <a href="https://twitter.com/NextHomeLabs" className="nhlj-button">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
          
            <a href="https://t.me/Nexthomelabs" className="nhlj-button">
              <FontAwesomeIcon icon={faTelegramPlane} /> Telegram
            </a>

            <a href="https://www.instagram.com/nexthomelabs" className="nhlj-button">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </div>
        </div>
      </div>

      <footer className="nhlj-footer">
        <div className="nhlj-copyright">© 2024 NextHomeLabs. All Rights Reserved.</div>
        <div className="nhlj-footer-links">
          <a href="#">Terms of service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Careers</a>
        </div>
        <p>
          Support: <a href="mailto:support@nexthomelabs@gmail.com">support@nexthomelabs@gmail.com</a>
        </p>
      </footer>
    </>
  );
};

const ServiceBox = ({ icon, title, description, handlecontactus }) => (
  <div className="service-box">
    <FontAwesomeIcon icon={icon} className="service-icon" />
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <div className="learn-more">
      <a onClick={handlecontactus}>Learn More</a>
    </div>
  </div>
);

const AiBox = ({ icon, title, description, features, applications, coderCapabilities, handleGetStarted, parameters }) => (
  <div className="ai-box">
    <h2 className="ai-box__title">{title}</h2>
    <img src={parameters} alt="Parameters" className="ai-box__icon" />
    <p className="ai-box__description">{description}</p>
    {/* <div className="ai-box__content"> */}
      {/* <div className="ai-box__section">
        <h3 className="ai-box__section-title">Key Features</h3>
        <ul className="ai-box__list">
          {features.map((feature, index) => (
            <li key={index} className="ai-box__list-item">{feature}</li>
          ))}
        </ul>
      </div> */}
      {/* <div className="ai-box__section">
        <h3 className="ai-box__section-title">Applications</h3>
        <ul className="ai-box__list">
          {applications.map((app, index) => (
            <li key={index} className="ai-box__list-item">{app}</li>
          ))}
        </ul>
      </div> */}
      {/* <div className="ai-box__section">
        <h3 className="ai-box__section-title">Expert Capabilities</h3>
        <ul className="ai-box__list">
          {coderCapabilities.map((capability, index) => (
            <li key={index} className="ai-box__list-item">{capability}</li>
          ))}
        </ul>
      </div>
    </div> */}
    <div className="ai-box__cta">
      <a onClick={handleGetStarted} className="ai-box__cta-button">Get Early Access</a>
    </div>
  </div>
);

const NewsCard = ({ image, title, description, link, handleGetStarted }) => (
  <div className="project-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
  </div>
);



export default App;


