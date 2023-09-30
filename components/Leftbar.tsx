import React from 'react';

export default function Leftbar() {
  const display = 'hidden';
  return (
    <div>
      <div
        className={`h-screen w-screen bg-black opacity-50 absolute ${display}  `}
      ></div>
      <aside className="aside ">
        <div className="pt-20 h-screen w-52 text-text"> Links</div>
      </aside>
    </div>
  );
}
