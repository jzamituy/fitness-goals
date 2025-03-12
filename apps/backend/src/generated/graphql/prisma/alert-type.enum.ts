import { registerEnumType } from '@nestjs/graphql';

export enum AlertType {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}


registerEnumType(AlertType, { name: 'AlertType', description: undefined })
