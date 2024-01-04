import { useState } from 'react';

import reactLogo from './assets/react.svg';

import './App.css';

const fn = (n: number) => {
  if (n) {
    return n;
  }

  return n * 2;
};

fn(5);

// TODO-M: заюзать структуру проекта как на работе + eslint-boundaries для блокирования импортов по слоям
// npm i -D eslint-plugin-boundaries
// TODO-M: настроить алиасы
// TODO: npm i vite-plugin-svgr
// TODO: postcss (https://github.com/postcss/autoprefixer)
// TODO: добавить расширение, которое показывает, кто (в гите) писал код

// TODO: maybe add tailwind css (include postcss) + preflight: false
// TODO: заюзать сервис для проверки циклических зависимостей
// TODO: заюзать knip для поиска ненужного кода
// TODO: в будущем подумать о доступности (eslint плагин: eslint-plugin-jsx-a11y)
export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a
          href="https://react.dev"
          target="_blank"
          style={{ color: 'red', background: 'red', margin: 0, padding: 0, marginLeft: 0 }}
        >
          Hello
        </a>
        <img src={reactLogo} />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}
