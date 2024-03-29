import { defineStore } from 'pinia'

export const useVehicleStore = defineStore({
    id: 'vehicleStore',
    state: () => ({
        vehicles: [
            {
                vin: "JH4DB8590SS001561",
                year: "1995",
                make: "Acura",
                model: "Integra",
                bodyClassId: "13"
            },
            {
                vin: "3TMMU4FN8CM049190",
                year: "2012",
                make: "TOYOTA ",
                model: "TACOMA",
                bodyClassId: "60"
            }
        ]
    }),

    getters: {
        vehicleList() {
            return this.$state.vehicles
        }
    },

    actions: {
        addVehicle(newVehicle) {
            this.$state.vehicles.unshift({
                vin: newVehicle.vin,
                year: newVehicle.year,
                make: newVehicle.make,
                model: newVehicle.model,
                bodyClassId: newVehicle.bodyClassId
            })
        },

        deleteVehicle(vehicleVin) {
            let removedEl = this.$state.vehicles.findIndex((x) => x.vin == vehicleVin);
            this.$state.vehicles.splice(removedEl, 1);
        },

        updateVehicle(vehicle) {
            let vin = vehicle.vin;
            let findEl = this.$state.vehicles.find((x) => x.vin == vin);
            findEl.vin = vehicle.vin;
            findEl.year = vehicle.year;
            findEl.make = vehicle.make;
            findEl.model = vehicle.model;
            findEl.bodyClassId = vehicle.bodyClassId;
        },
    },
})
