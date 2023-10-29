<template>
  <div class="edit-modal">
    <v-btn @click="editModal = true;" color="success">
      <v-icon left>mdi-pencil</v-icon>Edit
    </v-btn>
    <v-dialog v-model="editModal" width="500">
      <v-card>
        <v-card-title class="text-h5 mb-3">Edit Vehicle Information</v-card-title>
        <v-card-text>
          <v-text-field label="VIN" v-model="vehicle.vin" outlined max-width="400px" />
          <v-text-field label="Year" v-model="vehicle.year" outlined max-width="400px" />
          <v-text-field label="Make" v-model="vehicle.make" outlined max-width="400px" />
          <v-text-field label="Model" v-model="vehicle.model" outlined max-width="400px" />
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

<script setup>
import { ref } from 'vue';
import { useVehicleStore } from "@/store/vehicle";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  vehicle: {
    type: Object,
    required: true,
  },
})

const vehicle = ref(props.vehicle);
const editModal = ref(false);

const updateVehicle = () => {
  editModal.value = false;
  vehicleStore.updateVehicle(vehicle.value);
};

const vehicleStore = useVehicleStore();
</script>

