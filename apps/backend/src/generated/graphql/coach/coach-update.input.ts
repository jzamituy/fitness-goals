import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CoachUpdatespecialtiesInput } from './coach-updatespecialties.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCoachNestedInput } from '../user/user-update-one-required-without-coach-nested.input';
import { GymMemberUpdateManyWithoutCoachNestedInput } from '../gym-member/gym-member-update-many-without-coach-nested.input';

@InputType()
export class CoachUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => CoachUpdatespecialtiesInput, {nullable:true})
    specialties?: CoachUpdatespecialtiesInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    certification?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    experience?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    biography?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    availability?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCoachNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCoachNestedInput;

    @Field(() => GymMemberUpdateManyWithoutCoachNestedInput, {nullable:true})
    gymMembers?: GymMemberUpdateManyWithoutCoachNestedInput;
}
