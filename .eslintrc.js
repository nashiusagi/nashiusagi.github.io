module.exports = {
    env: {
        browser: true,
        es2021: true,
        "vue/setup-compiler-macros": true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "eslint-config-prettier",
    ],
    overrides: [],
    parserOptions: {
        //ecmaVersion: "latest",
        es6: true,
        sourceType: "module",
    },
    plugins: ["vue"],
    rules: {},

    globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
        defineExpose: "readonly",
        withDefaults: "readonly",
    },
};
