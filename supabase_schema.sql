-- Criação da tabela para salvar os protótipos gerados (leads)
create table public.prototypes (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  company_name text not null,
  app_description text not null,
  constraint prototypes_pkey primary key (id)
);

-- Configuração de segurança (RLS)
-- Permite que qualquer pessoa (anon) possa INSERIR dados (criar um novo lead)
alter table public.prototypes enable row level security;

create policy "Enable insert for anon users" on public.prototypes
  for insert
  with check (true);
