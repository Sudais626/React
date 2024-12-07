import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <h3>Drive</h3>
//   )
// }

// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com', target: '_blank'},
//   'click me to visit google'
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)


