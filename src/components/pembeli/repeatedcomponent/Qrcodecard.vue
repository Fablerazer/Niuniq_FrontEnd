<template>
  <div>
    <div class="container" style="width: 80%; height: 75vh">
      <div style="align-self: center">
        <h1 style="text-align: center">
          Lihat detail produk dengan memasukkan ID QRCode
        </h1>
        <p style="text-align: center">
          Masukan ID QRCode untuk mendapatkan detail produk
        </p>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-9">
                <div class="form-group" style="margin-bottom: 0">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Masukkan ID produk"
                    v-model="search"
                    style="padding: 16px; height: 100%"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <router-link :to="'/detailview/' + this.search">
                  <button
                    type="submit"
                    class="btn btn-info"
                    style="
                      padding: 12px 16px;
                      gap: 10px;
                      width: 100%;
                      height: 100%;
                    "
                  >
                    Cari
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CQrcodecard",
};
</script>

<style></style>
