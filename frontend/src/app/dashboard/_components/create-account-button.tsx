"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

function CreateAccountButton() {

    const [loading, setLoading] = useState(false);

    async function handleCreateStripAccount() {

        setLoading(true);

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/stripe/create-account`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await res.json();

            if (!res.ok) {
                toast.error("Falha ao criar conta de pagamento.");
                setLoading(false);
                return;
            }

            window.location.href = data.url;

        } catch (err) {
            console.log(err)
            setLoading(false);
        }

        //API Stripe e redirecionar para a criação da conta

    }

    return (

        <div className="mb-5 ">
            <Button
                className="cursor-pointer"
                onClick={handleCreateStripAccount}
                disabled={loading}
            >
                {loading ? 'Carregando...' : 'Ativar conta de pagamento'}
            </Button>
        </div>
    );
}

export default CreateAccountButton;