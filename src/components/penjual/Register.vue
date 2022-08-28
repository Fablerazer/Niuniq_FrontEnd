<template>
  <section
    class="lognreg"
    style="
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      width: 100%;
      height: 100%;
    "
  >
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        width: 100%;
        height: 100%;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
      "
    >
      <h3
        class="lognreg"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: 600;
          font-size: 32px;
        "
      >
        Buat Akun
      </h3>
      <h6
        class="lognreg"
        style="
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 17px;
        "
      >
        Lengkapi data-data dibawah ini untuk mendapatkan akun.
      </h6>
    </div>
    <div>
      <form style="margin-top: 14px">
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
              style="
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 10px 0px 10px 8px;
                gap: 8px;
                width: 436px;
                height: 40px;
                background: #ffffff;
                flex: none;
                order: 1;
                align-self: stretch;
                flex-grow: 0;
              "
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
        <button
          type="submit"
          class="btn btn-info"
          style="
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 12px 16px;
            gap: 10px;
            width: 100%;
            margin-top: 30px;
          "
          v-on:click="register"
        >
          Daftar
        </button>
        <!-- </a> -->
        <hr style="margin-top: 24px" />
        <p style="margin-top: 20px; text-align: center">
          Sudah punya akun?
          <a
            href="/loginview"
            class="card-link"
            style="font-family: 'Inter'; font-style: normal; font-weight: 600"
            >Masuk disini</a
          >
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
      if (result.status == 200 || result.status == 201) {
        alert("register success");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        localStorage.setItem("token", result.data.token);
        localStorage.setItem(
          "hasCreatedStore",
          result.data.data.hasCreatedStore
        );
        this.$router.push({ path: "inputtokoview/createStore" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ path: "inputtokoview/create" });
    }
  },
};
</script>

<style></style>
