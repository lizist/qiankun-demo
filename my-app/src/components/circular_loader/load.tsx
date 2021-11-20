import React from 'react';

const Load = () => (
  <>
    <circle
      cx="50"
      cy="50"
      r="44"
      strokeWidth="9"
      stroke="#20BEF3"
      strokeDasharray="69.11503837897544 69.11503837897544"
      fill="none"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="0.7142857142857142s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
  </>
);

export default Load;
