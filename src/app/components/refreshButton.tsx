// src/components/RefreshButton.tsx

import React from 'react';

interface RefreshButtonProps {
  onRefresh: () => void;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onRefresh }) => {
  return (
    <button 
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#007bff',  // Blue background color
        color: 'white',               // White text color
        padding: '10px 20px',         // Padding for larger clickable area
        border: 'none',               // Remove default border
        borderRadius: '5px',          // Rounded corners
        fontSize: '16px',             // Bigger font size for better readability
        cursor: 'pointer',           // Change cursor on hover to pointer
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        transition: 'background-color 0.3s, transform 0.3s', // Smooth transition for hover effect
      }} 
      onClick={onRefresh}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} // Darker blue on hover
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'} // Return to original color
    >
      Refresh
    </button>
  );
};

export default RefreshButton;

