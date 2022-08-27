<template>
  <section class="lognreg">
    <div>
      <h3 class="lognreg">Masuk</h3>
    </div>
    <div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><b-icon-envelope /></div>
            </div>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Masukkan email anda"
              v-model="email"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Kata Sandi</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><b-icon-lock /></div>
            </div>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Masukkan kata sandi anda"
              v-model="password"
            />
          </div>
          <a href="#" class="card-link">Lupa kata sandi?</a>
        </div>
        <!-- <a href="/profileview"> -->
        <button class="btn btn-info">Masuk</button>
        <!-- <button v-on:click="login" type="submit" class="btn btn-info">
          Masuk
        </button> -->
        <!-- </a> -->
      </form>
      <div>
        <hr />
        <p>
          Belum punya akun?
          <a href="/registerview" class="card-link">Daftar disini</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "CLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(
        "https://niuniq.herokuapp.com/api/web/niuniq/auth/login",
        {
          email: this.email,
          password: this.password,
        }
      );

      // console.log(response.data.data.store[0]);
      if (response.status == 200) {
        localStorage.setItem("user-info", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "hasCreatedStore",
          response.data.data.hasCreatedStore
        );
        if (response.data.data.store.length > 0){
        this.$router.push({
          path: "/profileview/" + response.data.data.store[0]._id,
        });}
        else{
          this.$router.push({
          path: "/inputtokoview/createStore",
        });
        }
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({
        name: "ProfileView"
        // path: "profileview/" + this.$route.params.id,
      });
    }
  },
};
</script>

<style></style>
