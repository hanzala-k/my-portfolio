<template>
    <button class="theme-toggle-btn" 
            @click="toggleTheme" 
            :title="isDark() ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
            aria-label="Toggle Theme">
        <i v-if="isDark()" class="fa-solid fa-sun"></i>
        <i v-else class="fa-solid fa-moon"></i>
    </button>
</template>

<script setup>
import { useTheme } from "/src/composables/useTheme.js"

const { toggleTheme, isDark } = useTheme()
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.theme-toggle-btn {
    background: transparent;
    border: none;
    color: $nav-contrast;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.3s ease, color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    &:hover {
        background-color: rgba($nav-contrast, 0.1);
        color: $primary;
    }
    
    &:focus {
        outline: none;
    }
}
</style>
