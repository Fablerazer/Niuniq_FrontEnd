<template>
  <nav class="navbar navbar-expand-lg changecolor">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/homeview" style="z-index: 10"
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
        <li class="nav-item" style="align-self: center">
          <router-link
            class="nav-link"
            style="align-self: center"
            to="/homeview"
            >Home</router-link
          >
        </li>
        <li class="nav-item" style="align-self: center">
          <router-link class="nav-link" to="/informasiview">Informasi</router-link>
        </li>
        <li class="nav-item" style="align-self: center">
          <router-link class="nav-link" to="/tentangview">Tentang</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/loginview"
            ><button
              type="button"
              class="btn btn-info btn-sm"
              style="
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
                padding: 0;
                width: 100px;
                height: 42px;
              "
            >
            <b-icon-person-circle style="color: #ffffff; margin-right: 10px;" />Login
            </button></router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CNavbar",
};
</script>

<style></style>
