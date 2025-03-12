import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoodScalarWhereInput } from './mood-scalar-where.input';
import { Type } from 'class-transformer';
import { MoodUpdateManyMutationInput } from './mood-update-many-mutation.input';

@InputType()
export class MoodUpdateManyWithWhereWithoutGymMemberInput {

    @Field(() => MoodScalarWhereInput, {nullable:false})
    @Type(() => MoodScalarWhereInput)
    where!: MoodScalarWhereInput;

    @Field(() => MoodUpdateManyMutationInput, {nullable:false})
    @Type(() => MoodUpdateManyMutationInput)
    data!: MoodUpdateManyMutationInput;
}
