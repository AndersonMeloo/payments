"use server"

import { prisma } from "@/lib/prisma"
import { z } from "zod";

const createUserNameSchema = z.object({

    slug: z.string().min(1, 'Slug é obrigatório'),
    name: z.string().min(1, 'O nome precisa ter no mínimo 1 caractere'),
    message: z.string().min(5, 'A mensagem precisa ter no mínimo 5 caracteres'),
    price: z.number().min(10, 'O valor mínimo é R$10,00'),
    creatorId: z.string()
})

type CreatePaymantSchema = z.infer<typeof createUserNameSchema>

export async function createPayment(data: CreatePaymantSchema) {

    const schema = createUserNameSchema.safeParse(data)

    if (!schema.success) {

        return {
            data: null,
            error: schema.error.issues[0].message
        }
    }

    try {
        console.log(data)

        const creator = await prisma.user.findUnique({
            
            where: {
                id: data.creatorId
            }
        })

    } catch (error) {
        return {
            data: null,
            error: 'Erro ao criar pagamento'
        }
    }
}