import { Router } from "express"
import { getDeliveries, addDelivery, updateDelivery, deleteDelivery } from "../controllers/deliveries/deliveries"

const router: Router = Router()

router.get("/deliveries", getDeliveries)

router.post("/new", addDelivery)

router.put("/edit/:id", updateDelivery)

router.delete("/delete/:id", deleteDelivery)

export default router
