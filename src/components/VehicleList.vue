<template>
  <div class="vehicle-list">
    <h3 class="text-h5 mb-4">Active vehicles ({{ vehicles.length }})</h3>
    <transition-group name="fade" v-if="vehicles.length >= 1">
      <v-card v-for="vehicle in vehicles" flat :key="vehicle.vin" class="pa-4 mb-4 d-flex justify-content align-center">
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
    </transition-group>
    <div v-else>
      <v-card class="pa-4" flat>
        <strong>There are no vehicles to display</strong>
      </v-card>
    </div>
    <!-- MODALS -->
    <v-dialog v-model="deleteModal" width="500">
      <v-card>
        <v-card-title class="text-h5">Are you sure?</v-card-title>
        <v-card-text>
          This will delete the {{ selectedVehicle.year }}
          {{ selectedVehicle.make }}
          {{ selectedVehicle.model }}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-1" color="grey" text @click="deleteModal = false">Cancel</v-btn>
          <v-btn color="error" @click="deleteVehicle()">Confirm Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editModal" width="500">
      <v-card>
        <v-card-title class="text-h5 mb-3">Edit Vehicle Information</v-card-title>
        <v-card-text>
          <v-text-field label="VIN" v-model="selectedVehicle.vin" outlined max-width="400px" />
          <v-text-field label="Year" v-model="selectedVehicle.year" outlined max-width="400px" />
          <v-text-field label="Make" v-model="selectedVehicle.make" outlined max-width="400px" />
          <v-text-field label="Model" v-model="selectedVehicle.model" outlined max-width="400px" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-1" color="grey" text @click="editModal = false">Cancel</v-btn>
          <v-btn color="success" @click="updateVehicle()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useVehicleStore } from "@/store/vehicle";

export default defineComponent({
  name: "VehicleList",
  setup() {
    const selectedVehicle = ref({});
    const deleteModal = ref(false);
    const editModal = ref(false);

    const vehicleStore = useVehicleStore();
    const callMe = (text) => {
      alert(text);
    };

    const openDeleteModal = (vehicle) => {
      selectedVehicle.value = vehicle;
      deleteModal.value = true;
    };

    const deleteVehicle = () => {
      vehicleStore.deleteVehicle(selectedVehicle.value.vin);
      deleteModal.value = false;
    };

    const openEditVehicleModal = (vehicle) => {
      selectedVehicle.value = vehicle;
      editModal.value = true;
    };

    const updateVehicle = () => {
      editModal.value = false;
      vehicleStore.updateVehicle(selectedVehicle.value);
    };

    return {
      callMe,
      selectedVehicle,
      deleteModal,
      deleteVehicle,
      editModal,
      openDeleteModal,
      openEditVehicleModal,
      updateVehicle,
      vehicles: vehicleStore.vehicles,
    };
  },
});
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
