<template>
    <div class="bg-white h-lvh max-h-lvh overflow-hidden">
        <nav
            class="w-screen max-w-screen flex justify-between items-center px-4 py-3 bg-violet-100 border border-b-violet-300"
        >
            <div class="flex items-center gap-5">
                <UDropdown
                    :items="items"
                    :popper="{ placement: 'bottom-start' }"
                >
                    <button class="flex items-center">
                        <UIcon
                            name="i-heroicons-bars-3"
                            class="w-6 h-6 text-violet-800"
                        />
                    </button>
                </UDropdown>
                <div class="flex items-center gap-2">
                    <h1 class="text-2xl font-bold">🍲 Logo</h1>
                    <button class="flex items-center">
                        <UIcon
                            name="i-heroicons-lock-open"
                            class="h-6 w-6 text-violet-800"
                        />
                    </button>
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

const items = [
    [
        {
            label: "Profile",
            avatar: {
                src: "https://avatars.githubusercontent.com/u/739984?v=4",
            },
        },
    ],
    [
        {
            label: "Edit",
            icon: "i-heroicons-pencil-square-20-solid",
            shortcuts: ["E"],
            click: () => {
                console.log("Edit");
            },
        },
        {
            label: "Duplicate",
            icon: "i-heroicons-document-duplicate-20-solid",
            shortcuts: ["D"],
            disabled: true,
        },
    ],
    [
        {
            label: "Archive",
            icon: "i-heroicons-archive-box-20-solid",
        },
        {
            label: "Move",
            icon: "i-heroicons-arrow-right-circle-20-solid",
        },
    ],
    [
        {
            label: "Delete",
            icon: "i-heroicons-trash-20-solid",
            shortcuts: ["⌘", "D"],
        },
    ],
];
</script>

<style scoped></style>
