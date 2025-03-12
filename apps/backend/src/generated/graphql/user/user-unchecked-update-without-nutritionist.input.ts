import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumUserStatusFieldUpdateOperationsInput } from '../prisma/enum-user-status-field-update-operations.input';
import { UserRoleUncheckedUpdateManyWithoutUserNestedInput } from '../user-role/user-role-unchecked-update-many-without-user-nested.input';
import { GymMemberUncheckedUpdateOneWithoutUserNestedInput } from '../gym-member/gym-member-unchecked-update-one-without-user-nested.input';
import { CoachUncheckedUpdateOneWithoutUserNestedInput } from '../coach/coach-unchecked-update-one-without-user-nested.input';
import { NotificationUncheckedUpdateManyWithoutUserNestedInput } from '../notification/notification-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutNutritionistInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumUserStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserRoleUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => GymMemberUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    gymMember?: GymMemberUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => CoachUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    coach?: CoachUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => NotificationUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;
}
