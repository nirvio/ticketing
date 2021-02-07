import { Subjects, Publisher, PaymentCreatedEvent } from '@mattickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
