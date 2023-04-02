<script setup>
    defineProps({
        username: String,
        link: String,
    });
</script>

<template>
    <a
        :href="`${ link }`"
        class="text-white text-xs font-bold leading-3 relative block mb-4 px-2 py-2.5 cursor-pointer select-none transition text-center align-middle rounded bg-sky-500 hover:bg-sky-700"
        style="display: inline-block"
        target="_blank"
    >
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
        Follow @{{ username }}
    </a>
</template>
