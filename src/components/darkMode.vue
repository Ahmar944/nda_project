<template>
<div>
    <div class="dark-icon">
        <input @change="toggleTheme" id="checkbox" type="checkbox" class="switch-checkbox" />
        <label for="checkbox" class="switch-label pb-2">
            <span>☀️</span>
            <span>🌙</span>
            <div class="switch-toggle" :class="{
              'switch-toggle-checked': userTheme === 'dark-theme',
            }"></div>
        </label>
    </div>
</div>
</template>

  
<script>
export default {
    name: "darkMode",

    mounted() {
        const initUserTheme = this.getMediaPreference();
        this.setTheme(initUserTheme);
    },

    data() {
        return {
            userTheme: "light-theme",
        };
    },

    methods: {
        setTheme(theme) {
            localStorage.setItem("user-theme", theme);
            this.userTheme = theme;
            document.documentElement.className = theme;
        },

        toggleTheme() {
            const activeTheme = localStorage.getItem("user-theme");
            if (activeTheme === "light-theme") {
                this.setTheme("dark-theme");
            } else {
                this.setTheme("light-theme");
            }
        },

        getMediaPreference() {
            const hasDarkPreference = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            if (hasDarkPreference) {
                return "light-theme";
            } else {
                return "dark-theme";
            }
        },
    },
};
</script>

  
<style>
.dark-icon {
    float: right;
    margin-right: 1%;
}

/* Define styles for the default root window element  */
:root {
    --background-color-primary: #ebebeb;
    --background-color-secondary: #fafafa;
    --accent-color: #cacaca;
    --text-primary-color: #222;
    --element-size: 4rem;
}

/* / Define styles for the root window with dark - mode preference / */
:root.dark-theme {
    --background-color-primary: #757474;
    --background-color-secondary: #2d2d30;
    --accent-color: #3f3f3f;
    --text-primary-color: #ddd;
}

.dark-theme .sign {
    background: #3f3f3f;
}

.dark-theme .hello {
    color: #cacaca !important;
}

.dark-theme .signp {
    color: #cacaca !important;
}

.dark-theme .input-text {
    color: #cacaca !important;
}

.dark-theme .input {
    background: #3f3f3f;
    border: 2px solid #cacaca;
    color: #cacaca !important;
}

.dark-theme .signup-form form {
    background: #3f3f3f;
}

.dark-theme .input .input-text {
    background: #3f3f3f;
}

.dark-theme .link {
    color: #cacaca !important;
}

.dark-theme .input-textp {
    background: #3f3f3f;
}

.dark-theme .links {
    color: #cacaca !important;
}

.dark-theme .g-recaptcha {
    theme: "dark"
}

.container-center {
    background-color: var(--background-color-primary);
    height: 100vh;
    width: 100vw;
}

.switch-checkbox {
    display: none;
}

:root {
    --background-color-primary: #ebebeb;
    --background-color-secondary: #fafafa;
    --accent-color: #cacaca;
    --text-primary-color: #3f3f3f;
    --element-size: 4rem;
    /* / <- this is the base size of our element / */
}

.switch-label {
    /* / for width, use the standard element-size / */
    width: var(--element-size);

    /* / for other dimensions, calculate values based on it / */
    border-radius: var(--element-size);
    border: calc(var(--element-size) * 0.025) solid var(--text-primary-color);
    padding: calc(var(--element-size) * 0.1);
    font-size: calc(var(--element-size) * 0.230);
    height: calc(var(--element-size) * 0.35);

    align-items: center;
    background: var(--accent-color);
    cursor: pointer;
    display: flex;
    position: relative;
    transition: background 0.5s ease;
    justify-content: space-between;
    z-index: 1;
}

.switch-toggle {
    position: absolute;
    background-color: var(--background-color-primary);
    border-radius: 50%;
    top: calc(var(--element-size) * -0.006);
    left: calc(var(--element-size) * 0.07);
    height: calc(var(--element-size) * 0.305);
    width: calc(var(--element-size) * 0.328);
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
    transform: translateX(calc(var(--element-size) * 0.48)) !important;
}
</style>
