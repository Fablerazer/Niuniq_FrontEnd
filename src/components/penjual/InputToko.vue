<template>
  <div>
    <div class="card" style="width: 100%">
      <div class="card-body">
        <h3 class="lognreg">Informasi Toko</h3>
        <hr />
        <div class="row">
          <div class="col-md-6">
            <label for="exampleInputTelepon1">Logo Toko<br /></label>
            <label class="btn btn-default">
              <input type="file" multiple @change="selectFile" />
            </label>
          </div>
          <div class="col-md-6">
            <label for="exampleInputTelepon1">Foto Toko*<br /></label>
            <label class="btn btn-default">
              <input type="file" multiple @change="selectFile2" />
            </label>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Nama Toko*</label>
              <div class="input-group mb-2">
                <input
                  type="telepon"
                  class="form-control"
                  id="exampleInputTelepon1"
                  aria-describedby="teleponHelp"
                  placeholder="Masukkan nama toko"
                  v-model="name"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Tahun Berdiri*</label>
              <div class="input-group mb-2">
                <input
                  type="telepon"
                  class="form-control"
                  id="exampleInputTelepon1"
                  aria-describedby="teleponHelp"
                  placeholder="Masukkan tahun toko berdiri"
                  v-model="yearEstabilished"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h5 class="informasiproduk">Lokasi Toko</h5>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Kota/Kabupaten*</label>
              <div class="input-group mb-2">
                <input
                  type="telepon"
                  class="form-control"
                  id="exampleInputTelepon1"
                  aria-describedby="teleponHelp"
                  placeholder="Masukkan nama kota/kabupaten"
                  v-model="regency"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputTelepon1">Provinsi*</label>
              <div class="input-group mb-2">
                <input
                  type="telepon"
                  class="form-control"
                  id="exampleInputTelepon1"
                  aria-describedby="teleponHelp"
                  placeholder="Masukkan nama provinsi"
                  v-model="province"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputTelepon1">Address</label>
          <div class="input-group mb-2">
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan alamat"
              v-model="address"
            />
          </div>
        </div>
        <hr />
        <div class="form-group">
          <label for="exampleInputblibli">Link Blibli</label>
          <div class="input-group mb-2">
            <input
              type="blibli"
              class="form-control"
              id="exampleInputblibli"
              aria-describedby="blibliHelp"
              placeholder="Masukkan link Blibli"
              v-model="linkBlibli"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputshopee">Link Shopee</label>
          <div class="input-group mb-2">
            <input
              type="shopee"
              class="form-control"
              id="exampleInputshopee"
              aria-describedby="shopeeHelp"
              placeholder="Masukkan link Shopee"
              v-model="linkShopee"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputtokopedia">Link Tokopedia</label>
          <div class="input-group mb-2">
            <input
              type="tokopedia"
              class="form-control"
              id="exampleInputtokopedia"
              aria-describedby="tokopediaHelp"
              placeholder="Masukkan link Tokopedia"
              v-model="linkTokopedia"
            />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-success btn-lg btn-block mt-4 mb-2"
          style="background-color: #4e944f; border-radius: 8px; font-size: 16px"
          @click="onSubmit"
        >
          Simpan
        </button>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CInputToko",
  props: ["store", "isEdit", "userId"],
  data() {
    return {
      selectedFiles: undefined,
      progressInfos: [],
      message: "",
      fileInfos: [],
      linkTokopedia: this.store?.linkTokopedia || "",
      linkShopee: this.store?.linkShopee || "",
      linkBlibli: this.store?.linkBlibli || "",
      address: this.store?.address || "",
      regency: this.store?.regency || "",
      province: this.store?.province || "",
      name: this.store?.name || "",
      logo: [],
      photo: [],
      yearEstabilished: this.store?.yearEstabilished || "",
    };
  },
  async created() {
    const response = await axios.get(
      "https://niuniq.herokuapp.com/api/web/niuniq/auth/me"
    );

    console.log(response);
  },
  methods: {
    selectFile() {
      this.progressInfos = [];
      this.logo = event.target.files;
    },

    selectFile2() {
      this.progressInfos = [];
      this.photo = event.target.files;
    },

    uploadFiles() {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        console.log(this.selectedFiles[i]);
      }
    },

    onSubmit() {
      let formData = new FormData();
      formData.append("logo", this.logo[0]);
      formData.append("photo", this.photo[0]);
      formData.append("linkTokopedia", this.linkTokopedia);
      formData.append("linkShopee", this.linkShopee);
      formData.append("linkBlibli", this.linkBlibli);
      formData.append("address", this.address);
      formData.append("regency", this.regency);
      formData.append("province", this.province);
      formData.append("name", this.name);
      formData.append("yearEstabilished", this.yearEstabilished);
      if (this.isEdit) {
        console.log("this is edit");
        axios
          .put(
            "https://niuniq.herokuapp.com/api/web/niuniq/stores/" +
              this.store._id,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((response) => {
            console.log(response);
            if (response.status == 200 || response.status == 201) {
              this.$router.push({
                path: "/profileview/" + this.$route.params.id,
              });
            }
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      } else {
        console.log(this.selectedFiles);
        axios
          .post(
            "https://niuniq.herokuapp.com/api/web/niuniq/stores",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((response) => {
            console.log(response);
            if (response.status == 200 || response.status == 201) {
              localStorage.removeItem("hasCreatedStore");
              localStorage.setItem(
                "hasCreatedStore",
                response.data.data.hasCreatedStore
              );
              this.$router.push({
                path: "/profileview/" + this.$route.params.id,
              });
              // this.$router.push({
              //   path: "/profileview/" + response.data.data.store[0]._id,
              // });
            }
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      }
    },
  },
  mounted() {
    let userStore = localStorage.getItem("hasCreatedStore");
    if (userStore == false) {
      this.$router.push({ name: "InputTokoView" });
    }
  },
};
</script>

<style></style>
