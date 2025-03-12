import {
  AlertStatus,
  AlertType,
  AttendanceStatus,
  GoalStatus,
  MoodLevel,
  NotificationStatus,
  NotificationType,
  Permission,
  PermissionAction,
  PermissionResource,
  PlanCategory,
  PlanLevel,
  PlanStatus,
  PrismaClient,
  UserStatus,
} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clean up existing data
  await prisma.$transaction([
    prisma.memberPlan.deleteMany(),
    prisma.planTemplate.deleteMany(),
    prisma.notification.deleteMany(),
    prisma.alert.deleteMany(),
    prisma.mood.deleteMany(),
    prisma.attendance.deleteMany(),
    prisma.goal.deleteMany(),
    prisma.gymMember.deleteMany(),
    prisma.nutritionist.deleteMany(),
    prisma.coach.deleteMany(),
    prisma.rolePermission.deleteMany(),
    prisma.permission.deleteMany(),
    prisma.userRole.deleteMany(),
    prisma.role.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  console.log('Database cleaned');

  // Create roles
  const adminRole = await prisma.role.create({
    data: {
      name: 'Admin',
      description: 'Administrator with full access',
    },
  });

  const coachRole = await prisma.role.create({
    data: {
      name: 'Coach',
      description: 'Fitness coach role',
    },
  });

  const nutritionistRole = await prisma.role.create({
    data: {
      name: 'Nutritionist',
      description: 'Nutrition specialist role',
    },
  });

  const memberRole = await prisma.role.create({
    data: {
      name: 'Member',
      description: 'Gym member role',
    },
  });

  console.log('Roles created');

  // Create permissions
  const permissions: Permission[] = [];
  for (const action of Object.values(PermissionAction)) {
    for (const resource of Object.values(PermissionResource)) {
      permissions.push(
        await prisma.permission.create({
          data: {
            action,
            resource,
          },
        }),
      );
    }
  }

  console.log('Permissions created');

  // Assign permissions to roles
  // Admin gets all permissions
  for (const permission of permissions) {
    await prisma.rolePermission.create({
      data: {
        roleId: adminRole.id,
        permissionId: permission.id,
      },
    });
  }

  // Coach permissions
  const coachPermissions = permissions.filter(
    (p) =>
      (p.resource === PermissionResource.GOALS ||
        p.resource === PermissionResource.ATTENDANCES ||
        p.resource === PermissionResource.MOODS ||
        p.resource === PermissionResource.ALERTS) &&
      (p.action === PermissionAction.READ ||
        p.action === PermissionAction.UPDATE ||
        p.action === PermissionAction.CREATE),
  );

  for (const permission of coachPermissions) {
    await prisma.rolePermission.create({
      data: {
        roleId: coachRole.id,
        permissionId: permission.id,
      },
    });
  }

  // Nutritionist permissions
  const nutritionistPermissions = permissions.filter(
    (p) =>
      p.resource === PermissionResource.GOALS &&
      (p.action === PermissionAction.READ ||
        p.action === PermissionAction.UPDATE),
  );

  for (const permission of nutritionistPermissions) {
    await prisma.rolePermission.create({
      data: {
        roleId: nutritionistRole.id,
        permissionId: permission.id,
      },
    });
  }

  // Member permissions
  const memberPermissions = permissions.filter(
    (p) =>
      (p.resource === PermissionResource.PROFILES ||
        p.resource === PermissionResource.GOALS ||
        p.resource === PermissionResource.MOODS) &&
      p.action === PermissionAction.READ,
  );

  for (const permission of memberPermissions) {
    await prisma.rolePermission.create({
      data: {
        roleId: memberRole.id,
        permissionId: permission.id,
      },
    });
  }

  console.log('Role permissions assigned');

  // Create users
  await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@example.com',
      phone: '+1234567890',
      dateOfBirth: new Date('1985-01-01'),
      status: UserStatus.ACTIVE,
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      userRoles: {
        create: {
          roleId: adminRole.id,
        },
      },
    },
  });

  // Create coaches
  const coach1 = await prisma.user.create({
    data: {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@example.com',
      phone: '+1234567891',
      dateOfBirth: new Date('1980-05-15'),
      status: UserStatus.ACTIVE,
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      userRoles: {
        create: {
          roleId: coachRole.id,
        },
      },
      coach: {
        create: {
          specialties: ['Strength Training', 'HIIT', 'CrossFit'],
          certification: 'NASM Certified Personal Trainer',
          experience: 8,
          biography:
            'Experienced coach specializing in strength and high-intensity training.',
          availability: JSON.stringify({
            monday: { start: '08:00', end: '17:00' },
            wednesday: { start: '08:00', end: '17:00' },
            friday: { start: '08:00', end: '17:00' },
          }),
        },
      },
    },
  });

  const coach2 = await prisma.user.create({
    data: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@example.com',
      phone: '+1234567892',
      dateOfBirth: new Date('1985-08-20'),
      status: UserStatus.ACTIVE,
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      userRoles: {
        create: {
          roleId: coachRole.id,
        },
      },
      coach: {
        create: {
          specialties: ['Yoga', 'Pilates', 'Flexibility'],
          certification: 'Yoga Alliance Certified',
          experience: 6,
          biography:
            'Passionate about helping clients improve flexibility and mindfulness.',
          availability: JSON.stringify({
            tuesday: { start: '09:00', end: '18:00' },
            thursday: { start: '09:00', end: '18:00' },
            saturday: { start: '10:00', end: '15:00' },
          }),
        },
      },
    },
  });

  // Create nutritionists
  const nutritionist1 = await prisma.user.create({
    data: {
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@example.com',
      phone: '+1234567893',
      dateOfBirth: new Date('1978-11-10'),
      status: UserStatus.ACTIVE,
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      userRoles: {
        create: {
          roleId: nutritionistRole.id,
        },
      },
      nutritionist: {
        create: {
          specialties: [
            'Sports Nutrition',
            'Weight Management',
            'Meal Planning',
          ],
          certification: 'Registered Dietitian Nutritionist',
          experience: 10,
          biography:
            'Helping athletes and fitness enthusiasts optimize their nutrition for performance.',
          availability: JSON.stringify({
            monday: { start: '10:00', end: '19:00' },
            wednesday: { start: '10:00', end: '19:00' },
            friday: { start: '10:00', end: '16:00' },
          }),
        },
      },
    },
  });

  const nutritionist2 = await prisma.user.create({
    data: {
      firstName: 'Emily',
      lastName: 'Davis',
      email: 'emily.davis@example.com',
      phone: '+1234567894',
      dateOfBirth: new Date('1982-04-25'),
      status: UserStatus.ACTIVE,
      imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
      userRoles: {
        create: {
          roleId: nutritionistRole.id,
        },
      },
      nutritionist: {
        create: {
          specialties: [
            'Plant-based Nutrition',
            'Gut Health',
            'Holistic Nutrition',
          ],
          certification: 'Certified Nutrition Specialist',
          experience: 7,
          biography:
            'Specializing in plant-based nutrition and holistic approaches to health.',
          availability: JSON.stringify({
            tuesday: { start: '08:00', end: '17:00' },
            thursday: { start: '08:00', end: '17:00' },
            saturday: { start: '09:00', end: '14:00' },
          }),
        },
      },
    },
  });

  // Create gym members
  const member1 = await prisma.user.create({
    data: {
      firstName: 'Alex',
      lastName: 'Wilson',
      email: 'alex.wilson@example.com',
      phone: '+1234567895',
      dateOfBirth: new Date('1990-07-15'),
      status: UserStatus.ACTIVE,
      imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
      userRoles: {
        create: {
          roleId: memberRole.id,
        },
      },
      gymMember: {
        create: {
          membershipId: 'MEM001',
          startDate: new Date('2023-01-01'),
          endDate: new Date('2024-12-31'),
          coachId: (await prisma.coach.findFirst({
            where: { userId: coach1.id },
          }))!.id,
          nutritionistId: (await prisma.nutritionist.findFirst({
            where: { userId: nutritionist1.id },
          }))!.id,
        },
      },
    },
  });

  const member2 = await prisma.user.create({
    data: {
      firstName: 'Jessica',
      lastName: 'Martinez',
      email: 'jessica.martinez@example.com',
      phone: '+1234567896',
      dateOfBirth: new Date('1988-09-22'),
      status: UserStatus.ACTIVE,
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
      userRoles: {
        create: {
          roleId: memberRole.id,
        },
      },
      gymMember: {
        create: {
          membershipId: 'MEM002',
          startDate: new Date('2023-02-15'),
          endDate: new Date('2024-02-14'),
          coachId: (await prisma.coach.findFirst({
            where: { userId: coach2.id },
          }))!.id,
          nutritionistId: (await prisma.nutritionist.findFirst({
            where: { userId: nutritionist2.id },
          }))!.id,
        },
      },
    },
  });

  const member3 = await prisma.user.create({
    data: {
      firstName: 'David',
      lastName: 'Thompson',
      email: 'david.thompson@example.com',
      phone: '+1234567897',
      dateOfBirth: new Date('1992-03-10'),
      status: UserStatus.ACTIVE,
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      userRoles: {
        create: {
          roleId: memberRole.id,
        },
      },
      gymMember: {
        create: {
          membershipId: 'MEM003',
          startDate: new Date('2023-03-01'),
          endDate: new Date('2024-02-28'),
          coachId: (await prisma.coach.findFirst({
            where: { userId: coach1.id },
          }))!.id,
          nutritionistId: (await prisma.nutritionist.findFirst({
            where: { userId: nutritionist1.id },
          }))!.id,
        },
      },
    },
  });

  console.log('Users created');

  // Get gym member IDs for reference
  const gymMember1 = await prisma.gymMember.findFirst({
    where: { userId: member1.id },
  });
  const gymMember2 = await prisma.gymMember.findFirst({
    where: { userId: member2.id },
  });
  const gymMember3 = await prisma.gymMember.findFirst({
    where: { userId: member3.id },
  });

  // Create goals
  await prisma.goal.createMany({
    data: [
      {
        gymMemberId: gymMember1!.id,
        type: 'Weight Loss',
        startDate: new Date('2023-01-15'),
        endDate: new Date('2023-04-15'),
        status: GoalStatus.COMPLETED,
        diet: 'Low carb, high protein',
      },
      {
        gymMemberId: gymMember1!.id,
        type: 'Muscle Gain',
        startDate: new Date('2023-05-01'),
        endDate: new Date('2023-08-01'),
        status: GoalStatus.ACTIVE,
        diet: 'High protein, caloric surplus',
      },
      {
        gymMemberId: gymMember2!.id,
        type: 'Flexibility',
        startDate: new Date('2023-02-20'),
        endDate: new Date('2023-05-20'),
        status: GoalStatus.ACTIVE,
        diet: 'Balanced nutrition with anti-inflammatory focus',
      },
      {
        gymMemberId: gymMember3!.id,
        type: 'Cardio Endurance',
        startDate: new Date('2023-03-10'),
        endDate: new Date('2023-06-10'),
        status: GoalStatus.ACTIVE,
        diet: 'Balanced macros with focus on complex carbs',
      },
    ],
  });

  console.log('Goals created');

  // Create attendances (for the last 30 days)
  const today = new Date();
  const attendances: {
    gymMemberId: string;
    date: Date;
    status: AttendanceStatus;
  }[] = [];

  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    // Skip weekends for some realism
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      // Member 1 attends regularly
      if (i % 2 === 0) {
        attendances.push({
          gymMemberId: gymMember1!.id,
          date,
          status: AttendanceStatus.PRESENT,
        });
      }

      // Member 2 attends less frequently
      if (i % 3 === 0) {
        attendances.push({
          gymMemberId: gymMember2!.id,
          date,
          status: AttendanceStatus.PRESENT,
        });
      } else if (i % 7 === 0) {
        attendances.push({
          gymMemberId: gymMember2!.id,
          date,
          status: AttendanceStatus.ABSENT,
        });
      }

      // Member 3 is very regular
      if (i % 5 !== 0) {
        attendances.push({
          gymMemberId: gymMember3!.id,
          date,
          status: AttendanceStatus.PRESENT,
        });
      } else {
        attendances.push({
          gymMemberId: gymMember3!.id,
          date,
          status: AttendanceStatus.ABSENT,
        });
      }
    }
  }

  await prisma.attendance.createMany({
    data: attendances,
  });

  console.log('Attendances created');

  // Create moods
  const moods: {
    gymMemberId: string;
    date: Date;
    level: MoodLevel;
    notes: string;
  }[] = [];

  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    // Member 1 moods
    if (i % 3 === 0) {
      moods.push({
        gymMemberId: gymMember1!.id,
        date,
        level: MoodLevel.VERY_GOOD,
        notes: 'Feeling great after workout!',
      });
    } else if (i % 3 === 1) {
      moods.push({
        gymMemberId: gymMember1!.id,
        date,
        level: MoodLevel.GOOD,
        notes: 'Good energy today',
      });
    }

    // Member 2 moods
    if (i % 4 === 0) {
      moods.push({
        gymMemberId: gymMember2!.id,
        date,
        level: MoodLevel.NEUTRAL,
        notes: 'Average day, nothing special',
      });
    } else if (i % 4 === 2) {
      moods.push({
        gymMemberId: gymMember2!.id,
        date,
        level: MoodLevel.BAD,
        notes: 'Feeling tired and sore',
      });
    }

    // Member 3 moods
    if (i % 2 === 0) {
      moods.push({
        gymMemberId: gymMember3!.id,
        date,
        level: i % 6 === 0 ? MoodLevel.VERY_GOOD : MoodLevel.GOOD,
        notes: 'Consistent progress feels great',
      });
    }
  }

  await prisma.mood.createMany({
    data: moods,
  });

  console.log('Moods created');

  // Create alerts
  await prisma.alert.createMany({
    data: [
      {
        gymMemberId: gymMember1!.id,
        type: AlertType.MEDIUM,
        reason: 'Missed 3 consecutive workouts',
        status: AlertStatus.PENDING,
      },
      {
        gymMemberId: gymMember2!.id,
        type: AlertType.LOW,
        reason: 'Reported persistent knee pain',
        status: AlertStatus.RESOLVED,
      },
      {
        gymMemberId: gymMember3!.id,
        type: AlertType.HIGH,
        reason: 'Significant drop in performance metrics',
        status: AlertStatus.PENDING,
      },
    ],
  });

  console.log('Alerts created');

  // Create notifications
  await prisma.notification.createMany({
    data: [
      {
        userId: member1.id,
        type: NotificationType.EMAIL,
        content: 'Your next session with Coach John is tomorrow at 10 AM',
        status: NotificationStatus.SENT,
      },
      {
        userId: member2.id,
        type: NotificationType.SMS,
        content: 'Reminder: Nutrition consultation with Emily on Friday',
        status: NotificationStatus.SENT,
      },
      {
        userId: member3.id,
        type: NotificationType.PUSH,
        content: 'Congratulations on completing your weekly goal!',
        status: NotificationStatus.PENDING,
      },
      {
        userId: coach1.id,
        type: NotificationType.EMAIL,
        content: 'New member assigned to your coaching roster',
        status: NotificationStatus.SENT,
      },
      {
        userId: nutritionist1.id,
        type: NotificationType.WHATSAPP,
        content: 'Please review the updated nutrition plan for Alex Wilson',
        status: NotificationStatus.PENDING,
      },
    ],
  });

  console.log('Notifications created');

  // Create plan templates
  const weightLossPlan = await prisma.planTemplate.create({
    data: {
      name: 'Weight Loss Essentials',
      description:
        'A comprehensive plan focused on sustainable weight loss through balanced nutrition and exercise.',
      category: PlanCategory.WEIGHT_LOSS,
      level: PlanLevel.INTERMEDIATE,
      duration: 90, // 90 days
      isActive: true,
    },
  });

  const muscleBuildingPlan = await prisma.planTemplate.create({
    data: {
      name: 'Muscle Building Pro',
      description:
        'Intensive strength training program designed to maximize muscle growth and definition.',
      category: PlanCategory.MUSCLE_GAIN,
      level: PlanLevel.ADVANCED,
      duration: 120, // 120 days
      isActive: true,
    },
  });

  const cardioFitnessPlan = await prisma.planTemplate.create({
    data: {
      name: 'Cardio Fitness Starter',
      description:
        'Entry-level cardio program to build endurance and improve heart health.',
      category: PlanCategory.CARDIO,
      level: PlanLevel.BASIC,
      duration: 60, // 60 days
      isActive: true,
    },
  });

  const yogaFlexibilityPlan = await prisma.planTemplate.create({
    data: {
      name: 'Yoga & Flexibility Premium',
      description:
        'Premium program combining yoga, stretching, and mobility work for improved flexibility.',
      category: PlanCategory.FLEXIBILITY,
      level: PlanLevel.PREMIUM,
      duration: 90, // 90 days
      isActive: true,
    },
  });

  console.log('Plan templates created');

  // Assign plans to members
  await prisma.memberPlan.createMany({
    data: [
      {
        gymMemberId: gymMember1!.id,
        planTemplateId: weightLossPlan.id,
        startDate: new Date('2023-01-15'),
        endDate: new Date('2023-04-15'),
        status: PlanStatus.COMPLETED,
        notes: 'Successfully completed with 15 lbs weight loss',
      },
      {
        gymMemberId: gymMember1!.id,
        planTemplateId: muscleBuildingPlan.id,
        startDate: new Date('2023-05-01'),
        endDate: new Date('2023-08-29'),
        status: PlanStatus.ACTIVE,
        notes: 'Focusing on upper body strength',
      },
      {
        gymMemberId: gymMember2!.id,
        planTemplateId: yogaFlexibilityPlan.id,
        startDate: new Date('2023-02-20'),
        endDate: new Date('2023-05-21'),
        status: PlanStatus.ACTIVE,
        notes: 'Working on improving overall flexibility and reducing stress',
      },
      {
        gymMemberId: gymMember3!.id,
        planTemplateId: cardioFitnessPlan.id,
        startDate: new Date('2023-03-10'),
        endDate: new Date('2023-05-09'),
        status: PlanStatus.ACTIVE,
        notes: 'Preparing for upcoming 10K race',
      },
    ],
  });

  console.log('Member plans created');

  console.log('Seeding completed successfully');
}
/* 
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    const fn = async () => {
      await prisma.$disconnect();
    };
    fn()
      .then(() => {
        console.log('Disconnected from database');
      })
      .catch((e) => {
        console.error(e);
      });
    return;
  }); */
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect().catch(console.error);
  });
