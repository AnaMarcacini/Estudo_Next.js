'use server';
// Ao adicionar o 'use server', você marca todas as funções exportadas no arquivo como funções de servidor. Essas funções de servidor podem então ser importadas para componentes Cliente e Servidor, tornando-os extremamente versáteis.

// Você também pode escrever Ações do Servidor diretamente dentro dos Componentes do Servidor adicionando "use server" dentro da ação. Mas para este curso, manteremos todos organizados em um arquivo separado.

import { z } from 'zod';

const FormSchema = z.object({ // Este esquema irá validar formDataantes de salvá-lo em um banco de dados.
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
  });
   
  const CreateInvoice = FormSchema.omit({ id: true, date: true });

 
export async function createInvoice(formData: FormData) {
  const rawFormData = {
    // const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
    // console.log(customerId)
    // console.log(amount)
    // console.log(status)
}



// É bom saber : em HTML, você passaria uma URL para o actionatributo. Este URL seria o destino para onde os dados do seu formulário deveriam ser enviados (geralmente um endpoint da API).

// No entanto, no React, o actionatributo é considerado um suporte especial - o que significa que o React é construído sobre ele para permitir que ações sejam invocadas.

// Nos bastidores, as ações do servidor criam um POSTendpoint de API. É por isso que você não precisa criar endpoints de API manualmente ao usar ações do servidor.