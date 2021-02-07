import { Publisher, OrderCancelledEvent, Subjects } from '@mattickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
