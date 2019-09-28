<template>
  <div class="home">
    <mdb-navbar dark>
      <mdb-navbar-brand>
        <router-link to="/">
          <img class="logo" :src="'./logo.png'" />
        </router-link>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <router-link to="/" active>Home</router-link>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!-- SEARCH FORM -->
    <mdb-view v-if="views.isSearchLocation">
      <img :src="'./flag.jpg'" class="img-fluid" alt="placeholder" />
      <mdb-mask flex-center text="Your suprise adventure is ready" />
    </mdb-view>
    <section v-if="views.isSearchLocation">
      <h1 class="text-left">
        <span class="red-text">S</span>uprising
      </h1>
      <h2 class="text-center">
        <span class="red-text">B</span>reathtaking
      </h2>
      <h3 class="text-right">
        <span class="red-text">B</span>orderless
      </h3>
      <form @submit.prevent>
        <div>
          <div class="form-group">
            <label for="example1">Where would you like to start?</label>
            <input
              type="text"
              id="example1"
              class="form-control"
              :value="startLocation"
              @input="getStartLocation($event.target.value)"
            />
          </div>
          <div class="input-wrapper">
            <label for="date">What date do suits you?</label>
            <Datepicker v-model="selectedDate" class="form-control" format="yyyy-MM-dd" />
          </div>

          <div class="input-wrapper">
            <label for="time">Consider your starting time</label>
            <input
              type="time"
              id="appt"
              name="appt"
              class="form-control"
              required
              v-model="selectedTime"
            />
          </div>
          <div class="input-wrapper">
            <div for="Image" class="font-weight-bold">Do you prefer...</div>
            <div class="image-selection__wrapper">
              <div>
                <div
                  for="Image"
                  style="paddingBottom: 5px;"
                  :class="{selected: isNature}"
                >...calming nature</div>
                <img
                  :src="'./natur0.jpg'"
                  alt="avatar"
                  class="img-fluid"
                  :class="{selected: isNature}"
                  @click="isNature = true"
                />
              </div>
              <h5 class="font-weight-bold">...or...</h5>
              <div>
                <img
                  :src="'./stadt0.jpg'"
                  alt="avatar"
                  class="img-fluid"
                  :class="{selected: !isNature}"
                  @click="isNature = false"
                />
                <div
                  for="Image"
                  style="paddingTop: 5px;"
                  :class="{selected: !isNature}"
                >...exciting cities?</div>
              </div>
            </div>
          </div>
        </div>
        <div style="textAlign: center">
          <mdb-btn @click="getTrips" class="primary">Let's go</mdb-btn>
        </div>
      </form>
    </section>
    <!-- SEARCH OFFER -->
    <section v-if="views.isSearchTrip">
      <div class="trip-wrapper">
        <mdb-container>
          <mdb-row>
            <mdb-col sm="4">
              <mdb-card>
                <mdb-view hover>
                  <a href="#!">
                    <mdb-card-image
                      :src="'./'+ (isNature ? 'natur' : 'stadt') +'0.jpg'"
                      alt="Card image cap"
                    ></mdb-card-image>
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>Your suprise trip</mdb-card-title>
                  <hr />
                  <p class="font-small grey-dark-text mb-0">
                    <span class="old-price">39</span>
                    <span class="new-price">19</span>
                    <span>CHF</span>
                  </p>
                  <mdb-btn class="primary" @click="book">Book</mdb-btn>
                </mdb-card-body>
                <mdb-card-footer class="lighten-3 p-0 text-center">
                  <ul class="list-unstyled list-inline font-small mt-3">
                    <li class="list-inline-item pr-2 white-text">
                      <mdb-icon far icon="clock" class="pr-1" />
                      {{ selectedDate }} {{ selectedTime}}
                    </li>
                    <li class="list-inline-item pr-2">
                      <a href="#" class="white-text">
                        <mdb-icon far icon="comments" class="pr-1" />12
                      </a>
                    </li>
                    <li class="list-inline-item pr-2">
                      <a href="#" class="white-text">
                        <mdb-icon fab icon="facebook" class="pr-1" />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="white-text">
                        <mdb-icon fab icon="twitter" class="pr-1" />
                      </a>
                    </li>
                  </ul>
                </mdb-card-footer>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </div>
    </section>
    <mdb-view v-if="views.isSuccess">
      <img :src="'./breath.gif'" class="img-fluid" alt="placeholder" />
      <!-- <mdb-mask flex-center text="Your suprise adventure is ready" /> -->
    </mdb-view>
    <section v-if="views.isSuccess">
      <h1 style="paddingTop: 30px">Success 👏👏👏</h1>
      <img :src="'./success.png'" class="img-fluid" />
    </section>

    <!-- <mdb-btn @click="getLocationByName(startLocation)">Get Location by name (Bern)</mdb-btn>
    <mdb-btn @click="getTrips">Get Trip (Bern-Montreux) Time given</mdb-btn>
    <mdb-btn @click="getToken">Get Token</mdb-btn> 
    <mdb-btn @click="getPrice">Get Price</mdb-btn>
    <mdb-btn @click="getOffer">Get Offer</mdb-btn>
    <mdb-btn @click="prebook">Prebook</mdb-btn>-->
  </div>
