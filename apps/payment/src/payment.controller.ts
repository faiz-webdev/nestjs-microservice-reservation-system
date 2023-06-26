import { Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ChargeDto } from './dto/charge.dto';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @MessagePattern('create_charge')
  async createCharge(@Payload() data: ChargeDto) {
    return await this.paymentService.createCharge(data);
  }
}
