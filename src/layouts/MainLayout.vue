<script setup>
    import BubblesBackground from "@/components/BubblesBackground.vue";
</script>
<template>
    <div
        class="pl-8 py-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-max"
    >
        <div class="w-full overflow-hidden">
            <slot />
        </div>
        <BubblesBackground />
    </div>
</template>
