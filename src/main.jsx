import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { Toaster } from 'react-hot-toast'
import Modal from 'react-modal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster position="top-center" reverseOrder={false}
/>
  </StrictMode>,
)
Modal.setAppElement('#root');





