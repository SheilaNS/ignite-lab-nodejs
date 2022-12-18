import { CancelNotification } from '@app/use-cases/cancel-notification';
import { NotificationNotFound } from '@app/use-cases/errors/not-found-error';
import { makeNotification } from '@test/factories/notification-fatory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Cancel notification', () => {
  it('Should be able to canceel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('Should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
