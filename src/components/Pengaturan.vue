<template>
  <div>
    <div class="card mt-5" style="width: 75%; height: 75%">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h2>Informasi Akun</h2>
          </div>
        </div>
        <hr />
        <div class="form-group">
          <label for="exampleInputTelepon1">Email</label>
          <div class="input-group mb-2">
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan tahun produksi"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputTelepon1">No. Handphone</label>
          <div class="input-group mb-2">
            <input
              type="telepon"
              class="form-control"
              id="exampleInputTelepon1"
              aria-describedby="teleponHelp"
              placeholder="Masukkan tahun produksi"
            />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-success btn-lg btn-block"
          style="background-color: #4e944f; border-radius: 8px; font-size: 16px"
        >
          Simpan
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "CPengaturan",
};
</script>

<style></style>
