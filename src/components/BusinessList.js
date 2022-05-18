import React from 'react';

export default function BusinessList({ businessList }) {
  return (
    <div className="business-list">
      {businessList.map((business, i) => (
        <div key={business + i}>{business.name}</div>
      ))}
    </div>
  );
}
