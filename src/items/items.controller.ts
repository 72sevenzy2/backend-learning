import { Controller, Get } from '@nestjs/common';
import { Users } from './dto/items.dto'

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return `all users brought`
    }
}
