import { Content } from '../src/app/entities/content';
import { Notification } from '../src/app/entities/notification';

describe('Create notification', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade!'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
