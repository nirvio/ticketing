import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@mattickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
