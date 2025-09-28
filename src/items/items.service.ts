import { Injectable } from '@nestjs/common';
import { item } from './interfaces/items.interface';

@Injectable()
export class ItemsService {
    private readonly items: item[] = [
        {
            id: "21931738971",
            name: "hellokid",
            qty: 1,
            description: "cool"
        }
    ]
}
