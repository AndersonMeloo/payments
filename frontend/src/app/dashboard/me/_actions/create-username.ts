"use server"

import { z } from "zod"
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createSlug } from "@/utils/create-slug";

const creataeUserNameSchema = z.object({

    username: z.string({ message: 'O UserName é Obrigatório' }).min(4, "O UserName precisa ter no mínimo 4 caracteres")
})

type CreateUserNameFormData = z.infer<typeof creataeUserNameSchema>

export async function CreateUserName(data: CreateUserNameFormData) {

    const session = await auth()

    if (!session?.user) {

        return {
            data: null,
            error: 'Usuário não autenticado'
        }
    }

    const schema = creataeUserNameSchema.safeParse(data)

    if (!schema.success) {
        console.log(schema)
        return {
            data: null,
            error: schema.error.issues[0].message
        }
    }

    console.log(data.username)

    try {

        const userId = session.user.id

        const slug = createSlug(data.username)
        console.log(slug)

        const existSlug = await prisma.user.findFirst({

            where: {
                userName: slug
            }
        })

        if (existSlug) {

            return {
                data: null,
                error: 'Este userName já existe, tente outro!'
            }
        }

        await prisma.user.update({

            where: {
                id: userId,
            },

            data: {
                userName: slug
            }
        })

        return {

            data: slug,
            error: null
        }

    } catch (error) {

        return {
            data: null,
            error: 'Falha ao atualizar username'
        }
    }
}