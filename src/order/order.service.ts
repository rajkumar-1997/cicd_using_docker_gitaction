import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor() {}

  async getAllOrders() {
    return 'All orders fetched successfully';
  }
}
