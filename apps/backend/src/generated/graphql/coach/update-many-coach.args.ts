import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachUpdateManyMutationInput } from './coach-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CoachWhereInput } from './coach-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCoachArgs {

    @Field(() => CoachUpdateManyMutationInput, {nullable:false})
    @Type(() => CoachUpdateManyMutationInput)
    data!: CoachUpdateManyMutationInput;

    @Field(() => CoachWhereInput, {nullable:true})
    @Type(() => CoachWhereInput)
    where?: CoachWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
