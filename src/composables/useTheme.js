import { ref, onMounted } from 'vue'

const THEME_KEY = 'user-theme'
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

const currentTheme = ref(DARK_THEME)

export function useTheme() {
    const initTheme = () => {
        const cachedTheme = localStorage.getItem(THEME_KEY)
        if (cachedTheme) {
            setTheme(cachedTheme)
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme(DARK_THEME)
        } else {
            setTheme(DARK_THEME)
        }
    }

    const setTheme = (theme) => {
        currentTheme.value = theme
        localStorage.setItem(THEME_KEY, theme)
        document.documentElement.setAttribute('data-theme', theme)
    }

    const toggleTheme = () => {
        if (currentTheme.value === LIGHT_THEME) {
            setTheme(DARK_THEME)
        } else {
            setTheme(LIGHT_THEME)
        }
    }

    const isDark = () => {
        return currentTheme.value === DARK_THEME
    }

    onMounted(() => {
        initTheme()
    })

    return {
        currentTheme,
        toggleTheme,
        isDark
    }
}
