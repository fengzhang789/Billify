import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import { useState } from 'react';
import "../assets/stylesheets/highlightedwords.css";

const StyledTooltipContent = styled('div')({
    // Add your custom styles here
    backgroundColor: '#fff',
    color: '#333',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px', // Customize according to your needs
  });
  
  const HoverTooltipTest = () => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
  
    const handleMouseEnter = () => {
      setTooltipVisible(true);
    };
  
    const handleMouseLeave = () => {
      setTooltipVisible(false);
    };
  
    return (
      <Tooltip
        title={
          <StyledTooltipContent>
            This is a suggestion from Grammarly.
          </StyledTooltipContent>
        }
        open={isTooltipVisible}
        onClose={handleMouseLeave}
      >
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p class="submissionresults underline_blue ">hello guys my name is allan li</p>
        </span>
      </Tooltip>
    );
  };
  
  export default HoverTooltipTest;
  
  