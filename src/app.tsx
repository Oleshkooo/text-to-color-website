import { Toaster } from '@/components/ui/sonner'
import { MainPage } from '@/pages/main-page'
import { memo } from 'react'

type AppProps = unknown
export const App: React.FC<AppProps> = memo(() => {
    return (
        <>
            <MainPage />
            <Toaster />
        </>
    )
})
App.displayName = 'App'
