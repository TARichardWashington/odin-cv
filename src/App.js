
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('dark');

  function toggleMode() {
    setMode(mode === 'dark' ? '' : 'dark');
  }

  return (
    <div className={mode}>
      <div className="bg-slate-100 dark:bg-slate-900 w-full h-screen flex">
        <button className="m-auto rounded p-2 dark:text-slate-900 dark:bg-slate-100 text-slate-100 bg-slate-900" onClick={toggleMode}>Go {mode === 'dark' ? 'light' : 'dark'}</button>
      </div>
    </div>
  );
}

export default App;
