layout: default
title: SCFV - Sistema Unificado de Gestão
nav_order: 1 
---

# 📊 Sistema Unificado de Gestão – SCFV

**Uma solução de gestão simplificada, de baixo custo e alto impacto, utilizando o poder do Google Workspace.**

Desenvolvido por **Victor Luis Minikowski**  
✉️ `victorlmnk@gmail.com`

---

### 📍 Navegação Rápida
* [Visão Geral](#🧠-visão-geral)
* [Arquitetura do Sistema](#⚙️-arquitetura-do-sistema)
* [Vantagens](#✨-vantagens)
* [Stack Tecnológico](#🛠️-stack-tecnológico)
* [Módulos Principais](#📂-módulos-principais)
* [Módulo Detalhado: Gestão de Projetos Sociais](#🌍-módulo-detalhado-gestão-de-projetos-sociais)
* [Fluxo de Dados](#🗃️-fluxo-de-dados)
* [Automações](#🤖-automações)
* [Roadmap de Evolução](#🔄-roadmap-de-evolução)
* [Contato](#📬-contato)

---

## 🧠 Visão Geral

> O sistema foi projetado com foco em **simplicidade, acessibilidade e custo zero**, utilizando o **Google Sheets como backend** para centralizar a entrada, o processamento e a saída de informações.

Embora tenha sido criado para o **SCFV (Serviço de Convivência e Fortalecimento de Vínculos)**, sua arquitetura modular permite fácil adaptação a diferentes contextos e projetos sociais.

---

## ⚙️ Arquitetura do Sistema

### 📥 Entrada de Dados
- **Google Forms:** Utilizado para a coleta de dados primários, com validações de campo para garantir a consistência das informações.
- **Integração Nativa:** Os dados dos formulários são enviados automaticamente para o Google Sheets, sem necessidade de conectores externos.
- **Interface Simplificada:** Formulários intuitivos que facilitam o uso por equipes com diferentes níveis de habilidade técnica.

### ⚡ Processamento
- **Google Sheets:** Funciona como o coração do sistema, onde os dados são processados.
- **Fórmulas Avançadas:** Consolidação de múltiplas fontes, controle automático de presenças e padronização de informações.
- **Google Apps Script:** Utilizado para automações, como envio de e-mails, lembretes e geração de relatórios.

### 📤 Saída de Dados
- **Relatórios em HTML/PDF:** A partir do arquivo `UNIFICADO.html`, é possível gerar relatórios profissionais e exportá-los para PDF com um único clique.
- **Painéis de Controle:** Visualização de KPIs e métricas em tempo real diretamente nas planilhas ou em painéis web simples.

---

## ✨ Vantagens

| Benefício | Descrição |
|:--- |:--- |
| 💸 **Custo Zero** | Elimina a necessidade de servidores, licenças de software ou bancos de dados pagos. |
| 🚀 **Implementação Rápida** | O sistema pode ser configurado e estar funcional em poucas horas. |
| 🛠️ **Manutenção Simplificada** | A lógica do sistema é editável diretamente nas planilhas, facilitando ajustes. |
| 📄 **Saída Profissional** | Gera relatórios com layout limpo e profissional, prontos para uso oficial. |

---

## 🛠️ Stack Tecnológico

- **Backend:** `Google Sheets` + `Google Apps Script`
- **Frontend:** `HTML5`, `CSS3`, `JavaScript` (baseado no template [Gentelella Admin](https://github.com/ColorlibHQ/gentelella))
- **Coleta de Dados:** `Google Forms`
- **Geração de Relatórios:** Conversão de HTML para PDF nativa do navegador.

---

## 📂 Módulos Principais

- **📋 Gestão de Matrículas e Educandos:** Controle de matrículas, desligamentos e frequência.
- **👩‍⚕️ Atendimento Técnico e Pedagógico:** Registro de ocorrências e geração de relatórios técnicos.
- **📈 KPIs e Métricas Institucionais:** Acompanhamento de indicadores de desempenho e impacto.
- **🖼️ Ferramentas de Comunicação:** Geradores de imagens e templates para comunicação externa.
- **🌍 Gestão de Projetos Sociais:** Administração completa do ciclo de vida dos projetos.

---

## 🌍 Módulo Detalhado: Gestão de Projetos Sociais

Este módulo oferece uma administração completa para projetos, integrando-se ao fluxo de educandos e às métricas institucionais.

### Funcionalidades Principais

#### **👥 Gestão de Participantes**

**➕ Realizar Matrícula**  
Formulário unificado com validação automática para inscrição de participantes, que gera uma ficha cadastral padronizada.  
*Plataforma: **Google Forms***

**➖ Realizar Desligamento**  
Processo para registrar a saída de um participante, com motivos pré-definidos para análise posterior e emissão de relatório automático.

#### **📊 Controle Operacional**

**✔️ Controle de Frequência**  
Sistema de malotes digitais onde as listas de presença são enviadas e consolidadas automaticamente na planilha central.  
*Plataforma: **Google Sheets***

**💹 Métricas Sociais**  
Painel dedicado com indicadores chave, como taxa de evasão, frequência média e análise de impacto social do projeto.

---

## 🗃️ Fluxo de Dados

O diagrama abaixo ilustra o fluxo de informações dentro do sistema, desde a coleta até a geração de relatórios.

```mermaid
graph TD
    subgraph Entrada
        A[📝 Formulário de Matrícula]
        B[📋 Listas de Presença]
        C[📑 Registro de Atendimento]
    end

    subgraph Processamento
        D{📊 Planilha Mestra no Google Sheets}
        D -- Consolida --> E[🤖 Lógica com Fórmulas e Scripts]
    end

    subgraph Saída
        F[📄 Relatórios em PDF]
        G[📈 Painel Web de KPIs]
        H[📤 Exportação de Dados]
    end

    A --> D
    B --> D
    C --> D
    E --> F
    E --> G
    E --> H
🤖 Automações (Google Apps Script)

Um dos principais recursos do sistema são as automações que reduzem o trabalho manual.

Exemplo: Lembrete Automático de Preenchimento

Verificação Diária: Um script verifica planilhas ou registros pendentes.

Notificação: Envia um e-mail personalizado para o responsável.

Ação: O e-mail contém um link direto para o formulário ou planilha que precisa de atenção.

Fluxo: Gatilho de Tempo → Verificação na Planilha → Envio de E-mail → Ação do Usuário

🔄 Roadmap de Evolução

O projeto está em constante evolução. Os próximos passos planejados incluem:

Fase Atual: Backend em Google Sheets, formulários e relatórios estáticos.

Próximas Etapas: Migrar o backend para uma solução com Python + SQLite para maior escalabilidade.

Futuro: Implementar um sistema de autenticação de usuários, um painel administrativo completo e APIs RESTful para integrações.

Longo Prazo: Hospedagem profissional da aplicação e sistema de permissões granular por usuário.

📬 Contato

Ficou com dúvidas ou tem sugestões? Entre em contato!

Victor Luis Minikowski
📧 victorlmnk@gmail.com

code
Code
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END
