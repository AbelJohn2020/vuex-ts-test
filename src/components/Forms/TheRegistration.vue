<template>
  <div id="form" class="review-a-form">
    <h2>Ticket Nº {{ idx + 1 }}</h2>
    <div class="form-review">
      <label for="name">Name:</label>
      <h3>{{ $store.state.users[idx].fieldName.name }}</h3>
    </div>
    <div class="form-review">
      <label for="lastname">Lastname:</label>
      <h3>{{ $store.state.users[idx].fieldLastname.lastname }}</h3>
    </div>
    <div class="form-review">
      <label for="nationality">Nationality:</label>
      <h3 :class="{upper: upper, cap: !upper}">{{ $store.state.users[idx].fieldNationality.nationality }}</h3>
    </div>
    <div class="form-review">
      <label for="identification">Identification:</label>
      <h3 class="identification">{{ $store.state.users[idx].fieldIdentification.identification }}</h3>
    </div>
    <div class="form-review">
      <label for="document">Document:</label>
      <h3>{{ $store.state.users[idx].fieldDocument.document }}</h3>
    </div>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';

@Options({
  props: ['user', 'id'],

  data() {
    return {
      idx: this.id - 1,
    };
  },

  computed: {
    upper() { return this.$store.state.users[this.idx].fieldNationality.nationality.length < 4 ? true : false },
  },
})

export default class TheRegistration extends Vue {
}
</script>

<style scoped>
  h2 {
    border-bottom: 1px solid #0076bb;
    padding: 0 0 1rem 0;
    margin: 0 0 2rem 0;
  }
  .form-review {
    margin: 0.4rem 0;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .identification,
  .upper {
    text-transform: uppercase;
    }

  .cap {
    text-transform: capitalize;
  }

  h3 {
    padding: 0;
    margin: 0.4rem 0 0.8rem 0.8rem;
  }

  label {
    box-sizing: border-box;
    font-weight: bold;
    text-align: start;
    padding: 0 0 8px 0;
  }
</style>