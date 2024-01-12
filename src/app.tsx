import { Input } from '@/components/ui/input'
import { stringToHexColor } from '@/utils/string-to-hex-color'
import { memo, useCallback, useState } from 'react'

type AppProps = unknown
export const App: React.FC<AppProps> = memo(() => {
    const [color, setColor] = useState<string>('#000')

    const onBackgroundClick = useCallback(() => {
        navigator.clipboard.writeText(color)
    }, [color])

    const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const hexColor = stringToHexColor(e.target.value)
        setColor(hexColor)
    }, [])

    return (
        <div
            onClick={onBackgroundClick}
            className="w-full h-full flex justify-center items-center transition-all duration-300"
            style={{
                backgroundColor: color,
            }}
        >
            <Input onChange={onInputChange} placeholder="Write a color here" className="w-96" />
        </div>
    )
})
App.displayName = 'App'
