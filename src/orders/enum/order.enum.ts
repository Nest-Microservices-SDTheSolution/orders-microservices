import { OrderStatus } from "generated/prisma";

export const OrderStatusList = [
    OrderStatus.PENDING,
    OrderStatus.DELIVERED,
    OrderStatus.CANCELED,
    OrderStatus.PROCESSING,
    OrderStatus.SHIPPED
];