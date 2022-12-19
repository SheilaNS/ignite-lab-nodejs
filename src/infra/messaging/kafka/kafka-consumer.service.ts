import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['central-adder-14155-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2VudHJhbC1hZGRlci0xNDE1NSR48Xpj6hXi6mzfdtk_yfHhwzl8Ajqam4IKJoE',
          password:
            'LDUrnLdGEFPQPihdWtYnXvER6KTXb3x_qUCWA-MzWvQp37xuiG9GY-vV2Jfkiqh-TASdNw==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
