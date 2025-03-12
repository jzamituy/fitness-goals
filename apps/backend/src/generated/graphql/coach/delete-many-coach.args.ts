import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachWhereInput } from './coach-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyCoachArgs {

    @Field(() => CoachWhereInput, {nullable:true})
    @Type(() => CoachWhereInput)
    where?: CoachWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
