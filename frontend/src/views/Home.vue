<template>
  <div class="home">
    <mdb-navbar color="indigo" dark>
      <mdb-navbar-brand href>BBS</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" active>Home</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <section v-if="views.isSearchLocation">
      <form @submit.prevent>
        <div class="grey-text">
          <div class="form-group">
            <label for="example1">Origin</label>
            <input
              type="text"
              id="example1"
              class="form-control"
              :value="startLocation"
              @input="getStartLocation($event.target.value)"
            />
          </div>
          <div class="input-wrapper">
            <label for="date">Start date</label>
            <Datepicker v-model="selectedDate" class="form-control" format="yyyy-MM-dd" />
          </div>

          <div class="input-wrapper">
            <label for="time">Time</label>
            <input
              type="time"
              id="appt"
              name="appt"
              class="form-control"
              required
              v-model="selectedTime"
            />
          </div>
        </div>
        <mdb-btn @click="getTrips">Let's go</mdb-btn>
      </form>
    </section>
    <section v-if="views.isSearchTrip">
      <div class="trip-wrapper">
        <mdb-container v-for="(trip,index) in trips">
          <mdb-row>
            <mdb-col sm="4">
              <mdb-card>
                <mdb-view hover>
                  <a href="#!">
                    <mdb-card-image
                      :src="'./'+ selectedCategory + (index % 2)+'.png'"
                      alt="Card image cap"
                    ></mdb-card-image>
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <hr />
                  <p class="font-small grey-dark-text mb-0">
                    <div class="contextual-deals-card__content-wrapper__dealpricing">
                      <span class="old-price">39</span>
                      <span class="new-price">19</span>
                      <span>CHF</span>
                    </div>
                  </p>
                  <mdb-btn color="primary" @click="book">Book</mdb-btn>
                </mdb-card-body>
                <mdb-card-footer color="mdb-color" class="lighten-3 p-0 text-center">
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

    <mdb-btn @click="getLocationByName(startLocation)">Get Location by name (Bern)</mdb-btn>
    <mdb-btn @click="getTrips">Get Trip (Bern-Montreux) Time given</mdb-btn>
    <!-- <mdb-btn @click="getToken">Get Token</mdb-btn> -->
    <mdb-btn @click="getPrice">Get Price</mdb-btn>
    <mdb-btn @click="getOffer">Get Offer</mdb-btn>
    <mdb-btn @click="prebook">Prebook</mdb-btn>
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
      selectedCategory: "natur",
      viewFlags: {
        isSearchLocation: true,
        isSearchTrip: false
      }
    };
  },
  computed: {
    views: {
      get() {
        return {
          isSearchLocation: this.viewFlags.isSearchLocation,
          isSearchTrip: this.viewFlags.isSearchTrip
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
        isSearchTrip: true
      };
      console.log(response.data);
    },
    book() {
      console.log("booked");
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
form 
  border: 1px solid #e0e0e0
  padding: 15px

.vdp-datepicker 
  border-bottom: 1px solid
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
  color: #e64142
  font-size: 50px
  line-height: 50px
  font-weight: 700
</style>