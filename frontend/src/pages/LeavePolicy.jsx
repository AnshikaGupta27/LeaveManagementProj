import React from 'react';

const LeavePolicy = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Leave Policy</h2>
      <iframe
        src="/Leave-Policy.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default LeavePolicy;
