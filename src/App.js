import React, { useState, useEffect } from 'react';
import './style.css';
import { getsuggestion, debounce } from './utill';

export default function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState();
  let searchName1 = function (e) {
    setText(e.target.value);
    getsuggestion(e.target.value).then((res) => {
      setList(res);
    });
  };
  console.log(list, 'checking data');
  return (
    <div>
      <div id="searchSuggestion">
        <div>
          <label htmlfor="autoSearch">Search</label>
        </div>
        <input
          id="autoSearch"
          onChange={debounce((e) => searchName1(e))}
          type="text"
        />
        {text &&
          list &&
          list.length > 0 &&
          list.map((name, index) => <div key={index}>{name}</div>)}
        {text && list.length == 0 && <div>no Name found</div>}
      </div>
    </div>
  );
}
