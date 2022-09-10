<template>
  <section class="lognreg">
    <div>
      <h3
        class="lognreg"
        style="
          font-family: 'Inter';
          font-style: normal;
          font-weight: 600;
          font-size: 32px;
        "
      >
        Masuk
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
        Masukkan email dan password yang sudah terdaftar.
      </h6>
    </div>
    <div>
      <form @submit.prevent="handleSubmit">
        <div
          class="form-group"
          style="
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            width: 436px;
            margin-top: 14px;
            margin-bottom: 0;
          "
        >
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
        <div
          class="form-group"
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0px;
            gap: 0px;
            width: 436px;
            height: 90px;
            flex: none;
            order: 1;
            flex-grow: 0;
          "
        >
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
          <!-- <a
            href="#"
            class="card-link"
            style="
              text-align: right;
              align-items: flex-end;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 13px;
              line-height: 24px;
            "
            >Lupa kata sandi?</a
          > -->
        </div>
        <button
          class="btn btn-info"
          style="
            margin-top: 4px;
            padding: 12px;
            width: 100%;
            height: 100%;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
          "
        >
          Masuk
        </button>
      </form>
      <div>
        <hr style="margin-top: 24px" />
        <p style="margin-top: 20px; text-align: center">
          Belum punya akun?
          <a
            href="/registerview"
            class="card-link"
            style="font-family: 'Inter'; font-style: normal; font-weight: 600"
            >Daftar disini</a
          >
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
  async created() {
    const response = await axios.get(
      "https://niuniq.herokuapp.com/api/web/niuniq/auth/me"
    );

    console.log(response);
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post(
          "https://niuniq.herokuapp.com/api/web/niuniq/auth/login",
          {
            email: this.email,
            password: this.password,
          }
        );

        // console.log(response.data.data.store[0]);
        console.log(response.status);
        if (response.status == 200) {
          console.log(response.status);
          localStorage.setItem("user-info", JSON.stringify(response.data));
          localStorage.setItem("token", response.data.token);
          localStorage.setItem(
            "hasCreatedStore",
            response.data.data.hasCreatedStore
          );
          if (response.data.data.store.length > 0) {
            this.$router.push({
              path: "/profileview/" + response.data.data.store[0]._id,
            });
          } else {
            this.$router.push({
              path: "/inputtokoview/createStore",
            });
          }
        }
      } catch (error) {
        alert("Email atau password tidak valid");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      alert("Anda telah ter-logout, silahkan log-in kembali");
      localStorage.clear();
      this.$router.push({ name: "LoginView" });
    }
  },
};
</script>

<style></style>
