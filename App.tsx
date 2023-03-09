import * as React from 'react';
import './style.css';
import Counter from './component/counter';
import ClassbaseCounter from './component/classbaseCounter';
import headerMenu from './component/headerMenu';

export default function App() {
  return (
    <div>
      <Counter />
      <headerMenu />
      {/* <ClassbaseCounter /> */}
    </div>
  );
}