</template>

<script>
import axios from "axios";
import {
  mdbInput,
  mdbBtn,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbDropdownItem,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbView,
  mdbMask,
  mdbIcon
} from "mdbvue";
import Datepicker from "vuejs-datepicker";

export default {
  name: "home",
  data() {
    return {
      startLocation: "Bern",
      targetLocation: "Luzern",
      originId: "",
      destinationId: "",
      selectedDate: this.formatDate(new Date()),
      selectedTime: "17:00",
      viewFlags: {
        isSearchLocation: true,
        isSearchTrip: false
      },
      isNature: true
    };
  },
  computed: {
    views: {
      get() {
        return {
          isSearchLocation: this.viewFlags.isSearchLocation,
          isSearchTrip: this.viewFlags.isSearchTrip,
          isSuccess: this.viewFlags.isSuccess
        };
      },
      set(newView) {
        this.viewFlags = newView;
      }
    }
  },
  components: {
    mdbInput,
    mdbBtn,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    Datepicker,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbView,
    mdbMask,
    mdbIcon
  },
  mounted() {
    this.getTargetLocation(this.targetLocation);
    this.getStartLocation(this.startLocation);
  },
  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    async getStartLocation(locationName) {
      this.originId = await this.getLocationByName(locationName);
    },
    async getTargetLocation(locationName) {
      this.destinationId = await this.getLocationByName(locationName);
    },
    async getLocationByName(locationName) {
      if (locationName.length < 2) return;
      const url = `https://booking.app.trasier.com/api/locations?name=${locationName}`;
      return await axios.get(url).then(response => {
        console.log(response.data);
        return response.data[0].id;
      });
    },
    async getTrips() {
      const url = `https://booking.app.trasier.com/api/trips?originId=${this.originId}&destinationId=${this.destinationId}&date=${this.selectedDate}&time=${this.selectedTime}`;
      const response = await axios.get(url);
      this.trips = response.data;
      this.views = {
        ...this.views,
        isSearchLocation: false,
        isSearchTrip: true,
        isSuccess: false
      };
      console.log(response.data);
    },
    book() {
      console.log("booked");
      this.views = {
        isSearchTrip: false,
        isSuccess: true
      };
    },
    goToStartPage() {
      window.reload();
    },
    // async getToken() {
    //   const url =
    //     "https://sso-int.sbb.ch/auth/realms/SBB_Public/protocol/openid-connect/token";
    //   const data = {
    //     grant_type: "client_credentials",
    //     client_id: "22ebc2be",
    //     client_secret: "2c820784f3e28837959abc43120989ca"
    //   };
    //   const response = await axios.post(url, data);

    //   console.log(response);
    // },
    async getPrice() {
      const url =
        "https://booking.app.trasier.com/api/v2/prices?tripIds=JUMyJUI2SEtJJUMyJUI2VCUyNEElM0QxJTQwTyUzREJlcm4lNDBYJTNENzQzOTEyMiU0MFklM0Q0Njk0ODgxNiU0MEwlM0Q4NTA3MDAwJTQwYSUzRDEyOCU0MCUyNEElM0QxJTQwTyUzRExhdXNhbm5lJTQwWCUzRDY2MjkwODYlNDBZJTNENDY1MTY3ODYlNDBMJTNEODUwMTEyMCU0MGElM0QxMjglNDAlMjQyMDE5MDkzMDE3MDQlMjQyMDE5MDkzMDE4MTYlMjRJUisxNSsrKyUyNCUyNDElMjQlQzIlQTdUJTI0QSUzRDElNDBPJTNETGF1c2FubmUlNDBYJTNENjYyOTA4NiU0MFklM0Q0NjUxNjc4NiU0MEwlM0Q4NTAxMTIwJTQwYSUzRDEyOCU0MCUyNEElM0QxJTQwTyUzRE1vbnRyZXV4JTQwWCUzRDY5MTA0MzAlNDBZJTNENDY0MzU4ODMlNDBMJTNEODUwMTMwMCU0MGElM0QxMjglNDAlMjQyMDE5MDkzMDE4MjElMjQyMDE5MDkzMDE4NDIlMjRJUisxOTMxKyUyNCUyNDElMjQlQzIlQjZLQyVDMiVCNiUyNTIzVkUlMjUyMzAlMjUyM0NGJTI1MjMxMDAlMjUyM0NBJTI1MjMwJTI1MjNDTSUyNTIzMCUyNTIzU0lDVCUyNTIzMSUyNTIzJUMyJUI2S0NDJUMyJUI2JTI1MjNWRSUyNTIzMCUyNTIzRVJHJTI1MjMyNTglMjUyM0hJTiUyNTIzMCUyNTIzRUNLJTI1MjM0Mjg3MDQlMjU3QzQyODcwNCUyNTdDNDI4ODAyJTI1N0M0Mjg4MDIlMjU3QzAlMjU3QzAlMjU3QzE2NSUyNTdDNDI4NzAwJTI1N0MxJTI1N0MtMjE0NzQ4MzYzMCUyNTdDMCUyNTIz&passengers=paxa;42;half-fare";
      // const data = {
      //   passengers: ["paxa;42;half-fare"],
      //   qualityOfService: 2,
      //   tripIds: [
      //     "VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89UGFwaWVybcO8aGxlQEw9ODUwNzA5NkBhPTEyOEAkMjAxNzA2MjcyMDMwJDIwMTcwNjI3MjAzNyRTIDcgICAgICQkMSQ="
      //   ]
      // };
      // const config = {
      //   headers: {
      //     "X-Contract-Id": "HAC222P",
      //     "X-Conversation-Id": "cafebabe-0815-4711-1234-ffffdeadbeef"
      //   }
      // };
      const response = await axios.get(url);
      console.log(response.data);
    },
    async getOffer() {
      const url =
        "https://booking.app.trasier.com/api/trip-offers?tripId=JUMyJUI2SEtJJUMyJUI2VCUyNEElM0QxJTQwTyUzREJlcm4lNDBYJTNENzQzOTEyMiU0MFklM0Q0Njk0ODgxNiU0MEwlM0Q4NTA3MDAwJTQwYSUzRDEyOCU0MCUyNEElM0QxJTQwTyUzRExhdXNhbm5lJTQwWCUzRDY2MjkwODYlNDBZJTNENDY1MTY3ODYlNDBMJTNEODUwMTEyMCU0MGElM0QxMjglNDAlMjQyMDE5MDkzMDE3MDQlMjQyMDE5MDkzMDE4MTYlMjRJUisxNSsrKyUyNCUyNDElMjQlQzIlQTdUJTI0QSUzRDElNDBPJTNETGF1c2FubmUlNDBYJTNENjYyOTA4NiU0MFklM0Q0NjUxNjc4NiU0MEwlM0Q4NTAxMTIwJTQwYSUzRDEyOCU0MCUyNEElM0QxJTQwTyUzRE1vbnRyZXV4JTQwWCUzRDY5MTA0MzAlNDBZJTNENDY0MzU4ODMlNDBMJTNEODUwMTMwMCU0MGElM0QxMjglNDAlMjQyMDE5MDkzMDE4MjElMjQyMDE5MDkzMDE4NDIlMjRJUisxOTMxKyUyNCUyNDElMjQlQzIlQjZLQyVDMiVCNiUyNTIzVkUlMjUyMzAlMjUyM0NGJTI1MjMxMDAlMjUyM0NBJTI1MjMwJTI1MjNDTSUyNTIzMCUyNTIzU0lDVCUyNTIzMSUyNTIzJUMyJUI2S0NDJUMyJUI2JTI1MjNWRSUyNTIzMCUyNTIzRVJHJTI1MjMyNTglMjUyM0hJTiUyNTIzMCUyNTIzRUNLJTI1MjM0Mjg3MDQlMjU3QzQyODcwNCUyNTdDNDI4ODAyJTI1N0M0Mjg4MDIlMjU3QzAlMjU3QzAlMjU3QzE2NSUyNTdDNDI4NzAwJTI1N0MxJTI1N0MtMjE0NzQ4MzYzMCUyNTdDMCUyNTIz&passengers=paxa;42;half-fare";
      const response = await axios.get(url);
      console.log(response.data);
    },
    async prebook() {
      const url = "https://booking.app.trasier.com/api/v2/prebookings";
      const data = [
        {
          offerPrebookings: [
            {
              offerId: 47110815,
              salesParameter: {
                STS_HERKUNFTSLAND: "DE"
              }
            }
          ],
          passenger: {
            dateOfBirth: "1980-05-20",
            firstname: "Hans",
            id: 1,
            lastname: "Mustermann"
          }
        }
      ];
      const config = {
        headers: {
          "X-Contract-Id": "HAC222P",
          "X-Conversation-Id": "cafebabe-0815-4711-1234-ffffdeadbeef"
        }
      };
      const response = await axios.post(url, data, config);
      console.log(response.data);
    }
  }
};
</script>
<style lang="sass">
$primary: #eb0000
$secondary: #666
$secondary-light: #f6f6f6
$font-secondary: #2c3e50
$font-secondary-dark: #233240

