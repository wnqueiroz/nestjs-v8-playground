import { Controller, Get, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('cats')
@ApiTags('cats')
export class CatsController {
  @Version('1')
  @Get()
  findAllV1(): string {
    return 'This action returns all cats for version 1';
  }

  @Version('2')
  @Get()
  findAllV2(): string {
    return 'This action returns all cats for version 2';
  }
}
