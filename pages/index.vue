<template>
    <div class="bg-white h-lvh max-h-lvh overflow-hidden">
        <nav
            class="w-screen max-w-screen flex justify-between items-center px-4 py-3 bg-violet-100 border border-b-violet-300"
        >
            <div class="flex items-center gap-5">
                <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
                <div class="flex items-center gap-2">
                    <h1 class="text-2xl font-bold">🍲 Logo</h1>
                    <UIcon
                        name="i-heroicons-lock-open"
                        class="h-6 w-6 text-violet-800 cursor-pointer"
                    />
                </div>
            </div>
            <div class="flex items-center gap-3">
                <UButton
                    icon="i-heroicons-chart-bar-square"
                    size="xl"
                    color="black"
                    variant="outline"
                    label="Analytics"
                    :trailing="false"
                />
                <UButton
                    icon="i-heroicons-receipt-percent"
                    size="xl"
                    color="black"
                    variant="outline"
                    label="Orders"
                    :trailing="false"
                />
                <UButton
                    icon="i-heroicons-plus"
                    size="xl"
                    color="primary"
                    variant="solid"
                    label="Add item"
                    :trailing="false"
                />
            </div>
        </nav>
        <main class="flex h-full">
            <section class="w-[300px] h-full border border-r-violet-300">
                <img :src="sampleImage" alt="sample" />
            </section>
            <section></section>
        </main>
    </div>
</template>

<script setup lang="ts">
import sampleImage from "@/public/images/chicken.jpg";
</script>

<style scoped></style>
