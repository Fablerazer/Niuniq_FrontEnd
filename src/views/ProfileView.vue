<template>
    <div>
        <NavbarPenjual />
        <div class="flex-row">
            <SideBar />
        </div>
    </div>
</template>

<script>
import NavbarPenjual from "@/components/bar/NavbarPenjual.vue";
import SideBar from "@/components/bar/SideBar.vue";

export default {
    name: "ProfileView",
    components: {
        NavbarPenjual,
        SideBar,
    },
};
</script>

<style scope>
#app {
    font-family: Inter, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>