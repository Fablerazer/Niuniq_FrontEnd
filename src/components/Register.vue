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
          <input
            type="telepon"
            class="form-control"
            id="exampleInputTelepon1"
            aria-describedby="teleponHelp"
            placeholder="Masukkan no telepon anda"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Masukkan email anda"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Kata Sandi</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Masukkan kata sandi anda"
          />
        </div>
      </form>
      <div>
        <button type="submit" class="btn btn-success">Daftar</button>
        <hr />
        <button type="button" class="btn btn-outline-success">Log in with google</button>
        <p>
            Sudah punya akun? <a href="#" class="card-link">Masuk disini</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CRegister",
};
</script>

<style></style>
