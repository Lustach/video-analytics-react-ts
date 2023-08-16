import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@/App.css'
import BasicCard from './components/ui/BasicCard'
import EyeIcon from "@/assets/icons/eye.svg"
import EyeEarth from "@/assets/icons/earth.svg"
import EyeSecurity from "@/assets/icons/security.svg"
import EyeSubject from "@/assets/icons/subject.svg"
import Dropdown from './components/ui/Dropdown/Dropdown'
function App() {
  const [count, setCount] = useState(0)
  const options = [
    { key: 0, value: 'Lada', link: 'https://www.lada.ru/en', },
    { key: 1, value: 'Bmw', link: 'https://www.bmw.com/en/index.html' },
    { key: 2, value: 'Nissan', link: 'https://www.lada.ru/en' },
    { key: 3, value: 'Mitshubisi', link: 'https://www.lada.ru/en' },
    { key: 4, value: 'Scoda', link: 'https://www.lada.ru/en' },
    { key: 5, value: 'UAZ', link: 'https://www.lada.ru/en' },
    { key: 6, value: 'Dnepr', link: 'https://www.lada.ru/en' },
    { key: 7, value: 'Volga', link: 'https://www.lada.ru/en' },
    { key: 8, value: 'Zaporozie', link: 'https://www.lada.ru/en' },
    { key: 9, value: 'Ford', link: 'https://www.lada.ru/en' },
    { key: 10, value: 'Buggatti', link: 'https://www.lada.ru/en' },
    { key: 11, value: 'Donbass', link: 'https://www.lada.ru/en' },
    { key: 12, value: 'test', link: '#test', },
  ]
  return (
    <>
      <Dropdown options={options} optionKey='key' optionValue='value' />
      <div id='test'></div>
      
      <div className="col_container">
        <BasicCard title="Субъекты" icon={EyeIcon} />
        <BasicCard title="Поиск субъектов" icon={EyeEarth} />
      </div>
      <div className="col_container">
        <BasicCard title="Источники данных" disabled icon={EyeSecurity} />
        <BasicCard title="Администрирование" disabled icon={EyeSubject} />
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
