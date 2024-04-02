import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}





// useSearchParams- Permite acessar os parâmetros da URL atual. Por exemplo, os parâmetros de pesquisa para este URL /dashboard/invoices?page=1&query=pendingseriam assim: {page: '1', query: 'pending'}.

// usePathname- Permite ler o caminho do URL atual. Por exemplo, para a rota /dashboard/invoices, usePathnameretornaria '/dashboard/invoices'.

// useRouter- Permite a navegação entre rotas dentro dos componentes do cliente de forma programática. Existem vários métodos que você pode usar.
// Aqui está uma rápida visão geral das etapas de implementação:

// Capture a entrada do usuário.
// Atualize o URL com os parâmetros de pesquisa.
// Mantenha o URL sincronizado com o campo de entrada.
// Atualize a tabela para refletir a consulta de pesquisa.
