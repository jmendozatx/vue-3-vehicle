<template>
  <v-card flat class="pa-4 mb-4 d-flex justify-content align-center">
    <v-img contain class="mr-4" max-width="150" :src="`/BodyClassImages/${vehicle.bodyClassId}.png`" />
    <div class="vehicle-details-container">
      <strong class="vehicle-vin">{{ vehicle.vin }}</strong>
      <div>
        {{ vehicle.year }}
        {{ vehicle.make }}
        {{ vehicle.model }}
      </div>
    </div>
    <div class="vehicle-actions ml-auto">
      <v-btn @click="openDeleteModal(vehicle)" color="error" class="mr-4">
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>
      <v-btn @click="openEditVehicleModal(vehicle)" color="success">
        <v-icon left>mdi-pencil</v-icon>Edit
      </v-btn>
    </div>
  </v-card>
</template>

<script setup>
// Props
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  vehicle: Object,
});

// Emits
const emits = defineEmits(['openDeleteModal', 'openEditVehicleModal']);

const openDeleteModal = (vehicle) => {
  emits('openDeleteModal', vehicle);
};

const openEditVehicleModal = (vehicle) => {
  emits('openEditVehicleModal', vehicle);
};
</script>
