import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router' 
import './styles.css'

// Execute the function to create your production client router
const router = getRouter()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Pass the created router instance down */}
    <RouterProvider router={router} />
  </StrictMode>,
)
