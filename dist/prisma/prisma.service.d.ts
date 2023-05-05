import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient {
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
