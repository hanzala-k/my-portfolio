<template>
    <div class="social-links" :class="props.class">
        <!-- Link -->
        <a v-for="link in parsedLinks"
           class="btn social-link"
           :class="classList"
           :href="link.href"
           target="_blank">
            <!-- ToolTip -->
            <div v-if="link.label"
                 class="social-link-tooltip text-1">
                {{link.label}}
            </div>

            <!-- Icon -->
            <i :class="link.faIcon"/>
        </a>
    </div>
</template>

<script setup>
import {computed, inject} from "vue"

const props = defineProps({
    items: Array,
    size: String,
    variant: String,
    class: String
})

/** @type {Function} */
const localizeFromStrings = inject("localizeFromStrings")

const parsedLinks = computed(() => {
    return props.items.map(item => ({
        href: item.href || "/",
        label: localizeFromStrings(item.id).replace("locales.", ""),
        faIcon: item.faIcon || "fa-solid fa-eye"
    }))
})

const classList = computed(() => {
    const sizeClass = "social-link-size-" + props.size
    const colorClass = "social-link-color-" + props.variant
    return sizeClass + " " + colorClass
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

@mixin create-btn-social-size($std-font-size, $lg-down-font-size, $md-down-font-size) {
    $font-size: $std-font-size;

    font-size: $font-size;
    width: calc($font-size * 2.4);
    height: calc($font-size * 2.4);

    @include media-breakpoint-down(lg) {
        font-size: $lg-down-font-size;
        width: calc($lg-down-font-size * 2.4);
        height: calc($lg-down-font-size * 2.4);
    }

    @include media-breakpoint-down(md) {
        font-size: $md-down-font-size;
        width: calc($md-down-font-size * 2.4);
        height: calc($md-down-font-size * 2.4);
    }
}

@mixin create-btn-social-color($color, $bg-color, $border-color, $hover-color, $hover-bg-color, $hover-border-color) {
    color: $color;
    background-color: $bg-color;
    border-color: $border-color;

    &:hover {
        color: $hover-color;
        background-color: $hover-bg-color;
        border-color: $hover-border-color;
    }
}

a.social-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;

    margin-left: 0.25rem;
    margin-right: 0.25rem;

    border-radius: 100%;
    border-width: 3px;
    color: $white;

    @include create-btn-social-size(1.2rem, 1.1rem, 1rem);
    @include create-btn-social-color(
        $white, #56a844, #6bc956,
        $white, #343a40, #212529,
    );

    .social-link-tooltip {
        bottom: calc(100% + 10px);
    }
}

a.social-link-size-2 {
    @include create-btn-social-size(1.3rem, 1.2rem, 1.1rem);
    .social-link-tooltip {
        bottom: calc(100% + 12px);
    }
}

a.social-link-size-3 {
    @include create-btn-social-size(1.4rem, 1.3rem, 1.2rem);
    .social-link-tooltip {
        bottom: calc(100% + 14px);
    }
}

a.social-link-size-4 {
    @include create-btn-social-size(1.8rem, 1.7rem, 1.6rem);
    .social-link-tooltip {
        bottom: calc(100% + 16px);
    }
}

a.social-link-color-dark {
    @include create-btn-social-color(
        $nav-contrast, var(--nav-background-light-10), var(--nav-background-light-5),
        $white, $primary, #3e8e2c
    )
}

a.social-link-color-secondary {
    @include create-btn-social-color(
        $white, $dark, #343a40,
        $white, $primary, #3e8e2c
    )
}

a.social-link-color-black {
    @include create-btn-social-color(
        $white, #1a1a1a, #262626,
        $white, $primary, #3e8e2c
    )
}

a.social-link-color-light {
    @include create-btn-social-color(
        $white, #2c3034, #495057,
        $white, #56a844, #6bc956,
    )
}

div.social-link-tooltip {
    position: absolute;
    text-transform: capitalize;
    background-color: $primary;
    color: $white;
    padding: 0.3rem 0.9rem;
    border-radius: 10px;
    display: none;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    pointer-events: none;

    &::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: $primary transparent transparent transparent;
    }
}

a.social-link:hover {
    .social-link-tooltip {
        @include media-breakpoint-up(md) {
            display: block!important;
        }
    }
}
</style>