import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipe/uppercase/uppercase.pipe';

@Controller('custom-pipe-name-transform')
export class CustomPipeNameTransformController {
    @Post('name')
    transformName(@Body('name', new UppercasePipe()) name: string){
        return {message: `Received name: ${name}`};
    }
}
