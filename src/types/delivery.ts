import { Document } from "mongoose"

export interface IDelivery extends Document {
  originAddress: string
  deliveryAddress: string
  // deliveryArrivalFrom: Date                      // earliest time to deliver package
  // deliveryArrivalUntil: Date                     // latest time to deliver package
  // deliveryStatus: string                         // [delivered,]
  // description: string                            // description of package
  // hasDeliveryMethod: string                      // [bike, car, truck]
  sender: string                                 // sender-user.object
  // courier: string                                 // courier-user.object
}
