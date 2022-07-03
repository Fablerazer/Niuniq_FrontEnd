<template>
  <section class="lognreg">
    <div>
      <h3 class="lognreg">Masuk</h3>
    </div>
    <div>
      <form>
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
          <a href="#" class="card-link">Lupa kata sandi?</a>
        </div>
      </form>
      <div>
        <button type="submit" class="btn btn-success">Masuk</button>
        <hr />
        <button type="button" class="btn btn-outline-success">Log in with google</button>
        <p>
            Belum punya akun? <a href="#" class="card-link">Daftar disini</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CLogin",
};
</script>

<style></style>
