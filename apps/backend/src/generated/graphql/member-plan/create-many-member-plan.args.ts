import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberPlanCreateManyInput } from './member-plan-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMemberPlanArgs {

    @Field(() => [MemberPlanCreateManyInput], {nullable:false})
    @Type(() => MemberPlanCreateManyInput)
    data!: Array<MemberPlanCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
