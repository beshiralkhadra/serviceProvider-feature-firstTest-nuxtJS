<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-icon>
          <v-icon
            :class="item.color"
            style="cursor: pointer"
            @click="item.method"
            >{{ item.icon }}</v-icon
          >
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Delete",
          icon: "mdi-delete",
          method: this.deleteBtn,
          color: "red--text",
        },
        { text: "Update", icon: "mdi-update", method: this.updateBtn },
      ],
    };
  },
  methods: {
    viewBtn() {
      this.$emit("viewBtn");
    },
    deleteBtn() {
      this.$emit("deleteBtn");
    },
    updateBtn(event) {
      this.$emit("updateBtn", event);
    },
  },
};
</script>
<style scoped></style>
