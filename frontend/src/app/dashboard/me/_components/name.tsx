"use client"

import { ChangeEvent, useState, useRef } from "react";
import { debounce } from 'lodash'
import { changeName } from '../_actions/change-name';
import { toast } from "sonner";

function Name({ initialName }: { initialName: string }) {

    const [name, setName] = useState(initialName);
    const [originalName] = useState(initialName)

    const debouncedSaveName = useRef(

        debounce(async (currentName: string) => {

            // Se o nome estiver vazio, restaurar o nome original
            if (currentName.trim() === "") {
                setName(originalName)
            }

            if (currentName !== name) {

                try {
                    // Chamar API para salvar o nome
                    const response = await changeName({ name: currentName })

                    if (response.error) {
                        console.log('Erro ao salvar o nome:', response.error)
                        toast.error('Erro ao salvar o nome.')
                        setName(originalName)
                        return
                    }

                    toast.success('Nome salvo com sucesso!')

                    console.log('Salvo com sucesso:')

                } catch (error) {
                    setName(originalName)
                }
            }

        }, 500)
    ).current

    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {

        const value = event.target.value
        setName(value)

        debouncedSaveName(value)
    }

    return (

        <>
            <input
                className="text-xl md:text-2xl font-bold bg-gray-50 border border-gray-100 rounded-md outline-none p-2 w-full max-w-2xl text-center my-3"
                value={name}
                onChange={handleChangeName}
            />
        </>
    );
}

export default Name;