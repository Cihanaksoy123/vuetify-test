<template>
  <v-row class="text-center">
    <v-col cols="12" md="8" offset-md="2">
      <v-card class="mx-auto">
        <v-card-title> Product Form </v-card-title>
        <v-card-text>
          <ProductForm />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import ProductForm from "../components/ProductForm.vue";
export default {
  components: {
    ProductForm,
  },
};
</script>