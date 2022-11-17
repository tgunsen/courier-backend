import { Response, Request } from "express"
import { IDelivery } from "../../types/delivery"
import Delivery from "../../models/delivery"

const getDeliveries = async (req: Request, res: Response): Promise<void> => {
  try {
    const deliveries: IDelivery[] = await Delivery.find()
    res.status(200).json({ deliveries })
  } catch (error) {
    throw error
  }
}

const addDelivery = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IDelivery, "originAddress" | "deliveryAddress" | "sender">

    const delivery: IDelivery = new Delivery({
      originAddress: body.originAddress,
      deliveryAddress: body.deliveryAddress,
      sender: body.sender
    })

    const newDelivery: IDelivery = await delivery.save()
    const allDeliveries: IDelivery[] = await Delivery.find()

    res
      .status(201)
      .json({ message: "Delivery added", delivery: newDelivery, deliveries: allDeliveries})
  } catch (error) {
    throw error
  }
}

const updateDelivery = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: {id},
      body,
    } = req
    const updateDelivery: IDelivery | null = await Delivery.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allDeliveries: IDelivery[] = await Delivery.find()
    res.status(200).json({
      message: "Delivery ppdated",
      delivery: updateDelivery,
      deliveries: allDeliveries
    })
  } catch (error) {
    throw error
  }
}

const deleteDelivery = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedDelivery: IDelivery | null = await Delivery.findByIdAndRemove(
      req.params.id
    )
    const allDeliveries: IDelivery[] = await Delivery.find()
    res.status(200).json({
      message: "Delivery deleted",
      delivery: updateDelivery,
      deliveries: allDeliveries
    })
  } catch (error) {
    throw error
  }
}

export { getDeliveries, addDelivery, updateDelivery, deleteDelivery }
