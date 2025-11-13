"use client"

import { ChangeEvent, useState, useRef } from "react";
import { debounce } from 'lodash'
import { toast } from "sonner";
import changeDescription from "../_actions/change-bio";

function Description({ initialDescription }: { initialDescription: string }) {

    const [description, setDescription] = useState(initialDescription)
    const [originalDescription] = useState(initialDescription)

    const debouncedSaveName = useRef(

        debounce(async (currentDescription: string) => {

            // Se o nome estiver vazio, restaurar o nome original
            if (currentDescription.trim() === "") {
                setDescription(originalDescription)
            }

            if (currentDescription !== description) {

                try {
                    // Chamar API para salvar o nome
                    const response = await changeDescription({ description: currentDescription })

                    if (response.error) {
                        console.log('Erro ao salvar o nome:', response.error)
                        toast.error('Erro ao salvar o nome.')
                        setDescription(originalDescription)
                        return
                    }

                    toast.success('Sua descrição foi atualizada com sucesso!')

                    console.log('Salvo com sucesso:')

                } catch (error) {
                    setDescription(originalDescription)
                }
            }

        }, 1500)
    ).current

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {

        const value = event.target.value
        setDescription(value)

        debouncedSaveName(value)
    }

    return (

        <>
            <textarea
                className="text-base bg-gray-50 border border-gray-100 rounded-md outline-none p-2 w-full max-w-2xl my-3 h-40 resize-none"
                value={description}
                onChange={handleChange}
            />
        </>
    );
}

export default Description;