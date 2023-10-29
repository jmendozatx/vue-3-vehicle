<template>
  <div class="vehicle-card">
    <v-card flat class="pa-4 mb-4">
      <v-img contain class="mr-4" :src="`/BodyClassImages/${vehicle.bodyClassId}.png`" />
      <div class="vehicle-details-container">
        <strong class="vehicle-vin">{{ vehicle.vin }}</strong>
        <div>
          {{ vehicle.year }}
          {{ vehicle.make }}
          {{ vehicle.model }}
        </div>
      </div>
      <div class="vehicle-actions ml-auto">
        <modal-delete :vehicle="vehicle" class="mr-2" />
        <modal-edit :vehicle="vehicle" />
      </div>
    </v-card>
  </div>
</template>

<script setup>
// Imports
import ModalDelete from "@/components/ModalDelete.vue";
import ModalEdit from "@/components/ModalEdit.vue";

// Props
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  vehicle: Object,
});
</script>

<style lang="scss">
.vehicle-card {
  .vehicle-actions {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .v-card {
    text-align: center;
  }

  @media (min-width: 768px) {
    .v-card {
      display: flex;
      align-items: center;
      justify-content: center;

      .v-responsive.v-img {
        max-width: 150px;
      }
    }
  }

}
</style>