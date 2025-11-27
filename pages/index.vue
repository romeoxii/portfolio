<script setup>
// import NavBar from "~/components/NavBar.vue";
import ArrowIcon from "~/public/icons/ArrowRightIcon.vue";
import ProjectsSvg from "~/public/icons/ProjectsSvg.vue";
import GithubIcon from "~/public/icons/GithubIcon.vue";
import EmailIcon from "~/public/icons/EmailIcon.vue";
import XIcon from "~/public/icons/xIcon.vue";
import { useTheme } from "~/Composables/useTheme";

const { theme } = useTheme();
</script>

<template>
    <div class="min-h-screen w-full font-Poppins">
        <div
            class="flex items-center justify-center h-full w-full p-3"
            :class="theme === 'dark' ? 'bg-black/90' : ''"
        >
            <div
                class="flex flex-col justify-center items-center space-y-5 p-5 md:w-[40%] w-full mt-16"
            >
                <div class="flex flex-col text-center">
                    <div
                        class="p-1"
                        :class="theme === dark ? 'text-white' : 'text-black/70'"
                    >
                        <h1 class="text-7xl font-extrabold">Romeo</h1>
                    </div>
                    <p class="text-sm">(romeo.xii).</p>
                </div>
                <div
                    class="p-1 rounded-full border border-black/10 bg-[#4acfff]/10 text-center text-black/80 w-48 mb-8"
                >
                    <p>Web Developer</p>
                </div>
                <div class="flex items-center justify-center space-x-10 p-5">
                    <div
                        class="-rotate-6 h-68 md:w-54 w-40 p-3 border border-black/20 shadow-sm rounded-2xl"
                    >
                        <div
                            class="h-full w-full py-2 flex flex-col items-center justify-between"
                        >
                            <div
                                class="w-34 h-34 rounded-full bg-blue-50 p-2 flex items-center justify-center"
                            >
                                <img
                                    src="../assets/Images/pfp.JPG"
                                    alt="#"
                                    class="w-full h-full border rounded-full"
                                />
                            </div>
                            <RouterLink to="/about" class="w-full"
                                ><button
                                    class="border-t border-blue-200/50 bg-linear-to-r from-blue-400 to-blue-600 shadow-inner rounded-full size-full space gap-2 p-3 text-white/80 flex items-center justify-evenly"
                                >
                                    About me<ArrowIcon /></button
                            ></RouterLink>
                        </div>
                    </div>
                    <div
                        class="rotate-6 h-68 md:w-54 w-40 p-3 border border-black/20 shadow-sm rounded-2xl"
                    >
                        <div
                            class="h-full w-full py-2 flex flex-col items-center justify-between"
                        >
                            <div
                                class="w-34 h-34 rounded-full bg-blue-50 flex items-center justify-center"
                            >
                                <ProjectsSvg class="p-2" />
                            </div>
                            <RouterLink to="/projects" class="w-full"
                                ><button
                                    class="border-t border-blue-200/50 bg-linear-to-r from-blue-400 to-blue-600 shadow-inner rounded-full size-full space gap-2 p-3 text-white/80 flex items-center justify-evenly"
                                >
                                    Projects<ArrowIcon /></button
                            ></RouterLink>
                        </div>
                    </div>
                </div>
                <div
                    class="p-3 w-full mt-10 flex items-center justify-center flex-col"
                >
                    <ul
                        class="flex items-center justify-evenly md:w-[50%] w-[80%]"
                    >
                        <li
                            class="md:p-3 p-2 rounded-full border border-gray-300"
                        >
                            <a
                                href="https://github.com/romeoxii"
                                target="_blank"
                                ><GithubIcon
                            /></a>
                        </li>
                        <li
                            class="md:p-3 p-2 rounded-full border border-gray-300"
                        >
                            <a href="https://x.com/_404xii" target="_blank"
                                ><XIcon
                            /></a>
                        </li>
                        <li
                            class="md:p-3 p-2 rounded-full border border-gray-300"
                        >
                            <a
                                href="mailto:alameleromeo1@gmail.com"
                                target="_blank"
                                ><EmailIcon
                            /></a>
                        </li>
                    </ul>
                    <div class="mt-6 text-black/60">
                        &copy; 2025 Alamele Romeo.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
