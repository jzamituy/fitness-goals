import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberPlanScalarWhereInput } from './member-plan-scalar-where.input';
import { Type } from 'class-transformer';
import { MemberPlanUpdateManyMutationInput } from './member-plan-update-many-mutation.input';

@InputType()
export class MemberPlanUpdateManyWithWhereWithoutPlanTemplateInput {

    @Field(() => MemberPlanScalarWhereInput, {nullable:false})
    @Type(() => MemberPlanScalarWhereInput)
    where!: MemberPlanScalarWhereInput;

    @Field(() => MemberPlanUpdateManyMutationInput, {nullable:false})
    @Type(() => MemberPlanUpdateManyMutationInput)
    data!: MemberPlanUpdateManyMutationInput;
}
