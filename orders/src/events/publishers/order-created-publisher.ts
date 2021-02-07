import { Publisher, OrderCreatedEvent, Subjects } from '@mattickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
