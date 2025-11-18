"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { createPayment } from "../_actions/create-payment";

const formSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    message: z.string().min(1, 'Mensagem é obrigatório'),

    price: z.enum(["15", "25", "35"], {
        required_error: "Selecione um valor obrigatório",
    })
})

type FormData = z.infer<typeof formSchema>

interface FormPaymentProps {

    creatorId: string;
    slug: string;
}

export function FormPay({ creatorId, slug }: FormPaymentProps) {

    const form = useForm<FormData>({

        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            message: '',
            price: "15"
        },
    })

    async function onSubmit(data: FormData) {

        const priceInCents = Number(data.price) * 100; // Valor em centavos

        const checkout = await createPayment({
            name: data.name,
            message: data.message,
            creatorId: creatorId,
            slug: slug,
            price: priceInCents,
        })

        console.log(checkout)
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite seu nome..."
                                    {...field}
                                    className="bg-white"
                                />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Digite sua mensagem  ..."
                                    {...field}
                                    className="bg-white h-32 resize-none"
                                />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (

                        <FormItem>
                            <FormLabel>Valor do Pagamento</FormLabel>
                            <FormControl>

                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex items-center gap-3"
                                >

                                    {["15", "25", "35"].map((value) => (
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value={value} id={value} />
                                            <Label htmlFor={value}>R${value}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>

                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Fazer Pagamento</Button>
            </form>
        </Form>
    );
}

export default FormPay;