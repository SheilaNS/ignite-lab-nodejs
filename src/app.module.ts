import { Module } from '@nestjs/common';
import { AppController } from './infra/http/controllers/app.controller';
import { HttpModule } from './infra/http/http.module';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
