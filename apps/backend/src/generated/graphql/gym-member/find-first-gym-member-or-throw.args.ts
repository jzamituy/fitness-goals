import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GymMemberWhereInput } from './gym-member-where.input';
import { Type } from 'class-transformer';
import { GymMemberOrderByWithRelationInput } from './gym-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GymMemberScalarFieldEnum } from './gym-member-scalar-field.enum';

@ArgsType()
export class FindFirstGymMemberOrThrowArgs {

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;

    @Field(() => [GymMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GymMemberOrderByWithRelationInput>;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GymMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<`${GymMemberScalarFieldEnum}`>;
}
