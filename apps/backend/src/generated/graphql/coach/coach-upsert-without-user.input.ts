import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachUpdateWithoutUserInput } from './coach-update-without-user.input';
import { Type } from 'class-transformer';
import { CoachCreateWithoutUserInput } from './coach-create-without-user.input';
import { CoachWhereInput } from './coach-where.input';

@InputType()
export class CoachUpsertWithoutUserInput {

    @Field(() => CoachUpdateWithoutUserInput, {nullable:false})
    @Type(() => CoachUpdateWithoutUserInput)
    update!: CoachUpdateWithoutUserInput;

    @Field(() => CoachCreateWithoutUserInput, {nullable:false})
    @Type(() => CoachCreateWithoutUserInput)
    create!: CoachCreateWithoutUserInput;

    @Field(() => CoachWhereInput, {nullable:true})
    @Type(() => CoachWhereInput)
    where?: CoachWhereInput;
}
