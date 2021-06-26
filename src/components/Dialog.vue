<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5"><slot name="title"></slot></span>
      </v-card-title>
      <v-card-text>
        <slot name="content"></slot>
      </v-card-text>
      <slot name="actions">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('handle-cancel')">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="$emit('handle-confirm')">
            Confirm
          </v-btn>
        </v-card-actions>
      </slot>
    </v-card>
  </v-dialog>
</template><script>
export default {
  components: {},
  props: {
    dialog: Boolean,
  },
  data: () => ({}),
};
</script>