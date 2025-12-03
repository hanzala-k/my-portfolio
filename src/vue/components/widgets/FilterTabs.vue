<template>
    <div class="filter-tabs">
        <!-- Bootstrap's Button Group -->
        <div class="btn-group"
             role="group">

            <!-- Filter Items -->
            <button v-for="category in props.categories"
                    type="button"
                    class="btn btn-light text-2"
                    :class="{active:_isItemSelected(category)}"
                    @click="_selectItem(category)">
                <!-- Item Label -->
                <span>{{category.label}}</span>
                <span class="ms-1 d-none d-md-inline">({{ category.count }})</span>
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    categories: Array,
    selectedCategoryId: String
})

const emit = defineEmits(['select'])

const _isItemSelected = (category) => {
    return props.selectedCategoryId === category.id
}

const _selectItem = (category) => {
    emit('select', category.id)
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.btn-group {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    width: 100%;
    max-width: 1000px;
    @include media-breakpoint-down(xxl) {
        max-width: 800px;
    }
    @include media-breakpoint-down(md) {
        gap: 5px;
    }
}

button.btn {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding: 0.3rem 1.5rem),
        lg: (padding: 0.3rem 1.2rem),
        md: (padding: 0.3rem 0.8rem),
        sm: (padding: 0.3rem 0.6rem)
    ));

    border-radius: 30px;
    border-width: 2px;
    flex: 0 1 auto;
    white-space: nowrap;
    font-size: 0.95rem;
    outline: none !important;
    box-shadow: none !important;
    border-color: $default-section-background!important;
    background-color: var(--section-background-dark-2);
    color: $light-7;
    transition: 0.1s background-color ease-out;

    @include media-breakpoint-down(md) {
        border-width: 1px;
        font-size: 0.85rem;
    }
    
    @include media-breakpoint-down(sm) {
        font-size: 0.8rem;
        padding: 0.25rem 0.5rem;
    }

    &:hover {
        background-color: var(--section-background-dark-5);
        color: black;
    }

    &:focus, &:active {
        background-color: var(--section-background-dark-7);
        color: black;
    }

    &.active {
        background-color: $primary;
        color: $light!important;
        opacity: 1;
    }
}
</style>