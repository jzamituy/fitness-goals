import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GymMemberUpdateInput } from './gym-member-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';

@ArgsType()
export class UpdateOneGymMemberArgs {

    @Field(() => GymMemberUpdateInput, {nullable:false})
    @Type(() => GymMemberUpdateInput)
    data!: GymMemberUpdateInput;

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;
}
