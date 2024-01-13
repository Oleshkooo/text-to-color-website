import { Input } from '@/components/ui/input'
import { useColorStore } from '@/stores/color.store'
import { stringToHexColor } from '@/utils/string-to-hex-color'
import { memo, useCallback } from 'react'
import { toast } from 'sonner'

type MainPageProps = unknown
export const MainPage: React.FC<MainPageProps> = memo(() => {
    const text = useColorStore(state => state.text)
    const color = useColorStore(state => state.color)
    const setText = useColorStore(state => state.setText)
    const setColor = useColorStore(state => state.setColor)

    const onBackgroundClick = useCallback(async () => {
        try {
            const prevClipboardText = await navigator.clipboard.readText()
            await navigator.clipboard.writeText(color)

            toast.success('Copied to clipboard!', {
                description: `Color: ${color}`,
                action: {
                    label: 'Undo',
                    onClick: async () => {
                        await navigator.clipboard.writeText(prevClipboardText)
                    },
                },
            })
        } catch (error) {
            toast.error('Failed to copy to clipboard...')
        }
    }, [color])

    const onInputClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation()
    }, [])

    const onInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            e.stopPropagation()
            const hexColor = stringToHexColor(e.target.value)
            setColor(hexColor)
            setText(e.target.value)
        },
        [setColor, setText],
    )

    return (
        <div
            onClick={onBackgroundClick}
            className="w-full h-full flex justify-center items-center transition-all duration-300 cursor-pointer"
            style={{
                backgroundColor: color,
            }}
        >
            <div className="container flex justify-center items-center">
                <Input
                    value={text}
                    onChange={onInputChange}
                    onClick={onInputClick}
                    placeholder="Write some text here"
                    className="w-full max-w-96"
                />
            </div>
        </div>
    )
})
MainPage.displayName = 'MainPage'
