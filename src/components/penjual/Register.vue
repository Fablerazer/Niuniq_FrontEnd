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
      // if(result.status==201)
      if (result.status == 200) {
        alert("register done");
        // tanya ini JSON, 201 && 200 differenciation, yang keluar malah token
        // https://www.youtube.com/watch?v=l-9S3GtVxr8&list=PL8p2I9GklV44Dq6kuEXSvT-EeBH1TDElH&index=48&ab_channel=CodeStepByStep
        localStorage.setItem("user-info", JSON.stringify(result.data));
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
