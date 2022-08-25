<template>
  <section class="lognreg">
    <div>
      <h3 class="lognreg">Buat Akun</h3>
      <h6 class="lognreg">
        Lengkapi data-data dibawah ini untuk mendapatkan akun.
      </h6>
    </div>
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputTelepon1">No. Telepon</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><b-icon-phone /></div>
            </div>
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan no telepon anda"
              v-model="noTelepon"
            />
          </div>
        </div>
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
        </div>
      </form>
      <div>
        <!-- <a href="/inputtokoview"> -->
        <button type="submit" class="btn btn-info" v-on:click="register">
          Daftar
        </button>
        <!-- </a> -->
        <hr />
        <a href="/">
          <button type="button" class="btn btn-outline-info">
            Log in with google
          </button>
        </a>
        <p>
          Sudah punya akun?
          <a href="/loginview" class="card-link">Masuk disini</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "CRegister",
  data() {
    return {
      noTelepon: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      let result = await axios.post(
        "https://niuniq.herokuapp.com/api/web/niuniq/auth/register",
        {
          email: this.email,
          password: this.password,
          noTelepon: this.noTelepon,
        }
      );

      console.warn(result);
      if (result.status == 200) {
        alert("register success");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("hasCreatedStore", result.data.data.hasCreatedStore);
        this.$router.push({ name: "InputTokoView" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "InputTokoView" });
    }
  },
};
</script>

<style></style>
