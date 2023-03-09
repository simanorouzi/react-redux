import * as React from 'react';
import './style.css';
import Counter from './component/counter';
import ClassbaseCounter from './component/classbaseCounter';
import Menu from './component/menu';

export default function App() {
  return (
    <div>
      <Counter />
      <Menu />
      {/* <ClassbaseCounter /> */}
    </div>
  );
}
