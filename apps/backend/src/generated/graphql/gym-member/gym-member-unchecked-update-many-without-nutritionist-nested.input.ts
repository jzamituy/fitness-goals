import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutNutritionistInput } from './gym-member-create-without-nutritionist.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutNutritionistInput } from './gym-member-create-or-connect-without-nutritionist.input';
import { GymMemberUpsertWithWhereUniqueWithoutNutritionistInput } from './gym-member-upsert-with-where-unique-without-nutritionist.input';
import { GymMemberCreateManyNutritionistInputEnvelope } from './gym-member-create-many-nutritionist-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { GymMemberUpdateWithWhereUniqueWithoutNutritionistInput } from './gym-member-update-with-where-unique-without-nutritionist.input';
import { GymMemberUpdateManyWithWhereWithoutNutritionistInput } from './gym-member-update-many-with-where-without-nutritionist.input';
import { GymMemberScalarWhereInput } from './gym-member-scalar-where.input';

@InputType()
export class GymMemberUncheckedUpdateManyWithoutNutritionistNestedInput {

    @Field(() => [GymMemberCreateWithoutNutritionistInput], {nullable:true})
    @Type(() => GymMemberCreateWithoutNutritionistInput)
    create?: Array<GymMemberCreateWithoutNutritionistInput>;

    @Field(() => [GymMemberCreateOrConnectWithoutNutritionistInput], {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutNutritionistInput)
    connectOrCreate?: Array<GymMemberCreateOrConnectWithoutNutritionistInput>;

    @Field(() => [GymMemberUpsertWithWhereUniqueWithoutNutritionistInput], {nullable:true})
    @Type(() => GymMemberUpsertWithWhereUniqueWithoutNutritionistInput)
    upsert?: Array<GymMemberUpsertWithWhereUniqueWithoutNutritionistInput>;

    @Field(() => GymMemberCreateManyNutritionistInputEnvelope, {nullable:true})
    @Type(() => GymMemberCreateManyNutritionistInputEnvelope)
    createMany?: GymMemberCreateManyNutritionistInputEnvelope;

    @Field(() => [GymMemberWhereUniqueInput], {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [GymMemberWhereUniqueInput], {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [GymMemberWhereUniqueInput], {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [GymMemberWhereUniqueInput], {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [GymMemberUpdateWithWhereUniqueWithoutNutritionistInput], {nullable:true})
    @Type(() => GymMemberUpdateWithWhereUniqueWithoutNutritionistInput)
    update?: Array<GymMemberUpdateWithWhereUniqueWithoutNutritionistInput>;

    @Field(() => [GymMemberUpdateManyWithWhereWithoutNutritionistInput], {nullable:true})
    @Type(() => GymMemberUpdateManyWithWhereWithoutNutritionistInput)
    updateMany?: Array<GymMemberUpdateManyWithWhereWithoutNutritionistInput>;

    @Field(() => [GymMemberScalarWhereInput], {nullable:true})
    @Type(() => GymMemberScalarWhereInput)
    deleteMany?: Array<GymMemberScalarWhereInput>;
}
