import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { Type } from 'class-transformer';
import { CoachCreateWithoutUserInput } from './coach-create-without-user.input';

@InputType()
export class CoachCreateOrConnectWithoutUserInput {

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    @Type(() => CoachWhereUniqueInput)
    where!: Prisma.AtLeast<CoachWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => CoachCreateWithoutUserInput, {nullable:false})
    @Type(() => CoachCreateWithoutUserInput)
    create!: CoachCreateWithoutUserInput;
}
