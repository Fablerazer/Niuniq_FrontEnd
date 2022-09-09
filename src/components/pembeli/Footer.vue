<template>
  <footer id="footer" class="bg-gray-secondary">
    <div
      class="footer-widget py-5 d-flex flex-wrap align-items-center justify-content-between"
    >
      <div class="col-lg-5">
        <a
          href="http://www.niuniq.id"
          class="brand-image brand-link bg-transparent border-bottom"
        >
          <img
            class="d-flex mr-auto"
            style="padding-bottom: 5px"
            src="@/assets/img/logo-niuniq2.png"
          />
        </a>
        <p>
          Niuniq merupakan platform untuk memudahkan UMKM Handicraft membagikan
          informasi mengenai produk yang dibuat serta menunjukkan keaslian
          produk yang dibuat dengan...
          <span
            ><router-link
              to="/tentangview"
              style="color: #4e944f"
              class="text-primary-blue text-decoration-none"
            >
              Read More</router-link
            ></span
          >
        </p>
      </div>
      <div class="col-lg-3 py-3">
        <div class="d-flex gap-3">
          <div class="d-flex align-items-center" style="margin-right: 10px">
            <img
              src="@/assets/img/phone-calling.svg"
              width="50"
              class=""
              alt=""
            />
          </div>
          <div class="text-primary">
            <p class="mb-0" style="color: #4e944f; font-size: 14px" href="#">
              Punya Pertanyaan?
            </p>
            <a
              href="#"
              style="color: #4e944f; font-size: 14px"
              class="fs-4 font-weight-semibold"
              >087722162211</a
            >
          </div>
        </div>
      </div>
      <div class="col-lg-3 py-3">
        <div class="d-flex gap-3">
          <div class="d-flex align-items-center" style="margin-right: 10px">
            <img
              src="@/assets/img/mail.svg"
              width="50"
              class=""
              alt=""
            />
          </div>
          <div class="text-primary">
            <p class="mb-0" style="color: #4e944f; font-size: 14px" href="#">
              Ingin bergabung?
            </p>
            <a
              href="/registerview"
              style="color: #4e944f; font-size: 14px"
              class="fs-4 font-weight-semibold"
              >Join Sebagai Penjual</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer-bar py-3 d-flex align-items-center justify-content-between flex-wrap"
    >
      <div class="col-md-8">
        <div class="navbar navbar-expand-md flex-wrap px-0">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link pl-0" href="#">Tentang</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kontak Kami</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kebijakan Privasi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Syarat &amp; Ketentuan</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <p class="text-md-right m-0">© 2022, Niuniq</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CFooter",
};
</script>

<style></style>
