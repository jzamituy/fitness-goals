import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutUserInput } from './coach-create-without-user.input';
import { Type } from 'class-transformer';
import { CoachCreateOrConnectWithoutUserInput } from './coach-create-or-connect-without-user.input';
import { CoachUpsertWithoutUserInput } from './coach-upsert-without-user.input';
import { CoachWhereInput } from './coach-where.input';
import { Prisma } from '@prisma/client';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachUpdateToOneWithWhereWithoutUserInput } from './coach-update-to-one-with-where-without-user.input';

@InputType()
export class CoachUpdateOneWithoutUserNestedInput {

    @Field(() => CoachCreateWithoutUserInput, {nullable:true})
    @Type(() => CoachCreateWithoutUserInput)
    create?: CoachCreateWithoutUserInput;

    @Field(() => CoachCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => CoachCreateOrConnectWithoutUserInput)
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput;

    @Field(() => CoachUpsertWithoutUserInput, {nullable:true})
    @Type(() => CoachUpsertWithoutUserInput)
    upsert?: CoachUpsertWithoutUserInput;

    @Field(() => CoachWhereInput, {nullable:true})
    @Type(() => CoachWhereInput)
    disconnect?: CoachWhereInput;

    @Field(() => CoachWhereInput, {nullable:true})
    @Type(() => CoachWhereInput)
    delete?: CoachWhereInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    @Type(() => CoachWhereUniqueInput)
    connect?: Prisma.AtLeast<CoachWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => CoachUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => CoachUpdateToOneWithWhereWithoutUserInput)
    update?: CoachUpdateToOneWithWhereWithoutUserInput;
}
