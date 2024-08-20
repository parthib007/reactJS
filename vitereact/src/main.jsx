import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const customElement = react.createElement(
//     'a',
//     {href: 'https://google.com', target: '_blank'},
//     'zara zara click me click me'
// )

createRoot(document.getElementById('root')).render(

    App()

)
