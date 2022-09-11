<template>
  <nav class="navbar navbar-expand-lg changecolor">
    <div class="container-fluid">
      <router-link
        class="navbar-brand"
        :to="'/profileview/' + this.$route.params.id"
        style="z-index: 10"
        ><img class="img-table-1" src="@/assets/img/logo-niuniq.svg"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="'/tentangviewpenjual/' + this.$route.params.id"
            >Tentang</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="'/notificationview/' + this.$route.params.id"
            ><b-icon-bell
          /></router-link>
        </li>
        <div>
          <b-dropdown
            id="dropdown-right"
            right
            text="Right align"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <b-icon-person-circle style="color: #4e944f" />
            </template>
            <b-dropdown-item :href="'/profileview/' + this.$route.params.id"
              ><b-icon-person-fill /> Profil Saya</b-dropdown-item
            >
            <b-dropdown-item :href="'/pengaturanview/' + this.$route.params.id"
              ><b-icon-gear-fill /> Pengaturan</b-dropdown-item
            >
            <hr />
            <b-dropdown-item v-on:click="logout" href="#"
              ><b-icon-box-arrow-right /> Keluar</b-dropdown-item
            >
          </b-dropdown>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CNavbarPenjual",
  methods: {
    logout() {
      alert("Anda telah ter-logout");
      localStorage.clear();
      this.$router.push({ name: "LoginView" });
    },
  },
};
</script>

<style></style>
