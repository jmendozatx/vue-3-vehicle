<template>
  <div class="add-vehicle mb-4">
    <h2 class="text-h4 text-blue-darken-2 mb-4">Add Vehicle</h2>
    <v-card flat class="add-vehicle pa-10">
      <div class="description mb-4 text-center">
        <p>
          Enter your vin to search for your vehicle.
          <br />Your vehicle will be automatically added to the list of Active Vehicles
          below.
        </p>
      </div>
      <div class="vin-input-container">
        <v-text-field
          prepend-icon="mdi-car-outline"
          label="Enter VIN"
          v-model="userVin"
          outlined
          max-width="400px"
        />
        <v-btn
          size="x-large"
          :loading="loading"
          :disabled="loading"
          class="ml-4"
          color="info"
          @click="search"
        >
          Search
          <template #loader>
            <span class="custom-loader">
              <v-icon light>mdi-cached</v-icon>
            </span>
          </template>
        </v-btn>
      </div>

      <a
        href="https://vingenerator.org/"
        target="_blank"
        class="grey--text text--lighten-1"
      >VIN Generator</a>
      <div class="error" v-show="error">{{ errorMsg }}</div>
    </v-card>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import { useVehicleStore } from "@/store/vehicle";

export default {
  name: "AddVehicle",
  setup() {
    const loading = ref(false);
    const fullVehicle = ref({
      vin: "",
      year: "",
      make: "",
      model: "",
      bodyClassId: "",
    });

    const baseApiUrl = "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/";
    const userVin = ref(null);
    const error = ref(null);
    const errorMsg = ref("");

    const store = useVehicleStore();

    const search = () => {
      loading.value = true;
      error.value = null;
      errorMsg.value = "";

      axios
        .get(`${baseApiUrl}${userVin.value}?format=json`)
        .then((response) => {
          const vehicleResults = response.data.Results;

          fullVehicle.value.year = vehicleResults.find(
            (x) => x.Variable === "Model Year"
          ).Value;

          fullVehicle.value.make = vehicleResults.find(
            (x) => x.Variable === "Make"
          ).Value;

          fullVehicle.value.model = vehicleResults.find(
            (x) => x.Variable === "Model"
          ).Value;

          fullVehicle.value.bodyClassId = vehicleResults.find(
            (x) => x.Variable === "Body Class"
          ).ValueId;

          fullVehicle.value.vin = userVin.value;
        })
        .catch((err) => {
          error.value = true;
          errorMsg.value = err.message;
        })
        .finally(() => {
          userVin.value = "";
          loading.value = false;
          store.addVehicle(fullVehicle.value);
        });
    };

    return {
      loading,
      fullVehicle,
      userVin,
      error,
      errorMsg,
      search,
    };
  },
};
</script>


<style lang="scss">
.add-vehicle {
  .vin-input-container {
    display: flex;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>