import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCoachInput } from './user-update-without-coach.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCoachInput } from './user-create-without-coach.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCoachInput {

    @Field(() => UserUpdateWithoutCoachInput, {nullable:false})
    @Type(() => UserUpdateWithoutCoachInput)
    update!: UserUpdateWithoutCoachInput;

    @Field(() => UserCreateWithoutCoachInput, {nullable:false})
    @Type(() => UserCreateWithoutCoachInput)
    create!: UserCreateWithoutCoachInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
