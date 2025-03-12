import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutMemberPlansInput } from './gym-member-create-without-member-plans.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutMemberPlansInput } from './gym-member-create-or-connect-without-member-plans.input';
import { GymMemberUpsertWithoutMemberPlansInput } from './gym-member-upsert-without-member-plans.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { GymMemberUpdateToOneWithWhereWithoutMemberPlansInput } from './gym-member-update-to-one-with-where-without-member-plans.input';

@InputType()
export class GymMemberUpdateOneRequiredWithoutMemberPlansNestedInput {

    @Field(() => GymMemberCreateWithoutMemberPlansInput, {nullable:true})
    @Type(() => GymMemberCreateWithoutMemberPlansInput)
    create?: GymMemberCreateWithoutMemberPlansInput;

    @Field(() => GymMemberCreateOrConnectWithoutMemberPlansInput, {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutMemberPlansInput)
    connectOrCreate?: GymMemberCreateOrConnectWithoutMemberPlansInput;

    @Field(() => GymMemberUpsertWithoutMemberPlansInput, {nullable:true})
    @Type(() => GymMemberUpsertWithoutMemberPlansInput)
    upsert?: GymMemberUpsertWithoutMemberPlansInput;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberUpdateToOneWithWhereWithoutMemberPlansInput, {nullable:true})
    @Type(() => GymMemberUpdateToOneWithWhereWithoutMemberPlansInput)
    update?: GymMemberUpdateToOneWithWhereWithoutMemberPlansInput;
}
