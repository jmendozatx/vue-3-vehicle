// Utilities
import { createPinia } from 'pinia'
import { useVehicleStore } from './store/vehicle.js'

const pinia = createPinia()

// Register the vehicle store with Pinia
pinia.useStore(useVehicleStore)

export default pinia
