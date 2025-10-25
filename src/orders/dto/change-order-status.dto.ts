import { IsEnum, IsUUID } from "class-validator";
import { OrderStatus } from "generated/prisma"
import { OrderStatusList } from "../enum/order.enum";

export class ChangeOrderStatusDto {

    @IsUUID(4)
    id: string;

    @IsEnum(OrderStatusList, {
        message: `Status must be one of the following values: ${Object.values(OrderStatusList).join(', ')}`
    })
    status: OrderStatus;

}