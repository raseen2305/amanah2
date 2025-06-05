import React, { useEffect, useRef, useState } from 'react';
import { faqData } from './faqData';
import './chatbot.css';

const Chatbot = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const suggestionRefs = useRef([]);
  const chatRef = useRef(null);
  const chatEndRef = useRef(null);

  // Close chatbot on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        onClose(); // Call the parent's onClose
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Reset chat history on first load
  useEffect(() => {
    localStorage.removeItem('amanahChat');
  }, []);

  // Welcome message
  useEffect(() => {
    if (chat.length === 0) {
      setChat([
        {
          sender: 'bot',
          text: "👋 Hello! Welcome to Amanah Chempharm. I'm here to help you with product inquiries, bulk orders, and more. Ask me anything!",
        },
      ]);
    }
  }, []);

  // Save chat & auto-scroll
  useEffect(() => {
    localStorage.setItem('amanahChat', JSON.stringify(chat));
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  // Scroll to highlighted suggestion
  useEffect(() => {
    if (selectedIndex >= 0 && suggestionRefs.current[selectedIndex]) {
      suggestionRefs.current[selectedIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selectedIndex]);

  // Handle matching suggestions
  useEffect(() => {
    if (!input.trim()) {
      setSuggestions([]);
      setSelectedIndex(-1);
      return;
    }

    const matches = [];
    faqData.forEach((section) => {
      section.questions.forEach((faq) => {
        if (faq.q.toLowerCase().includes(input.toLowerCase())) {
          matches.push(faq.q);
        }
      });
    });

    setSuggestions(matches.slice(0, 5));
    setSelectedIndex(-1);
  }, [input]);

  // Handle user message submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalInput = selectedIndex >= 0 ? suggestions[selectedIndex] : input;
    if (!finalInput.trim()) return;

    const userMessage = { sender: 'user', text: finalInput };
    let botMessage = {
      sender: 'bot',
      text: "❓ Sorry, I couldn't find an answer. Please contact support.",
    };

    faqData.forEach((section) => {
      section.questions.forEach((faq) => {
        if (faq.q.toLowerCase() === finalInput.toLowerCase()) {
          botMessage.text = faq.a;
        }
      });
    });

    setChat([...chat, userMessage, botMessage]);
    setInput('');
    setSuggestions([]);
    setSelectedIndex(-1);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="chatbot-container" ref={chatRef}>
      <div className="chatbot-header">
        <h2>🤖 Amanah Chatbot</h2>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>

      <div className="chat-window">
        {chat.map((msg, idx) => (
          <div key={idx} className={`chat-bubble ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Ask</button>
      </form>

      {suggestions.length > 0 && (
        <div className="suggestions-box">
          {suggestions.map((s, i) => (
            <div
              key={i}
              ref={(el) => (suggestionRefs.current[i] = el)}
              className={`suggestion ${i === selectedIndex ? 'selected' : ''}`}
              onClick={() => {
                setInput(s);
                setSuggestions([]);
                setSelectedIndex(-1);
              }}
            >
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
