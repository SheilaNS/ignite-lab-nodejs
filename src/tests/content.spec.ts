import { Content } from '../app/entities/content';

describe('Create content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade!');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification with less than 5 characters', () => {
    expect(() => new Content('Olá!')).toThrow();
  });

  it('Should not be able to create a notification with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
