<template>
  <div class="vehicle-list">
    <h3 class="text-h5 mb-4">Active vehicles ({{ vehicles.length }})</h3>
    <transition-group name="fade" v-if="vehicles.length >= 1">
      <vehicle-card v-for="vehicle in vehicles" :key="vehicle.vin" :vehicle="vehicle" />
    </transition-group>
    <div v-else>
      <v-card class="pa-4" flat>
        <strong>There are no vehicles to display</strong>
      </v-card>
    </div>


  </div>
</template>

<script setup>
import { useVehicleStore } from "@/store/vehicle";
import VehicleCard from "@/components/VehicleCard.vue";

const vehicleStore = useVehicleStore();

const vehicles = vehicleStore.vehicles;
</script>

<style lang="scss">
.vehicle-list {
  .vehicle-details-container {
    text-transform: uppercase;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
}
</style>