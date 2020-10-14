<template>
  <div class="home">
    <InitialMenu msg="Bem-vindo a plataforma de agendamento!"/>
  </div>
</template>

<script>
import InitialMenu from '@/components/organisms/InitialMenu.vue'

export default {
  name: 'Home',
  components: {
    InitialMenu
  }
}
</script>
