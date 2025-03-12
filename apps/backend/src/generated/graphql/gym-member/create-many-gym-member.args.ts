import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GymMemberCreateManyInput } from './gym-member-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGymMemberArgs {

    @Field(() => [GymMemberCreateManyInput], {nullable:false})
    @Type(() => GymMemberCreateManyInput)
    data!: Array<GymMemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
