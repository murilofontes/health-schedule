<template>
  <div class="about">
    <h1>Paciente</h1>
    <SearchBar v-if="doctorsAvailable.length > 0" label="Selecione um médico" :dataArray="[{name:'John'}]" field="name" />
  </div>
</template>

<script>
import SearchBar from "@/components/atoms/SearchBar.vue";
import patientService from "@/components/api/patient.js";

export default {
  name: "Paciente",
  components: {
    SearchBar
  },
  data: () => {
    return {
      doctorsAvailable: {}
    };
  },
  methods: {
    getAllDoctorsAvailable() {
      patientService.getAvailableDoctors().then(response => {
        console.log(response);
        this.doctorsAvailable = response
      });
    }
  },
  mounted() {
    console.log('mounted')
    this.getAllDoctorsAvailable();
  }
};
</script>