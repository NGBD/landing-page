import React from 'react';

function MenuBtn(props) {
  return (
    <div className="mt-[30px] ml-[28px]" >
      <button>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 3 16.5 L 17 2.5">
          </path>
          <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 2 9.423 L 20 9.423" opacity="0">
          </path>
          <path fill="transparent" stroke-width="3" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" d="M 3 2.5 L 17 16.346">
          </path>
        </svg>
      </button>
    </div>
  )
}

export default MenuBtn;
