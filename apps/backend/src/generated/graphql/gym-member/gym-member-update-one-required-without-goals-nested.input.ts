import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutGoalsInput } from './gym-member-create-without-goals.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutGoalsInput } from './gym-member-create-or-connect-without-goals.input';
import { GymMemberUpsertWithoutGoalsInput } from './gym-member-upsert-without-goals.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { GymMemberUpdateToOneWithWhereWithoutGoalsInput } from './gym-member-update-to-one-with-where-without-goals.input';

@InputType()
export class GymMemberUpdateOneRequiredWithoutGoalsNestedInput {

    @Field(() => GymMemberCreateWithoutGoalsInput, {nullable:true})
    @Type(() => GymMemberCreateWithoutGoalsInput)
    create?: GymMemberCreateWithoutGoalsInput;

    @Field(() => GymMemberCreateOrConnectWithoutGoalsInput, {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutGoalsInput)
    connectOrCreate?: GymMemberCreateOrConnectWithoutGoalsInput;

    @Field(() => GymMemberUpsertWithoutGoalsInput, {nullable:true})
    @Type(() => GymMemberUpsertWithoutGoalsInput)
    upsert?: GymMemberUpsertWithoutGoalsInput;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberUpdateToOneWithWhereWithoutGoalsInput, {nullable:true})
    @Type(() => GymMemberUpdateToOneWithWhereWithoutGoalsInput)
    update?: GymMemberUpdateToOneWithWhereWithoutGoalsInput;
}
