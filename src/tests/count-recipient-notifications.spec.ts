import { CountRecipientNotifications } from '@app/use-cases/count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-fatory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Count recipients notifications', () => {
  it('Should be able to count recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
