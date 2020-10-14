<template>
  <div class="initial-menu">
    <h1>{{ msg }}</h1>

    <div class="buttons-container">
      <router-link to="/patient" tag="div">
        <StandardButton text="Sou Paciente" btnStyle="primary" />
      </router-link>
      <router-link to="/medical" tag="div">
        <StandardButton text="Sou Médico" btnStyle="secondary" />
      </router-link>
    </div>
  </div>
</template>

<script>
import StandardButton from "@/components/atoms/Button.vue";

export default {
  name: "InitialMenu",
  props: {
    msg: String
  },
  components: {
    StandardButton
  }
};
</script>

<style scoped lang="scss">
.initial-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .buttons-container {
    width: 50%;
    @media screen and (min-height: 700px) {
      width: 90%;
    }

    .button {
      margin: 0.5em 0;
    }
  }
}
</style>
