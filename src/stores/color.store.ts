import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface ColorStore {
    text: string
    setText: (text: ColorStore['text']) => void
    color: string
    setColor: (newColor: ColorStore['color']) => void
}

export const useColorStore = create<
    ColorStore,
    [['zustand/devtools', ColorStore], ['zustand/persist', ColorStore], ['zustand/immer', ColorStore]]
>(
    devtools(
        persist(
            immer(set => ({
                text: '',
                setText: text => set(state => void (state.text = text)),
                color: '#000',
                setColor: newColor => set(state => void (state.color = newColor)),
            })),
            {
                name: 'color',
            },
        ),
    ),
)
