import { Module } from '@nestjs/common';
import { CustomPipeNameTransformController } from './custom-pipe-name-transform.controller';

@Module({
  controllers: [CustomPipeNameTransformController]
})
export class CustomPipeNameTransformModule {}
