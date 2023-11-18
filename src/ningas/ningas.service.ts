import { Injectable } from '@nestjs/common';

@Injectable()
export class NingasService {
    private ningas = [
        {
            id: 1,
            name: 'Naruto',
            email: 'naruto@gmail.com',
        },
        {
            id: 2,
            name: 'Sasuke',
            email: 'sasuke@gmail.com',
        },
        {
            id: 3,
            name: 'Sakura',
            email: 'sakura@gmail.com',
        },
    ];

    findAll() {
        return this.ningas;
    }

    findOne(name: string) {
        return this.ningas.filter((ningas) => ningas.name === name);
    }
}
