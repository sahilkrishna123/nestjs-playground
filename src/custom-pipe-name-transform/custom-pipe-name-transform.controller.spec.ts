import { Test, TestingModule } from '@nestjs/testing';
import { CustomPipeNameTransformController } from './custom-pipe-name-transform.controller';

describe('CustomPipeNameTransformController', () => {
  let controller: CustomPipeNameTransformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomPipeNameTransformController],
    }).compile();

    controller = module.get<CustomPipeNameTransformController>(CustomPipeNameTransformController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
