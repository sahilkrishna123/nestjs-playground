import { Controller, Get } from '@nestjs/common';

@Controller('user') // Decorator: Controller
export class UserController {
    @Get()
    getUser(){
        return 'Get request fetched successfully!!!';
    }
}
