<template>
  <div class="delete-modal">
    <v-btn @click="deleteModal = true" color="error">
      <v-icon>mdi-trash-can</v-icon>
    </v-btn>
    <v-dialog v-model="deleteModal" width="500">
      <v-card>
        <v-card-title class="text-h5">Are you sure?</v-card-title>
        <v-card-text>
          This will delete the {{ vehicle.year }}
          {{ vehicle.make }}
          {{ vehicle.model }}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-1" color="grey" text @click="deleteModal = false">Cancel</v-btn>
          <v-btn color="error" @click="vehicleStore.deleteVehicle(vehicle.vin)">Confirm Delete</v-btn>
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

const deleteModal = ref(false);
const vehicleStore = useVehicleStore();
</script>
