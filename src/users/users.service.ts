import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getHello(): string {
        return 'Hello World!';
    }
    findAll(): string {
        return 'This action returns all cats';
    }
}
