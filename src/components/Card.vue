<template>
  <v-card max-width="375" class="mx-auto">
    <v-img src="@/assets/produto.png" height="250px" dark>
        <v-card-title class="justify-end">
          <v-btn @click="emitEditEvent(data)" dark icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn @click="emitDeleteEvent(data)" dark icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-title class="white--text">
          <div class="text-h4 pt-12">{{ data.name }}</div>
        </v-card-title>

    </v-img>
    <v-card-text><List :data="data" /></v-card-text>
  </v-card>
</template>
<script>
import List from "./List.vue";
export default {
  components: { List },
  props: {
    data: Object,
    icon: String,
  },
  methods: {
    emitEditEvent(item) {
      this.$emit("edit-popup", item);
    },
    emitDeleteEvent(item) {
      this.$emit("delete-popup", item);
    },
  },
};
</script>