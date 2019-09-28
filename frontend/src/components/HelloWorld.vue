<template>
  <form>
    <p class="h4 text-center mb-4">Sign in</p>
    <div class="grey-text">
      <mdb-input label="Your email" type="email" />
      <mdb-input label="Your password" type="password" />
    </div>
    <div class="text-center">
      <mdb-btn>Login</mdb-btn>
    </div>
  </form>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";

export default {
  name: "HelloWorld",
  components: {
    mdbInput,
    mdbBtn
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
