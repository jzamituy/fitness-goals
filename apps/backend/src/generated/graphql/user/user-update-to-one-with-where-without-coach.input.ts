import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCoachInput } from './user-update-without-coach.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCoachInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCoachInput, {nullable:false})
    @Type(() => UserUpdateWithoutCoachInput)
    data!: UserUpdateWithoutCoachInput;
}
