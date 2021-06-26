<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            class="ma-0 pa-0"
            v-model="item.name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            class="ma-0 pa-0"
            v-model="item.quantity"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Quantity"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            class="ma-0 pa-0"
            v-model="item.price"
            :counter="10"
            :rules="priceRules"
            label="price"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-textarea
            class="ma-0 pa-0"
            rows="2"
            name="input-7-1"
            label="Description"
            v-model="item.description"
            hint="Hint text"
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="12">
          <v-checkbox
            class="ma-0 pa-0"
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>
        </v-col>
        <v-col cols="12" md="12">
          <v-btn color="success" class="mr-2" @click="handleConfirm()">
            Confirm
          </v-btn>
          <v-btn color="gray" class="ml-2" @click="handleCancel()">
            Cancel</v-btn
          >
        </v-col>
        <!-- <v-col cols="6" md="6">
                
              </v-col> -->
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    let temp = {
      id: "",
      name: "",
      quantity: null,
      price: null,
      description: "",
    };
    if (this.data !== undefined) {
      temp = JSON.parse(JSON.stringify(this.data));
    }
    return {
      valid: true,
      item: temp,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      priceRules: [
        (v) => !!v || "Price is required",
        (v) => Number.isInteger(Number(v)) || "price must be numeric",
      ],
      items: [1, 2, 3, 4],
      checkbox: false,
    };
  },
  watch: {
    data: function (newVal, oldVal) {
      // watch it
      this.item = JSON.parse(JSON.stringify(newVal));
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    handleConfirm() {
      this.$emit("handle-confirm", this.item);
    },
    handleCancel() {
      this.$emit("handle-cancel");
    },
  },
};
</script>