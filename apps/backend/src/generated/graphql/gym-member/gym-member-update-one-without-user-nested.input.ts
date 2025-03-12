import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutUserInput } from './gym-member-create-without-user.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutUserInput } from './gym-member-create-or-connect-without-user.input';
import { GymMemberUpsertWithoutUserInput } from './gym-member-upsert-without-user.input';
import { GymMemberWhereInput } from './gym-member-where.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { GymMemberUpdateToOneWithWhereWithoutUserInput } from './gym-member-update-to-one-with-where-without-user.input';

@InputType()
export class GymMemberUpdateOneWithoutUserNestedInput {

    @Field(() => GymMemberCreateWithoutUserInput, {nullable:true})
    @Type(() => GymMemberCreateWithoutUserInput)
    create?: GymMemberCreateWithoutUserInput;

    @Field(() => GymMemberCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: GymMemberCreateOrConnectWithoutUserInput;

    @Field(() => GymMemberUpsertWithoutUserInput, {nullable:true})
    @Type(() => GymMemberUpsertWithoutUserInput)
    upsert?: GymMemberUpsertWithoutUserInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    disconnect?: GymMemberWhereInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    delete?: GymMemberWhereInput;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => GymMemberUpdateToOneWithWhereWithoutUserInput)
    update?: GymMemberUpdateToOneWithWhereWithoutUserInput;
}
