import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo21 from './assets/nhl934.png';
import CryptoJS from 'crypto-js';
import './support.css';

const CentURL = process.env.CENT_API_URL_KEY;

function Support({ onClose }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const [showInitMessage, setShowInitMessage] = useState(true);

  useEffect(() => {
    const storedId = getConversationId();
    setConversationId(storedId);
  }, []);

  function generateSpecificConversationId() {
    const digits = '0123456789';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  
    let result = '';
    for (let i = 0; i < 7; i++) result += digits[Math.floor(Math.random() * digits.length)];
    for (let i = 0; i < 5; i++) result += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    for (let i = 0; i < 4; i++) result += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    result += '_';
  
    return result;
  }
  
  function encryptConversationId(conversationId, secretKey) {
    return CryptoJS.AES.encrypt(conversationId, secretKey).toString();
  }
  
  function decryptConversationId(encryptedConversationId, secretKey) {
    const bytes = CryptoJS.AES.decrypt(encryptedConversationId, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  
  function getConversationId() {
    const secretKey = '853784728372tf3ufn3yn4fy3fny3hh4f8';
    let encryptedConversationId = localStorage.getItem('8375834rhf32hf642hrf742bgdgtg3gf7hf38jfj28793jf');
    
    if (!encryptedConversationId) {
      const newConversationId = generateSpecificConversationId();
      encryptedConversationId = encryptConversationId(newConversationId, secretKey);
      localStorage.setItem('8375834rhf32hf642hrf742bgdgtg3gf7hf38jfj28793jf', encryptedConversationId);
    }
    
    return decryptConversationId(encryptedConversationId, secretKey);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setShowInitMessage(false);

    try {
      const updatedHistory = [...messageHistory, { role: 'user', content: query }];
      setMessageHistory(updatedHistory);
      // http://localhost:9005/query
      // error1021
      const response = await fetch(CentURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          query,
          conversationId,
          userMessageHistory: updatedHistory.slice(-4).map(msg => msg.content)
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      setMessageHistory(prev => [...prev, { role: 'ai', content: data.aiResponse }]);
      setQuery('');
    } catch (err) {
      setError('An error occurred while processing your query.');
      // console.error('Error:', err);

      if (err.message.includes('unknown error')) {
        localStorage.removeItem('8375834rhf32hf642hrf742bgdgtg3gf7hf38jfj28793jf');
        const newId = getConversationId();
        setConversationId(newId);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='support-container'>
      <div className="support-content">
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="support-header">
          <h2>NextHomeLabs AI</h2>
          <img src={logo21} alt="NextHomeLabs Logo" className="support-logo" />
        </div>
        <div className="support-body">
          {showInitMessage ? (
            <div className='init-message'>
              <h3>Hi there 👋</h3>
              <h4>Questions? Feedback? We're all ears.</h4>
              <p className="description">
                This is a custom LLM for answering questions about NexthomeLabs. Answers are based on the contents of the
                Documentation, Help center. This feature is experimental!
              </p>
            </div>
          ) : (
            <div className="message-content">
              {messageHistory.map((message, index) => (
                <div key={index} className={`message ${message.role}`}>
                  <span>{message.content}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="support-footer">
          <form onSubmit={handleSubmit}>
            <div className="message-input">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask AI support"
                disabled={loading}
                required
              />
              <button type="submit" className="send-button" disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
          {error && <div className="error-message">{error}</div>}
          <p className="powered-by">Powered by CentGPT</p>
          <span className="recaptcha-notice">protected by reCAPTCHA</span>
        </div>
      </div>
    </div>
  );
}

export default Support;