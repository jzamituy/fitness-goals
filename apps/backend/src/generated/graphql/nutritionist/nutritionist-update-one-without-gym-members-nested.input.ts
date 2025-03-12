import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionistCreateWithoutGymMembersInput } from './nutritionist-create-without-gym-members.input';
import { Type } from 'class-transformer';
import { NutritionistCreateOrConnectWithoutGymMembersInput } from './nutritionist-create-or-connect-without-gym-members.input';
import { NutritionistUpsertWithoutGymMembersInput } from './nutritionist-upsert-without-gym-members.input';
import { NutritionistWhereInput } from './nutritionist-where.input';
import { Prisma } from '@prisma/client';
import { NutritionistWhereUniqueInput } from './nutritionist-where-unique.input';
import { NutritionistUpdateToOneWithWhereWithoutGymMembersInput } from './nutritionist-update-to-one-with-where-without-gym-members.input';

@InputType()
export class NutritionistUpdateOneWithoutGymMembersNestedInput {

    @Field(() => NutritionistCreateWithoutGymMembersInput, {nullable:true})
    @Type(() => NutritionistCreateWithoutGymMembersInput)
    create?: NutritionistCreateWithoutGymMembersInput;

    @Field(() => NutritionistCreateOrConnectWithoutGymMembersInput, {nullable:true})
    @Type(() => NutritionistCreateOrConnectWithoutGymMembersInput)
    connectOrCreate?: NutritionistCreateOrConnectWithoutGymMembersInput;

    @Field(() => NutritionistUpsertWithoutGymMembersInput, {nullable:true})
    @Type(() => NutritionistUpsertWithoutGymMembersInput)
    upsert?: NutritionistUpsertWithoutGymMembersInput;

    @Field(() => NutritionistWhereInput, {nullable:true})
    @Type(() => NutritionistWhereInput)
    disconnect?: NutritionistWhereInput;

    @Field(() => NutritionistWhereInput, {nullable:true})
    @Type(() => NutritionistWhereInput)
    delete?: NutritionistWhereInput;

    @Field(() => NutritionistWhereUniqueInput, {nullable:true})
    @Type(() => NutritionistWhereUniqueInput)
    connect?: Prisma.AtLeast<NutritionistWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => NutritionistUpdateToOneWithWhereWithoutGymMembersInput, {nullable:true})
    @Type(() => NutritionistUpdateToOneWithWhereWithoutGymMembersInput)
    update?: NutritionistUpdateToOneWithWhereWithoutGymMembersInput;
}
