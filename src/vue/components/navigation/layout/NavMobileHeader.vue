<template>
    <nav class="nav-mobile-header"
         id="nav-mobile-header">
        <NavProfileCard :avatar="profile.profilePictureUrl"
                        :name="localize(profile.locales, 'name', true) || profile.name"
                        :role="localize(profile.locales, 'role')"
                        :shrink="false"
                        :include-toggle-button="false"
                        @toggle="null"/>

        <div class="mobile-tools" :class="utils.isChromeOS() ? `mobile-tools-left` : `mobile-tools-right`">
            <ThemeToggle />
            <LanguagePicker :shrink="true"/>
        </div>
    </nav>
</template>

<script setup>
import {inject} from "vue"
import NavProfileCard from "/src/vue/components/navigation/layout/NavProfileCard.vue"
import LanguagePicker from "/src/vue/components/widgets/LanguagePicker.vue"
import ThemeToggle from "/src/vue/components/navigation/ThemeToggle.vue"
import {useUtils} from "/src/composables/utils.js"

const utils = useUtils()

/** @type {{value: Profile}} */
const profile = inject("profile")

/** @type {Function} */
const localize = inject("localize")
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

nav.nav-mobile-header {
    background-color: $nav-background;
    @include media-breakpoint-up($navigation-sidebar-breakpoint) {
        display: none;
    }

    position: relative;
}

div.mobile-tools {
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    align-items: center;
    gap: 5px;

    &-left {
        left: 5px;
        right: auto;
    }
}
</style>