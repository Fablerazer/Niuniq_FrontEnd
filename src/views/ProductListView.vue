<template>
  <div
    id="product-list"
    class="menu-item-list product-list card p-4 border-0 shadow"
    style="border-radius: 8px"
  >
    <div class="position-relative">
      <span
        class="text-success fw-bold d-flex align-items-center fs-2"
        style="
          font-family: 'Inter';
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 32px;
        "
        >Daftar Produk</span
      >
      <hr />
      <div class="btn-add-product-wrapper">
        <a :href="'/inputprodukview/' + this.$route.params.id">
          <button
            type="button"
            class="btn-add-product btn btn-success text-white fw-bold"
            style="
              padding: 12px 16px;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 24px;
            "
          >
            Tambah Produk
          </button>
        </a>
      </div>
      <div class="tab-data">
        <input id="tab1" type="radio" name="tabs" checked />
        <input id="tab2" type="radio" name="tabs" />
        <input id="tab3" type="radio" name="tabs" />
        <input id="tab4" type="radio" name="tabs" />

        <div class="tab-wrapper d-flex align-items-start">
          <label class="tab1" for="tab1">Semua</label>
          <label class="tab2" for="tab2">Menunggu</label>
          <label class="tab3" for="tab3">Gagal</label>
          <label class="tab4" for="tab4">Selesai</label>
        </div>

        <!-- Sort Semua -->
        <section id="content1">
          <table class="table table-bordered text-start">
            <thead>
              <tr class="align-middle">
                <th scope="col">No</th>
                <th scope="col" v-on:click="sortBy(column)">
                  <span>Nama Produk</span>
                </th>
                <th scope="col">ID Produk</th>
                <th scope="col">Status Verifikasi</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="align-middle"
                v-for="(product, index) in productList"
                :key="product._id"
              >
                <td scope="row">{{ index + 1 }}.</td>
                <td>{{ product.name }}</td>
                <td>{{ product.productId }}</td>
                <td>
                  <Status :verification-status="product.isVerification" />
                </td>
                <td class="d-flex">
                  <!-- Download Button -->
                  <div v-if="product.isVerification == 1" :key="product._id">
                    <div class="btn-action-wrapper">
                      <a
                        :href="
                          path + '/documents/images/QRcodes/' + product.qrCode
                        "
                        target="_blank"
                      >
                        <button
                          type="button"
                          class="btn-action-main btn btn-success"
                          @click="
                            $bvModal.show(
                              'bv-modal-download-semua' + product.productId
                            )
                          "
                        >
                          <img
                            src="@/assets/img/ic-file-download.svg"
                            alt=""
                            class="d-inline-block align-text-top"
                          />
                        </button>
                        <b-modal
                          :id="'bv-modal-download-semua' + product.productId"
                          centered
                          hide-footer
                        >
                          <div class="d-block text-center mt-2 mb-4">
                            <img
                              src="@/assets/img/popup-save.png"
                              alt="foto-produk"
                            />
                            <h6></h6>
                            <br />
                            <h4>QRCode berhasil di download!</h4>
                          </div>
                        </b-modal>
                      </a>
                    </div>
                  </div>
                  <div v-else>
                    <div class="btn-action-wrapper">
                      <button
                        type="button"
                        class="btn-action-main btn btn-secondary"
                        disabled
                      >
                        <img
                          src="@/assets/img/ic-file-download.svg"
                          alt=""
                          class="d-inline-block align-text-top"
                        />
                      </button>
                    </div>
                  </div>
                  <!-- Edit Button -->
                  <div
                    v-if="
                      product.isVerification == 1 || product.isVerification == 0
                    "
                    :key="product._id"
                  >
                    <div class="btn-action-wrapper">
                      <a
                        :href="'/inputprodukview/' + product.productId"
                        target="_blank"
                      >
                        <button
                          type="button"
                          class="btn-action-permanent btn btn-outline-success"
                        >
                          <img
                            src="@/assets/img/ic-edit-green.svg"
                            alt=""
                            class="d-inline-block align-text-top"
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                  <div v-else>
                    <div class="btn-action-wrapper">
                      <button
                        type="button"
                        class="btn-action btn btn-outline-secondary"
                        disabled
                      >
                        <img
                          src="@/assets/img/ic-edit-grey.svg"
                          alt=""
                          class="d-inline-block align-text-top"
                        />
                      </button>
                    </div>
                  </div>
                  <!-- Delete Button -->
                  <div class="btn-action-wrapper">
                    <button
                      type="button"
                      class="btn-action-permanent btn btn-outline-success"
                      @click="
                        deleteProduct(product._id),
                          $bvModal.show(
                            'bv-modal-dihapus-semua' + product.productId
                          )
                      "
                    >
                      <img
                        src="@/assets/img/ic-delete-green.svg"
                        alt=""
                        class="d-inline-block align-text-top"
                      />
                    </button>
                    <b-modal
                      :id="'bv-modal-dihapus-semua' + product.productId"
                      centered
                      hide-footer
                    >
                      <div class="d-block text-center mt-2 mb-4">
                        <img
                          src="@/assets/img/popup-save.png"
                          alt="foto-produk"
                        />
                        <h6></h6>
                        <br />
                        <h4>Data produk berhasil dihapus!</h4>
                      </div>
                    </b-modal>
                  </div>
                  <!-- View Button -->
                  <div class="btn-action-wrapper">
                    <a
                      :href="'/detailview/' + product.productId"
                      target="_blank"
                    >
                      <button
                        type="button"
                        class="btn-action-permanent btn btn-outline-success"
                      >
                        <img
                          src="@/assets/img/ic-eye-green.svg"
                          alt=""
                          class="d-inline-block align-text-top"
                        />
                      </button>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <!-- Sort Menunggu -->
        <section id="content2">
          <table class="table table-bordered text-start">
            <thead>
              <tr class="align-middle">
                <th scope="col">No</th>
                <th scope="col">
                  <span>Nama Produk</span>
                </th>
                <th scope="col">ID Produk</th>
                <th scope="col">Status Verifikasi</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(product, index) in productList">
                <tr
                  class="align-middle"
                  v-if="product.isVerification == 2"
                  :key="product._id"
                >
                  <td scope="row">{{ index + 1 }}.</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.productId }}</td>
                  <td>
                    <Status :verification-status="product.isVerification" />
                  </td>
                  <td class="d-flex">
                    <!-- Download Button -->
                    <div v-if="product.isVerification == 1" :key="product._id">
                      <div class="btn-action-wrapper">
                        <a
                          :href="
                            path + '/documents/images/QRcodes/' + product.qrCode
                          "
                          target="_blank"
                        >
                          <button
                            type="button"
                            class="btn-action-main btn btn-success"
                            @click="
                              $bvModal.show(
                                'bv-modal-download-menunggu' + product.productId
                              )
                            "
                          >
                            <img
                              src="@/assets/img/ic-file-download.svg"
                              alt=""
                              class="d-inline-block align-text-top"
                            />
                          </button>
                          <b-modal
                            :id="
                              'bv-modal-download-menunggu' + product.productId
                            "
                            centered
                            hide-footer
                          >
                            <div class="d-block text-center mt-2 mb-4">
                              <img
                                src="@/assets/img/popup-save.png"
                                alt="foto-produk"
                              />
                              <h6></h6>
                              <br />
                              <h4>QRCode berhasil di download!</h4>
                            </div>
                          </b-modal>
                        </a>
                      </div>
                    </div>
                    <div v-else>
                      <div class="btn-action-wrapper">
                        <button
                          type="button"
                          class="btn-action-main btn btn-secondary"
                          disabled
                        >
                          <img
                            src="@/assets/img/ic-file-download.svg"
                            alt=""
                            class="d-inline-block align-text-top"
                          />
                        </button>
                      </div>
                    </div>
                    <!-- Edit Button -->
                    <div
                      v-if="
                        product.isVerification == 1 ||
                        product.isVerification == 0
                      "
                      :key="product._id"
                    >
                      <div class="btn-action-wrapper">
                        <a
                          :href="'/inputprodukview/' + product.productId"
                          target="_blank"
                        >
                          <button
                            type="button"
                            class="btn-action-permanent btn btn-outline-success"
                          >
                            <img
                              src="@/assets/img/ic-edit-green.svg"
                              alt=""
                              class="d-inline-block align-text-top"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                    <div v-else>
                      <div class="btn-action-wrapper">
                        <button
                          type="button"
                          class="btn-action btn btn-outline-secondary"
                          disabled
                        >
                          <img
                            src="@/assets/img/ic-edit-grey.svg"
                            alt=""
                            class="d-inline-block align-text-top"
                          />
                        </button>
                      </div>
                    </div>
                    <!-- Delete Button -->
                    <div class="btn-action-wrapper">
                      <button
                        type="button"
                        class="btn-action-permanent btn btn-outline-success"
                        @click="
                          deleteProduct(product._id),
                            $bvModal.show(
                              'bv-modal-dihapus-menunggu' + product.productId
                            )
                        "
                      >
                        <img
                          src="@/assets/img/ic-delete-green.svg"
                          alt=""
                          class="d-inline-block align-text-top"
                        />
                      </button>
                      <b-modal
                        :id="'bv-modal-dihapus-menunggu' + product.productId"
                        centered
                        hide-footer
                      >
                        <div class="d-block text-center mt-2 mb-4">
                          <img
                            src="@/assets/img/popup-save.png"
                            alt="foto-produk"
                          />
                          <h6></h6>
                          <br />
                          <h4>Data produk berhasil dihapus!</h4>
                        </div>
                      </b-modal>
                    </div>
                    <!-- View Button -->
                    <div class="btn-action-wrapper">
                      <a
                        :href="'/detailview/' + product.productId"
                        target="_blank"
                      >
                        <button
                          type="button"
                          class="btn-action-permanent btn btn-outline-success"
                        >
                          <img
                            src="@/assets/img/ic-eye-green.svg"
                            alt=""
                            class="d-inline-block align-text-top"
                          />
                        </button>
                      </a>
                    </div>
                  </td>
                </tr>
                <div class="align-middle" v-else :key="product._id">
                  data kosong
                </div>
              </template>
            </tbody>
          </table>
        </section>

        <!-- Sort Gagal -->
        <section id="content3">
          <table class="table table-bordered text-start">
            <thead>
              <tr class="align-middle">
                <th scope="col">No</th>
                <th scope="col">
                  <span>Nama Produk</span>
                </th>
                <th scope="col">ID Produk</th>
                <th scope="col">Status Verifikasi</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(product, index) in productList">
                <tr
                  class="align-middle"
                  :key="product._id"
                  v-if="
                    !product.isVerification && product.isVerification !== null
                  "
                >
                  <td scope="row">{{ index + 1 }}.</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.productId }}</td>
                  <td>
                    <Status :verification-status="product.isVerification" />
                  </td>
                  <td class="d-flex">
                    <!-- Download Button -->
                    <div v-if="product.isVerification == 1" :key="product._id">
                      <div class="btn-action-wrapper">
                        <a
                          :href="
                            path + '/documents/images/QRcodes/' + product.qrCode
                          "
                          target="_blank"
                        >
                          <button
                            type="button"
                            class="btn-action-main btn btn-success"
                            @click="
                              $bvModal.show(
                                'bv-modal-download-gagal' + product.productId
                              )
                            "
                          >
                            <img
                              src="@/assets/img/ic-file-download.svg"
                              alt=""
                              class="d-inline-block align-text-top"
                            />
                          </button>
                          <b-modal
                            :id="'bv-modal-download-gagal' + product.productId"
                            centered
                            hide-footer
                          >
                            <div class="d-block text-center mt-2 mb-4">
                              <img
                                src="@/assets/img/popup-save.png"
                                alt="foto-produk"
                              />
                              <h6></h6>
                              <br />
                              <h4>QRCode berhasil di download!</h4>
                            </div>
                          </b-modal>
                        </a>
                      </div>
                    </div>
                    <div v-else>
                      <div class="btn-action-wrapper">
                        <button
                          type="button"
                          class="btn-action-main btn btn-secondary"
                          disabled
                        >
                          <img
                            src="@/assets/img/ic-file-download.svg"
                            alt=""
                            class="d-inline-block align-text-top"
                          />
                        </button>
                      </div>
                    </div>
                    <!-- Edit Button -->
                    <div
                      v-if="
                        product.isVerification == 1 ||
                        product.isVerification == 0
                      "
                      :key="product._id"
                    >
                      <div class="btn-action-wrapper">
                        <a
                          :href="'/inputprodukview/' + product.productId"
                          target="_blank"
                        >
                          <button
                            type="button"
                            class="btn-action-permanent btn btn-outline-success"
                          >
                            <img
                              src="@/assets/img/ic-edit-green.svg"
                              alt=""
                              class="d-inline-block align-text-top"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                    <div v-else>
                      <div class="btn-action-wrapper">
                        <button
                          type="button"
                          class="btn-action btn btn-outline-secondary"
                          disabled
                        >
                          <img
                            src="@/assets/img/ic-edit-grey.svg"
                            alt=""
                            class="d-inline-block align-text-top"
                          />
                        </button>
                      </div>
                    </div>
                    <!-- Delete Button -->
                    <div class="btn-action-wrapper">
                      <button
                        type="button"
                        class="btn-action-permanent btn btn-outline-success"
                        @click="
                          deleteProduct(product._id),
                            $bvModal.show(
                              'bv-modal-dihapus-gagal' + product.productId
                            )
                        "
                      >
                        <img
                          src="@/assets/img/ic-delete-green.svg"
                          alt=""
                          class="d-inline-block align-text-top"
                        />
                      </button>
                      <b-modal
                        :id="'bv-modal-dihapus-gagal' + product.productId"
                        centered
                        hide-footer
                      >
                        <div class="d-block text-center mt-2 mb-4">
                          <img
                            src="@/assets/img/popup-save.png"
                            alt="foto-produk"
                          />
                          <h6></h6>
                          <br />
                          <h4>Data produk berhasil dihapus!</h4>
                        </div>
                      </b-modal>
                    </div>
                    <!-- View Button -->
                    <div class="btn-action-wrapper">
                      <a
                        :href="'/detailview/' + product.productId"
                        target="_blank"
                      >
                        <button
                          type="button"
                          class="btn-action-permanent btn btn-outline-success"
                        >
                          <img
                            src="@/assets/img/ic-eye-green.svg"
                            alt=""
                            class="d-inline-block align-text-top"
                          />
                        </button>
                      </a>
                    </div>
                  </td>
                </tr>
                <div class="align-middle" v-else :key="product._id">
                  data kosong
                </div>
              </template>
            </tbody>
          </table>
        </section>

        <!-- Sort Selesai -->
        <section id="content4">
          <table class="table table-bordered text-start">
            <thead>
              <tr class="align-middle">
                <th scope="col">No</th>
                <th scope="col">
                  <span>Nama Produk</span>
                </th>
                <th scope="col">ID Produk</th>
                <th scope="col">Status Verifikasi</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(product, index) in productList">
                <tr
                  class="align-middle"
                  v-if="product.isVerification == 1"
                  :key="product._id"
                >
                  <td scope="row">{{ index + 1 }}.</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.productId }}</td>
                  <td>
                    <Status :verification-status="product.isVerification" />
                  </td>
                  <td class="d-flex">
                    <!-- Download Button -->
                    <div v-if="product.isVerification == 1" :key="product._id">
                      <div class="btn-action-wrapper">
                        <a
                          :href="
                            path + '/documents/images/QRcodes/' + product.qrCode
                          "
                          target="_blank"
                        >
                          <button
                            type="button"
                            class="btn-action-main btn btn-success"
                            @click="
                              $bvModal.show(
                                'bv-modal-download-selesai' + product.productId
                              )
                            "
                          >
                            <img
                              src="@/assets/img/ic-file-download.svg"
                              alt=""
                              class="d-inline-block align-text-top"
                            />
                          </button>
                          <b-modal
                            :id="
                              'bv-modal-download-selesai' + product.productId
                            "
                            centered
                            hide-footer
                          >
                            <div class="d-block text-center mt-2 mb-4">
                              <img
                                src="@/assets/img/popup-save.png"
                                alt="foto-produk"
                              />
                              <h6></h6>
                              <br />
                              <h4>QRCode berhasil di download!</h4>
                            </div>
                          </b-modal>
                        </a>
                      </div>
                    </div>
                    <div v-else>
                      <div class="btn-action-wrapper">
                        <button
                          type="button"
                          class="btn-action-main btn btn-secondary"
                          disabled
                        >
                          <img
                            src="@/assets/img/ic-file-download.svg"
                            alt=""
                            class="d-inline-block align-text-top"
                          />
                        </button>
                      </div>
                    </div>
                    <!-- Edit Button -->
                    <div
                      v-if="
                        product.isVerification == 1 ||
                        product.isVerification == 0
                      "
                      :key="product._id"
                    >
                      <div class="btn-action-wrapper">
                        <a
                          :href="'/inputprodukview/' + product.productId"
                          target="_blank"
                        >
                          <button
                            type="button"
                            class="btn-action-permanent btn btn-outline-success"
                          >
                            <img
                              src="@/assets/img/ic-edit-green.svg"
                              alt=""
                              class="d-inline-block align-text-top"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                    <div v-else>
                      <div class="btn-action-wrapper">
                        <button
                          type="button"
                          class="btn-action btn btn-outline-secondary"
                          disabled
                        >
                          <img
                            src="@/assets/img/ic-edit-grey.svg"
                            alt=""
                            class="d-inline-block align-text-top"
                          />
                        </button>
                      </div>
                    </div>
                    <!-- Delete Button -->
                    <div class="btn-action-wrapper">
                      <button
                        type="button"
                        class="btn-action-permanent btn btn-outline-success"
                        @click="
                          deleteProduct(product._id),
                            $bvModal.show(
                              'bv-modal-dihapus-berhasil' + product.productId
                            )
                        "
                      >
                        <img
                          src="@/assets/img/ic-delete-green.svg"
                          alt=""
                          class="d-inline-block align-text-top"
                        />
                      </button>
                      <b-modal
                        :id="'bv-modal-dihapus-berhasil' + product.productId"
                        centered
                        hide-footer
                      >
                        <div class="d-block text-center mt-2 mb-4">
                          <img
                            src="@/assets/img/popup-save.png"
                            alt="foto-produk"
                          />
                          <h6></h6>
                          <br />
                          <h4>Data produk berhasil dihapus!</h4>
                        </div>
                      </b-modal>
                    </div>
                    <!-- View Button -->
                    <div class="btn-action-wrapper">
                      <a
                        :href="'/detailview/' + product.productId"
                        target="_blank"
                      >
                        <button
                          type="button"
                          class="btn-action-permanent btn btn-outline-success"
                        >
                          <img
                            src="@/assets/img/ic-eye-green.svg"
                            alt=""
                            class="d-inline-block align-text-top"
                          />
                        </button>
                      </a>
                    </div>
                  </td>
                </tr>
                <div class="align-middle" v-else :key="product._id">
                  data kosong
                </div>
              </template>
            </tbody>
          </table>
        </section>

        <!-- Pagination -->
        <div class="fw-bold d-flex justify-content-end mt-5">
          <div
            class="page-item bg-white text-success"
            v-if="data.pagination?.next.page - 1 !== 1"
            v-on:click="getProductsByPage(data.pagination?.prev?.page)"
          >
            &lt;
          </div>
          <div
            class="page-item"
            :class="
              data.pagination?.next.page - 1 === 1
                ? 'bg-success text-white'
                : 'bg-white text-success'
            "
            v-on:click="getProductsByPage(1)"
          >
            1
          </div>
          <div
            class="page-item"
            :class="
              data.pagination?.next.page - 1 === 2
                ? 'bg-success text-white'
                : 'bg-white text-success'
            "
            v-on:click="
              getProductsByPage(
                data.pagination?.next.page - 1 < 4
                  ? 2
                  : data.pagination?.next.page - 1
              )
            "
          >
            {{ data.pagination?.next.page - 1 < 4 ? 2 : "..." }}
          </div>
          <div
            class="page-item"
            :class="
              data.pagination?.next.page - 1 === 3 ||
              data.pagination?.next.page - 1 >= 4
                ? 'bg-success text-white'
                : 'bg-white text-success'
            "
            v-on:click="
              getProductsByPage(
                data.pagination?.next.page - 1 < 4
                  ? 3
                  : data.pagination?.next.page - 1
              )
            "
          >
            {{
              data.pagination?.next.page - 1 < 4
                ? 3
                : data.pagination?.next.page - 1
            }}
          </div>
          <div
            class="page-item bg-white text-success"
            v-on:click="
              getProductsByPage(
                data.pagination?.next.page - 1 < 4
                  ? 4
                  : data.pagination?.next.page
              )
            "
          >
            {{
              data.pagination?.next.page - 1 < 4
                ? 4
                : data.pagination?.next.page
            }}
          </div>
          <div
            class="page-item bg-white text-success"
            v-on:click="getProductsByPage(data.pagination?.next.page)"
          >
            &gt;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Status from "../components/status/VerificationStatus.vue";
