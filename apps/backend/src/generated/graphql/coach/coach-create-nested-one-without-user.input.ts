import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutUserInput } from './coach-create-without-user.input';
import { Type } from 'class-transformer';
import { CoachCreateOrConnectWithoutUserInput } from './coach-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@InputType()
export class CoachCreateNestedOneWithoutUserInput {

    @Field(() => CoachCreateWithoutUserInput, {nullable:true})
    @Type(() => CoachCreateWithoutUserInput)
    create?: CoachCreateWithoutUserInput;

    @Field(() => CoachCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => CoachCreateOrConnectWithoutUserInput)
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    @Type(() => CoachWhereUniqueInput)
    connect?: Prisma.AtLeast<CoachWhereUniqueInput, 'id' | 'userId'>;
}