nav
  background: $primary

nav::first-child()
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

form 
  text-align: left
  padding: 15px
  color: $font-secondary
  background: $secondary-light
  border-radius: 2px


.vdp-datepicker 
  input 
    width: 100%

.input-wrapper
  margin-bottom: 1rem

.container
  margin-top: 1rem

.old-price
  text-decoration: line-through
  color: #b8b8b8
.new-price
  margin: 0 16px
  color: $primary
  font-size: 50px
  line-height: 50px
  font-weight: 700

.input-wrapper img
  // max-width: 40%
  // max-height: 70px

.image-selection__wrapper
  width: 100%
  text-align: center
  display:grid
  grid-template-columns: 1fr auto 1fr 

  h3
    padding: 8px
  
form img
  border-radius: 5px

img.selected
  // border: solid 2px $primary
  // border-radius: 5px
  box-shadow: 0px 0px 1px 2px $primary;

img.mask
  border-radius: 0px !important

div.selected
  color: $font-secondary-dark
  font-weight: bold

button.primary
  background-color: $primary!important

button.primary:active
  background-color: $primary !important

.card-footer
  background: $secondary!important
  color: $font-secondary!important

section
  padding: 8px

p.white-text
  font-size: 20px
  margin-bottom: 40px !important

.logo
  height: 40px

.navbar-brand
  padding: 0 !important

h5
  padding-top: 5px

nav a
  color: white
</style>