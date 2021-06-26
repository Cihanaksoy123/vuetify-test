<template>
  <v-row>
    <!-- Pop up will show up if you hit edit button -->
    <Dialog v-if="operation == 'edit'" :dialog="dialog">
      <template v-slot:title> Edit item... </template>
      <template v-slot:content>
        <ProductForm
          @handle-confirm="updateItem($event)"
          @handle-cancel="closePopup()"
          :data="selectedItem"
        />
      </template>
      <template v-slot:actions>
        <div></div>
      </template>
    </Dialog>

    <!-- Pop up will show up if you hit delete button -->
    <Dialog
      v-if="operation == 'delete'"
      :dialog="dialog"
      @handle-confirm="deleteItem()"
      @handle-cancel="closePopup()"
    >
      <template v-slot:title>
        Are you sure You want to delete this item ?
      </template>
      <template v-slot:content>
        <List :data="selectedItem" />
      </template>
    </Dialog>

    <v-col v-for="item in items" :key="item.id" cols="12" md="4">
      <Card
        @edit-popup="editPopup(item)"
        @delete-popup="deletePopup(item)"
        :data="item"
      />
    </v-col>
  </v-row>
</template>

<script>
import Card from "../components/Card.vue";
import Dialog from "../components/Dialog.vue";
import ProductForm from "../components/ProductForm.vue";
import List from "../components/List.vue";
export default {
  data: () => ({
    dialog: false,
    items: [
      {
        id: 1,
        name: "Product 1",
        quantity: 5,
        price: 1000,
        description: "cool product",
      },
      {
        id: 2,
        name: "Product 2",
        quantity: 50,
        price: 230,
        description: "good to go",
      },
      {
        id: 3,
        name: "Product 3",
        quantity: 0,
        price: 345,
        description: "new",
      },
      {
        id: 4,
        name: "Product 4",
        quantity: 45,
        price: 10,
        description: "reasonable price",
      },
      {
        id: 5,
        name: "Product 5",
        quantity: 124,
        price: 405,
        description: "necessary",
      },
    ],
    selectedItem: null,
    operation: null,
  }),
  methods: {
    closePopup() {
      this.dialog = false;
      this.operation = null;
    },
    deletePopup(itemToDelete) {
      this.selectedItem = itemToDelete;
      this.operation = "delete";
      this.dialog = true;
    },
    editPopup(itemToEdit) {
      this.selectedItem = itemToEdit;
      this.operation = "edit";
      this.dialog = true;
    },
    updateItem(updatedItem) {
      let foundIndex = this.items.findIndex(
        (item) => item.id == updatedItem.id
      );
      this.items[foundIndex] = updatedItem;
      this.closePopup();
    },
    deleteItem() {
      this.items = this.items.filter((item) => item !== this.selectedItem);
      this.closePopup();
    },
  },
  components: {
    Card,
    Dialog,
    ProductForm,
    List,
  },
};
</script>

<style>
</style>