import { App } from '@/app'
import '@/global.css'
import React from 'react'
import { createRoot } from 'react-dom/client'

const element = document.getElementById('root') as HTMLDivElement
const root = createRoot(element)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
