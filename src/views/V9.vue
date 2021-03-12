<template>
  <div class="bg">
    <div class="container">
      <img src="http://www.welovesuphan.com/images/123449734.png" />
      <b-form>
        <b-form-group id="input-group-2" label="Car ID" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="CarID"
            type="CarID"
            placeholder="Enter CarID"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Band" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="Band"
            type="text"
            placeholder="Enter Band"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="color"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="color"
            type="text"
            placeholder="Enter color"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Price" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="Price"
            placeholder="Enter Price"
            type="Number"
            required
          ></b-form-input>
        </b-form-group>

        <b-button class="btn" variant="primary" @click="onSubmit">sign up</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { db } from "@/main.js";
export default {
  data() {
    return {
      CarID: "",
      Band: "",
      color: "",
      Price: "",
    };
  },
  methods: {
    onSubmit() {
      var form = {
        CarID: this.CarID,
        Band: this.Band,
        color: this.color,
        Price: this.Price,
      };
      db.collection("bee666").doc().set(form);
    },
  },
};
</script>

<style>
.container {
  background: rgb(166, 247, 247);
}
</style>