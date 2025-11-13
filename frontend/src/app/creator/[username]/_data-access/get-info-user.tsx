"use server"
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createUserNameSchema = z.object({

    username: z.string({ message: 'O username é obrigatorio' })
})

type CreateUserNameSchema = z.infer<typeof createUserNameSchema>;

export async function getInfoUser(data: CreateUserNameSchema) {

    const schema = createUserNameSchema.safeParse(data)

    if (!schema.success) {
        return null
    }

    try {

        const user = await prisma.user.findFirst({

            where: {
                userName: data.username
            },

            select: {
                id: true,
                name: true,
                userName: true,
                bio: true,
                image: true
            }
        })

        return user

    } catch (error) {
        return null
    }
}