import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserStatus, {nullable:true})
    status?: `${UserStatus}`;

    @Field(() => String, {nullable:true})
    imageUrl?: string;
}
