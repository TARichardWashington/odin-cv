
import { useState } from 'react';
import Form from './Form.js'
import Cv from './Cv.js'


function App() {
  const [mode, setMode] = useState('dark');
  const [name, setName] = useState('name');

  function toggleMode() {
    setMode(mode === 'dark' ? '' : 'dark');
  }

  function setCVName(e) {
    setName(e.target.value);
  }

  return (
    <div className={'flex flex-col ' + mode}>
      <div className="p-2 bg-slate-700">
        <button className="rounded p-2 dark:text-slate-900 dark:bg-slate-100 text-slate-100 bg-slate-900" onClick={toggleMode}>Go {mode === 'dark' ? 'light' : 'dark'}</button>
      </div>
      <div className="p-2 bg-slate-100 flex-1 flex justify-center">
        <div className="p-5 bg-slate-900 rounded text-slate-100">
          <h1 className="text-xl">CV</h1>
          <form>
            <label className="pr-5">Name</label>
            <input type="text" className="text-slate-900 rounded p-1" onChange={setCVName} />
          </form>
        </div>
      </div>
      <div className="p-2 flex justify-center">
        <div className="bg-late-600">
          {name}
        </div>
      </div>
    </div>
  );
}

export default App;
