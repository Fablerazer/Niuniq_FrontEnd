<template>
  <footer id="footer" class="bg-gray-secondary">
    <div
      class="footer-widget py-5 d-flex flex-wrap align-items-center justify-content-between"
      style="padding-bottom: 1rem !important; padding-top: 3rem !important"
    >
      <div class="col-lg-5">
        <a
          href="http://www.niuniq.id"
          class="brand-image brand-link bg-transparent border-bottom"
        >
          <img
            class="d-flex mr-auto"
            style="padding-bottom: 16px; width: 100px"
            src="@/assets/img/logo-niuniq.svg"
          />
        </a>
        <p style="font-weight: 500">
          Jl. Telekomunikasi No. 1, Terusan Buahbatu, <br />Bojongsoang,
          Sukapura, Kec. Dayeuhkolot,<br />
          Kabupaten Bandung, Jawa Barat 40257<br />
          Indonesia
        </p>
      </div>
      <div class="col-lg-3 py-3">
        <div class="d-flex gap-3">
          <div class="d-flex align-items-center" style="margin-right: 16px">
            <img src="@/assets/img/email.svg" width="50" class="" alt="" />
          </div>
          <div class="text-primary">
            <p
              class="mb-0"
              style="font-weight: 600; color: #2a2e33; font-size: 16px"
              href="#"
            >
              Punya Saran?
            </p>
            <a
              href="#"
              style="font-weight: 500; color: #2a2e33; font-size: 14px"
              class="fs-4 font-weight-semibold"
              >niuniq@gmail.com</a
            >
          </div>
        </div>
      </div>
      <div class="col-lg-3 py-3" style="padding-right: 0 !important">
        <div class="d-flex">
          <div class="d-flex align-items-center" style="margin-right: 16px">
            <img src="@/assets/img/group.svg" width="50" class="" alt="" />
          </div>
          <div class="text-primary">
            <p
              class="mb-0"
              style="font-weight: 600; color: #2a2e33; font-size: 16px"
              href="#"
            >
              Ingin bergabung?
            </p>
            <a
              href="/registerview"
              style="font-weight: 500;color: #2a2e33; font-size: 14px"
              class="fs-4 font-weight-semibold"
              >Masuk Sebagai Penjual</a
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
              <a class="nav-link pl-0" href="/tentangview">Tentang</a>
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
        <p class="text-md-right" style="margin-right: 0; margin-bottom: 0">
          Niuniq © 2022 All Rights Reserved
        </p>
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
