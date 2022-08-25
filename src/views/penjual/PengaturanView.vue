<template>
  <div>
    <CNavbarPenjual />
    <div style="background-color: #f9f9f9">
      <div class="container">
        <CPengaturan :user="users" />
      </div>
    </div>
  </div>
</template>

<script>
import CNavbarPenjual from "@/components/bar/NavbarPenjual.vue";
import CPengaturan from "@/components/penjual/Pengaturan.vue";
import axios from "axios";

export default {
  name: "PengaturanView",
  components: {
    CNavbarPenjual,
    CPengaturan,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    setUsers(data) {
      this.users = data;
    },
  },
  mounted() {
    let userInfo = localStorage.getItem("user-info");
    if (!userInfo) {
      this.$router.push({ name: "LoginView" });
    }

    let userStore = localStorage.getItem("hasCreatedStore");
    if (userStore == false) {
      this.$router.push({ name: "InputTokoView" });
    }

    axios
      .get("https://niuniq.herokuapp.com/api/web/niuniq/auth/me")
      .then((response) => {
        this.setUsers(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
