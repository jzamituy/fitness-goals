import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoalScalarWhereInput } from './goal-scalar-where.input';
import { Type } from 'class-transformer';
import { GoalUpdateManyMutationInput } from './goal-update-many-mutation.input';

@InputType()
export class GoalUpdateManyWithWhereWithoutGymMemberInput {

    @Field(() => GoalScalarWhereInput, {nullable:false})
    @Type(() => GoalScalarWhereInput)
    where!: GoalScalarWhereInput;

    @Field(() => GoalUpdateManyMutationInput, {nullable:false})
    @Type(() => GoalUpdateManyMutationInput)
    data!: GoalUpdateManyMutationInput;
}
