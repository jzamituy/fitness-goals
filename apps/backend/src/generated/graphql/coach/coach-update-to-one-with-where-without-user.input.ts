import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachWhereInput } from './coach-where.input';
import { Type } from 'class-transformer';
import { CoachUpdateWithoutUserInput } from './coach-update-without-user.input';

@InputType()
export class CoachUpdateToOneWithWhereWithoutUserInput {

    @Field(() => CoachWhereInput, {nullable:true})
    @Type(() => CoachWhereInput)
    where?: CoachWhereInput;

    @Field(() => CoachUpdateWithoutUserInput, {nullable:false})
    @Type(() => CoachUpdateWithoutUserInput)
    data!: CoachUpdateWithoutUserInput;
}