import axios from "axios";

export default {
  name: "ProductListView",
  components: {
    Status,
  },
  data() {
    return {
      productList: [],
      data: {},
      path: "https://niuniq.herokuapp.com",
    };
  },
  created() {
    this.getProducts();
    this.getData();
  },
  methods: {
    deleteProduct(_id) {
      axios
        .delete("https://niuniq.herokuapp.com/api/web/niuniq/products/" + _id)
        .then((response) => {
          console.log(response);
          // this.$router.go();
          if (response.status == 404) {
            this.$router.go();
          } else {
            console.log(response);
            this.$router.go();
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    getProducts() {
      var config = {
        method: "get",
        // jangan dihapus
        // url: "https://niuniq.herokuapp.com/api/web/niuniq/products",
        url:
          "https://niuniq.herokuapp.com/api/web/niuniq/stores/" +
          this.$route.params.id +
          "/products",
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`,
        },
      };
      axios(config)
        .then((response) => {
          this.productList = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData() {
      var config = {
        method: "get",
        // jangan dihapus
        // url: "https://niuniq.herokuapp.com/api/web/niuniq/products",
        url:
          "https://niuniq.herokuapp.com/api/web/niuniq/stores/" +
          this.$route.params.id +
          "/products",
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`,
        },
      };
      axios(config)
        .then((response) => {
          console.log(`Next >> ${response.data.pagination.next.page}`);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductsByPage(page) {
      var config = {
        method: "get",
        url: `https://niuniq.herokuapp.com/api/web/niuniq/stores/${this.$route.params.id}/products/?page=${page}`,
        // url: `https://niuniq.herokuapp.com/api/web/niuniq/products/?page=${page}`,
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`,
        },
      };
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          console.log(`Next >> ${response.data.pagination.next.page}`);
          this.data = response.data;
          this.productList = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
section {
  display: none;
  padding: 20px 0 0;
}

input {
  display: none;
}

label {
  display: inline-block;
  padding: 10px 30px;
  font-weight: 600;
  text-align: center;
  color: #bbb;
  border-bottom: 4px solid #ddd;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

label:hover {
  color: #888;
  cursor: pointer;
}

input:checked + label {
  color: #555;
  border-bottom: 4px solid #4caf50;
}

#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3,
#tab4:checked ~ #content4 {
  display: block;
}

#tab1:checked ~ .tab-wrapper > .tab1 {
  background-color: #e9f8ee;
  border-bottom: 4px solid #4caf50;
  color: #4caf50;
}

#tab2:checked ~ .tab-wrapper > .tab2 {
  background-color: #e9f8ee;
  border-bottom: 4px solid #4caf50;
  color: #4caf50;
}

#tab3:checked ~ .tab-wrapper > .tab3 {
  background-color: #e9f8ee;
  border-bottom: 4px solid #4caf50;
  color: #4caf50;
}

#tab4:checked ~ .tab-wrapper > .tab4 {
  background-color: #e9f8ee;
  border-bottom: 4px solid #4caf50;
  color: #4caf50;
}

.tab-data {
  z-index: 999;
}

.btn-add-product-wrapper {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
}

.btn-add-product {
  height: 3rem;
}

.btn-action-wrapper {
  padding: 0.3rem;
}

.btn-action {
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.btn-action-permanent {
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #4caf50;
  background-color: transparent;
}

.btn-action-main {
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #4caf50;
}

.btn-action img {
  width: 1.5rem;
  color: #4caf50;
}

.page-link {
  color: #4caf50;
}

.page-item {
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

@media screen and (max-width: 650px) {
  label {
    font-size: 0;
  }

  label:before {
    margin: 0;
    font-size: 18px;
  }
}

@media screen and (max-width: 400px) {
  label {
    padding: 15px;
  }
}
</style>
