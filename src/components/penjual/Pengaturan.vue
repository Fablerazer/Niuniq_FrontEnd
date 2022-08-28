<template>
  <div>
    <div
      class="card"
      style="
        width: 100%;
        height: 85%;
        box-shadow: 0px 4px 16px rgba(51, 58, 81, 0.08);
        border-radius: 8px;
      "
    >
      <div class="card-body" style="padding: 32px">
        <div class="row">
          <div class="col-md-6">
            <h2
              style="
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 32px;
              "
            >
              Informasi Akun
            </h2>
          </div>
        </div>
        <hr style="margin-top: 0"/>
        <div class="form-group">
          <label
            for="exampleInputTelepon1"
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 16px;
              color: #777b80;
            "
            >Email</label
          >
          <div class="input-group mb-2">
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder=""
              readonly
              :value="user.email"
            />
          </div>
        </div>
        <div class="form-group">
          <label
            for="exampleInputTelepon1"
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 16px;
              color: #777b80;
            "
            >No. Handphone</label
          >
          <div class="input-group mb-2">
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder=""
              v-model="noTelepon"
            />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-success btn-lg btn-block"
          style="
            background-color: #4e944f;
            border-radius: 8px;
            font-size: 16px;
            margin-top: 30px;
          "
          @click="onSubmit"
        >
          Simpan
        </button>
      </div>
    </div>
    <br />
    <div
      class="card mt-3"
      style="
        width: 100%;
        height: 85%;
        box-shadow: 0px 4px 16px rgba(51, 58, 81, 0.08);
        border-radius: 8px;
      "
    >
      <div class="card-body" style="padding: 32px">
        <div class="row">
          <div class="col-md-6">
            <h2
              style="
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 32px;
              "
            >
              Ubah kata sandi
            </h2>
          </div>
        </div>
        <hr style="margin-top: 0"/>
        <div class="form-group">
          <label
            for="exampleInputTelepon1"
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 16px;
              color: #777b80;
            "
            >Kata sandi saat ini</label
          >
          <div class="input-group mb-2">
            <input
              :type="inputTypeIcon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              value="you've been bamboozled"
            />
          </div>
        </div>
        <div class="form-group">
          <label
            for="exampleInputTelepon1"
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 16px;
              color: #777b80;
            "
            >Kata sandi baru</label
          >
          <div class="input-group mb-2">
            <input
              :type="inputTypeIcon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
            />
            <div class="input-group-append">
              <button
                class="input-group-text"
                @click.prevent="ToggleButtonIcon"
              >
                <i v-if="inputTypeIcon == 'password'"><b-icon-eye /></i>
                <i v-else><b-icon-eye-slash /></i>
              </button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label
            for="exampleInputTelepon1"
            style="
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 16px;
              color: #777b80;
            "
            >Konfirmasi kata sandi baru</label
          >
          <div class="input-group mb-2">
            <input
              :type="inputTypeIcon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder=""
            />
            <div class="input-group-append">
              <button
                class="input-group-text"
                @click.prevent="ToggleButtonIcon"
              >
                <i v-if="inputTypeIcon == 'password'"><b-icon-eye /></i>
                <i v-else><b-icon-eye-slash /></i>
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-success btn-lg btn-block"
          style="
            background-color: #4e944f;
            border-radius: 8px;
            font-size: 16px;
            margin-top: 30px;
          "
        >
          Simpan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CPengaturan",
  props: ["user"],
  data() {
    return {
      inputType: "password",
      inputTypeIcon: "password",
      ShowPassword: "Show Password",
      HidePassword: "Hide Password",
      noTelepon: this.user?.noTelepon || "",
    };
  },
  methods: {
    ToggleButton() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    ToggleButtonIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === "password" ? "text" : "password";
    },
    onSubmit() {
      let formData = new FormData();
      formData.append("noTelepon", this.noTelepon);
      axios
        .put(
          "https://niuniq.herokuapp.com/api/web/niuniq/auth/updatedetails",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.$router.push({
              path: "/profileview/" + this.$route.params.id,
            });
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
};
</script>

<style></style>
