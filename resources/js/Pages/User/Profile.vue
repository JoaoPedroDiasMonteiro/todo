<template>
    <authenticated-main-container>
    <div class="mx-auto">
        <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Edit Profile</h1>
                <p class="text-gray-400 dark:text-gray-400">Fill up the form below to update your profile.</p>
            </div>
            <div class="m-7">
                <form @submit.prevent="handleForm">
                    <div class="mb-6">
                        <label for="name" :class="{'text-red-500': errors.name}" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                        <span class="inline-block text-red-500">{{errors.name}}</span>
                        <input type="text" :class="{'border border-red-500': errors.name}" v-model="data.name" id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>

                    <div class="mb-6">
                        <label for="email" :class="{'text-red-500': errors.email}" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <span class="inline-block text-red-500">{{errors.email}}</span>
                        <input v-model="data.email" :class="{'border border-red-500': errors.email}" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>

                    <div class="mb-6">
                        <label for="password" :class="{'text-red-500': errors.password}" class="text-sm text-gray-600 dark:text-gray-400">Change Password</label>
                        <span class="inline-block text-red-500">{{errors.password}}</span>
                        <input type="password" :class="{'border border-red-500': errors.password}" v-model="data.password" id="password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>

                    <div class="mb-6">
                        <label for="password_confirmation" :class="{'text-red-500': errors.password}" class="text-sm text-gray-600 dark:text-gray-400">Change Password Confirmation</label>
                        <input type="password" :class="{'border border-red-500': errors.password}" v-model="data.password_confirmation" name="phone" id="password_confirmation" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    
                    <div class="mb-6">
                        <button type="submit" class="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none">Save Changes</button>
                    </div>
                    <p class="text-base text-center text-gray-400" id="result">
                    </p>
                </form>
            </div>
        </div>
    </div>
    </authenticated-main-container>
</template>

<script>
import AuthenticatedVue from "@/Layouts/Authenticated.vue";
import AuthenticatedMainContainer from "@/Components/AuthenticatedMainContainer.vue";
export default {
    components: { AuthenticatedMainContainer },
    layout: [AuthenticatedVue],
    props: {
        user: Object,
        errors: Object
    },
    data() {
        return {
            data: {
                name: this.user.name,
                email: this.user.email
            }
        }
    },
    methods: {
        handleForm() {
            this.$inertia.put(route('profile.update'), this.data)
        }
    },
};
</script>

<style scoped>
</style>
