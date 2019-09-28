<template>
  <div class="home">
    <!-- <HelloWorld /> -->
    <mdb-btn @click="getLocationByName(startLocation)">Get Location by name (Bern)</mdb-btn>
    <mdb-btn @click="getLocationByName(targetLocation)">Get Location by name (Montreux)</mdb-btn>
    <mdb-btn @click="getTrips">Get Trip (Bern-Montreux) Time given</mdb-btn>
    <mdb-btn @click="getToken">Get Token</mdb-btn>
    <mdb-btn @click="getPrice">Get Price</mdb-btn>
    <mdb-btn @click="getOffer">Get Offer</mdb-btn>
    <mdb-btn @click="prebook">Prebook</mdb-btn>
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue";
import { mdbBtn } from "mdbvue";

export default {
  name: "home",
  data() {
    return {
      startLocation: "bern",
      targetLocation: "montreux"
    };
  },
  components: {
    HelloWorld,
    mdbBtn
  },
  methods: {
    async getLocationByName(locationName) {
      const url = `https://booking.app.trasier.com/api/locations?name=${locationName}`;
      const response = await axios.get(url);

      console.log(response.data);
    },
    async getTrips() {
      const url =
        "https://booking.app.trasier.com/api/trips?originId=8507000&destinationId=8501300&date=2019-09-19&time=12:00";
      const response = await axios.get(url);

      console.log(response.data);
    },
    async getToken() {
      const url =
        "http://sso-int.sbb.ch/auth/realms/SBB_Public/protocol/openid-connect/token";
      const data = {
        grant_type: "client_credentials",
        client_id: "22ebc2be",
        client_secret: "2c820784f3e28837959abc43120989ca"
      };
      const response = await axios.post(url, data);

      console.log(response);
    },
    // async getPrice() {
    //   const url = "http://booking.app.trasier.com/api/v2/prices";
    //   const data = {
    //     passengers: ["paxa;42;half-fare"],
    //     qualityOfService: 2,
    //     tripIds: [
    //       "VCRBPTFATz1CZXJuQEw9ODUwNzAwMEBhPTEyOEAkQT0xQE89UGFwaWVybcO8aGxlQEw9ODUwNzA5NkBhPTEyOEAkMjAxNzA2MjcyMDMwJDIwMTcwNjI3MjAzNyRTIDcgICAgICQkMSQ="
    //     ]
    //   };
    //   const config = {
    //     headers: {
    //       "X-Contract-Id": "HAC222P",
    //       "X-Conversation-Id": "cafebabe-0815-4711-1234-ffffdeadbeef"
    //     }
    //   };
    //   const response = await axios.post(url, data);
    //   console.log(response.data);
    // }
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