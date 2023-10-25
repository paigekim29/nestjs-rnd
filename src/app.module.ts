import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CoreModule } from './core/core.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
