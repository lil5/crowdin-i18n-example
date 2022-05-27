import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import logo from './logo.svg'
import './App.css'
import { changeLanguage } from 'i18next';
import { L_EN, L_NL } from './constants';

function App() {
  const { t, i18n } = useTranslation()

  const [currentLang, setCurrentLang] = useState(i18n.language)
  useEffect(()=>{
    i18n.changeLanguage(currentLang)
  }, [currentLang])

  useEffect(()=> {
    document.title = t('title')
  }, [i18n.language])

  const toggleLang = ()=>{
    setCurrentLang((count) => count === L_EN? L_NL: L_EN)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('hello-vite-react')}</p>
        <p>
          <button type="button" onClick={toggleLang}>
            {t('count-is')}{currentLang}
          </button>
        </p>
        <p dangerouslySetInnerHTML={{ __html: t('edit-app-tsx-and-save-to-test-hmr-updates')}}></p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('learn-react')}
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('vite-docs')}
          </a>
          <a onClick={toggleLang}>{currentLang}</a>
        </p>
      </header>
    </div>
  )
}

export default App
