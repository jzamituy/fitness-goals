import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Type } from 'class-transformer';
import { GymMemberCreateInput } from './gym-member-create.input';
import { GymMemberUpdateInput } from './gym-member-update.input';

@ArgsType()
export class UpsertOneGymMemberArgs {

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberCreateInput, {nullable:false})
    @Type(() => GymMemberCreateInput)
    create!: GymMemberCreateInput;

    @Field(() => GymMemberUpdateInput, {nullable:false})
    @Type(() => GymMemberUpdateInput)
    update!: GymMemberUpdateInput;
}
