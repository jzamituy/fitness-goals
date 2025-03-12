import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutMoodsInput } from './gym-member-create-without-moods.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutMoodsInput } from './gym-member-create-or-connect-without-moods.input';
import { GymMemberUpsertWithoutMoodsInput } from './gym-member-upsert-without-moods.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { GymMemberUpdateToOneWithWhereWithoutMoodsInput } from './gym-member-update-to-one-with-where-without-moods.input';

@InputType()
export class GymMemberUpdateOneRequiredWithoutMoodsNestedInput {

    @Field(() => GymMemberCreateWithoutMoodsInput, {nullable:true})
    @Type(() => GymMemberCreateWithoutMoodsInput)
    create?: GymMemberCreateWithoutMoodsInput;

    @Field(() => GymMemberCreateOrConnectWithoutMoodsInput, {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutMoodsInput)
    connectOrCreate?: GymMemberCreateOrConnectWithoutMoodsInput;

    @Field(() => GymMemberUpsertWithoutMoodsInput, {nullable:true})
    @Type(() => GymMemberUpsertWithoutMoodsInput)
    upsert?: GymMemberUpsertWithoutMoodsInput;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberUpdateToOneWithWhereWithoutMoodsInput, {nullable:true})
    @Type(() => GymMemberUpdateToOneWithWhereWithoutMoodsInput)
    update?: GymMemberUpdateToOneWithWhereWithoutMoodsInput;
}
