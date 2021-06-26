<template>
  <v-list>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo"> mdi-currency-usd </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title v-text="data.price"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo"> mdi-image-text </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title v-text="data.description"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo"> mdi-counter </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title v-text="data.quantity"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo"
          >{{
            data.quantity > 0
              ? "mdi-checkbox-marked-outline"
              : "mdi-alert-remove-outline"
          }}
        </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title
          v-text="data.quantity > 0 ? 'active' : 'out of product'"
        ></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>