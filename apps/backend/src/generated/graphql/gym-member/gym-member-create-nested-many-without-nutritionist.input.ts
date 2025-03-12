import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutNutritionistInput } from './gym-member-create-without-nutritionist.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutNutritionistInput } from './gym-member-create-or-connect-without-nutritionist.input';
import { GymMemberCreateManyNutritionistInputEnvelope } from './gym-member-create-many-nutritionist-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';

@InputType()
export class GymMemberCreateNestedManyWithoutNutritionistInput {

    @Field(() => [GymMemberCreateWithoutNutritionistInput], {nullable:true})
    @Type(() => GymMemberCreateWithoutNutritionistInput)
    create?: Array<GymMemberCreateWithoutNutritionistInput>;

    @Field(() => [GymMemberCreateOrConnectWithoutNutritionistInput], {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutNutritionistInput)
    connectOrCreate?: Array<GymMemberCreateOrConnectWithoutNutritionistInput>;

    @Field(() => GymMemberCreateManyNutritionistInputEnvelope, {nullable:true})
    @Type(() => GymMemberCreateManyNutritionistInputEnvelope)
    createMany?: GymMemberCreateManyNutritionistInputEnvelope;

    @Field(() => [GymMemberWhereUniqueInput], {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>>;
}
