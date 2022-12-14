import { Notification } from 'src/app/entities/notification';
import { SendNotification } from '../src/app/use-cases/send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'This is a notification.',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notifications).toHaveLength(1);
    expect(notifications).toBeTruthy();
  });
});
