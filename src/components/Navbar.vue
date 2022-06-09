<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
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
            <router-link class='nav-link' to="/">Home</router-link>
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
        </li>
        <li class="nav-item">
            <router-link class='nav-link' to="/aboutview">About</router-link>
          <!-- <a class="nav-link" href="#">About</a> -->
        </li>
        <li class="nav-item">
            <router-link class='nav-link' to="/featureview">Features</router-link>
          <!-- <a class="nav-link" href="#">Features</a> -->
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style></style>
