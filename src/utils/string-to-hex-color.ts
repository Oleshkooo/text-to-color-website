import { stringToHash } from '@/utils/string-to-hash'

export const stringToHexColor = (text: string): string => {
    const hash = stringToHash(text)
    const color = `#${(hash >>> 0).toString(16).slice(0, 6).padStart(6, '0')}`
    return color
}
