<template>
  <b-field :label="label">
    <b-autocomplete
      rounded
      v-model="name"
      :data="filteredDataArray"
      :placeholder="placeholder"
      icon="magnify"
      clearable
      @select="option => selectedItem = option"
    >
      <template slot="empty">Nenhum resultado encontrado</template>
    </b-autocomplete>
  </b-field>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    dataArray: {
      type: Array
    },
    field: {
      type: String
    }
  },
  data: () => {
    return {
      name: '',
      selectedItem: {}
    };
  },
  watch: {
    selectedItem(newVal) {
      this.$emit("selected", newVal);
    }
  },
  computed: {
    filteredDataArray: function() {
      return this.dataArray.filter(option => {
        return (
          option[this.field]
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  }
};
</script>

