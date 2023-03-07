import * as React from 'react';
import './style.css';
import Counter from './component/counter';
import ClassbaseCounter from './component/classbaseCounter';

export default function App() {
  return (
    <div>
      <Counter />
      {/* <ClassbaseCounter /> */}
    </div>
  );
}
