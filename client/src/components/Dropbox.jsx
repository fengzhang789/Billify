import React, {useState} from 'react';
import '../assets/stylesheets/soapanalysis.css';

const Dropbox = ({ heading, text }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
        <div className={`dropbox ${isExpanded ? 'expanded' : ''}`}>
            <button onClick={toggleExpansion}>{heading}</button>
            <div className="content">
                {isExpanded ? text : ''}
            </div>
        </div>
    );
  };
  
  export default Dropbox;