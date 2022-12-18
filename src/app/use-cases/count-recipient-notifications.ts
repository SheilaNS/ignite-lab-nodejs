import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface CountRecipientNdotificationsRequest {
  recipientId: string;
}

interface CountRecipientNdotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNdotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNdotificationsRequest,
  ): Promise<CountRecipientNdotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
