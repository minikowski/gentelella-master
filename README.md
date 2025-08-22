# 📊 Sistema Unificado de Gestão

**Uma solução de gestão simplificada, de baixo custo e alto impacto, utilizando o poder do Google Workspace.**

<p align="center">
  <img src="https://i.imgur.com/GOKbn6q.png" alt="Tela Principal do Sistema" width="800"/>
</p>

Desenvolvido por **Victor Luis Minikowski**  
✉️ `victorlmnk@gmail.com`

---

## 📍 Navegação Rápida

- [Visão Geral](#visão-geral)  
- [Arquitetura do Sistema](#arquitetura-do-sistema)  
- [Vantagens](#vantagens)  
- [Stack Tecnológico](#stack-tecnológico)  
- [Módulos Principais](#módulos-principais)  
- [Módulo Detalhado: Gestão de Projetos Sociais](#módulo-detalhado-gestão-de-projetos-sociais)  
- [Fluxo de Dados](#fluxo-de-dados)  
- [Automações](#automações)  
- [Roadmap de Evolução](#roadmap-de-evolução)  
- [Contato](#contato)

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

| Benefício               | Descrição                                                                 |
|------------------------|---------------------------------------------------------------------------|
| 💸 **Custo Zero**       | Elimina a necessidade de servidores, licenças de software ou bancos de dados pagos. |
| 🚀 **Implementação Rápida** | O sistema pode ser configurado e estar funcional em poucas horas.         |
| 🛠️ **Manutenção Simplificada** | A lógica do sistema é editável diretamente nas planilhas, facilitando ajustes. |
| 📄 **Saída Profissional** | Gera relatórios com layout limpo e profissional, prontos para uso oficial. |

---

## 🛠️ Stack Tecnológico

- **Backend:** `Google Sheets` + `Google Apps Script`  
- **Frontend:** `HTML5`, `CSS3`, `JavaScript` (baseado no template [Gentelella Admin](https://github.com/ColorlibHQ/gentelella))  
- **Coleta de Dados:** `Google Forms`  
- **Geração de Relatórios:** Conversão de HTML para PDF nativa do navegador.
- **Chatboat automático:** Interação entre usuário e documentos sobre fluxos e regras.
Trata-se de um chatbot estático de execução client-side, cuja lógica opera inteiramente no navegador do usuário via JavaScript, sem dependência de um backend ou banco de dados.
Seu funcionamento pode ser descrito em quatro componentes principais:
Interface (UI): Construída com HTML e CSS, a interface é atualizada dinamicamente através da manipulação do DOM. Novas mensagens do usuário e do bot são criadas e anexadas ao contêiner do chat em tempo real.
Base de Conhecimento (Knowledge Base): É uma estrutura de dados in-memory, implementada como um array de objetos JavaScript. Cada objeto representa uma "intenção" e associa um array de keywords (palavras-chave) pré-definidas a um text (a resposta correspondente).
Mecanismo de Matching (Matching Engine): O núcleo do sistema, que opera da seguinte forma:
Normalização da Entrada: A pergunta do usuário passa por um processo de normalização que inclui: conversão para minúsculas, remoção de acentos (diacríticos) e filtragem de stop words (palavras comuns e sem peso semântico).
Algoritmo de Scoring: O sistema itera pela base de conhecimento e aplica um algoritmo de pontuação simples. Para cada entrada, ele conta quantas palavras-chave normalizadas correspondem às palavras na pergunta do usuário.
Seleção da Resposta: A resposta associada à entrada com a maior pontuação é selecionada. A correspondência é literal e baseada em palavras-chave, não em análise semântica ou Processamento de Linguagem Natural (NLP).
Fallback: Caso nenhuma palavra-chave seja encontrada (pontuação zero), um mecanismo de fallback exibe uma mensagem padrão, informando que a resposta não foi encontrada.

---

## 📂 Módulos Principais

- **💬 Agente Virtual:** Chat virtual que permite aos colaboradores fazerem perguntas sobre o pacto de convivência e fluxos de trabalho. Explicação sobre o seu funcionamento no campo "Stack Tecnológico".
- **📈 KPIs e Métricas Institucionais:** Acompanhamento de indicadores de desempenho e impacto dos colaboradores. Exemplo: O KPI pedagógico acompanha a efetividade dos planejamentos dos educadores, tornando possível, por exemplo, identificar com qual modalidade (idade dos educandos) ele tem melhor desenvoltura. É possível, ainda, acompanhar o atingimento de metas de matrícula e busca ativa em tempo real, a partir da integração com as agendas dos técnicos de referência.
- **🖼️ Ferramentas de Comunicação:** Geradores de imagens e templates para comunicação externa. São geradas imagens padronizadas para as redes sociais (com logo, identidade visual e enquadramento); avisos e convites para o Whatsapp. Esta ferramenta é útil para agilizar a comunicação de encontros com famílias, atividades intergeracionais, eventos externos, etc.
- **📊 Avaliação de Colaboradores:** Sistema de avaliação vertical mútua (180°), com geração automática de ofícios a serem assinados pelas partes. Permite o acompanhamento da evolução dos colaboradores por meio de visualizações detalhadas ou gráficos, além de acesso rápido para que educadores forneçam feedback sobre sua supervisão em sua plataforma.  
- **📌 Orientação de Colaboradores:** Ferramenta para geração automática de ofícios voltados à orientação de colaboradores que necessitem de intervenção do RH. O conteúdo é adaptável à visão, missão e valores da instituição, promovendo alinhamento estratégico e humanizado. Há uma série de textos pré-definidos com base nas responsabilidades expressas em contrato, e a possibilidade de inserir textos novos.
- **📚 Acompanhamento de Indicadores Pedagógicos:** Os educadores lançam o relato e avaliação de suas atividades, a plataforma preenche os campos adequados no Relatório Mensal, e as supervisoras recebem e-mail para acompanhar em tempo real a situação da meta, evitando o atraso do relatório. Ou seja, o processo é acompanhado de ponta a ponta: inicia no educador, passa pela supervisão, chega na coordenação para ser validado, e é inserido na planilha mensal enviada à Prefeitura.
- **📩 Acompanhamento de Feedbacks da Aprendizagem Profissional:** E-mail automático para as supervisoras do SCFV quando um de seus educandos recebem feedback de empresas parceiras da Aprendizagem Profissional. Esta ferramenta facilita a comunicação entre ambos os serviços, possibilitando a melhora contínua na formação dos educandos a partir da ciência de aspectos a serem trabalhados pelos educadores.
---

## 🌍 Módulo Detalhado: Gestão de Projetos Sociais

Este módulo oferece uma administração completa para projetos, integrando-se ao fluxo de educandos e às métricas institucionais.

### Funcionalidades Principais

#### 👥 Gestão de Participantes

**➕ Realizar Matrícula**  
Formulário unificado com validação automática para inscrição de participantes, que gera uma ficha cadastral padronizada.  
*Plataforma: **Google Forms***

**➖ Realizar Desligamento**  
Processo para registrar a saída de um participante, com motivos pré-definidos para análise posterior e emissão de relatório automático.

#### 📊 Controle Operacional

**✔️ Controle de Frequência**  
Sistema de malotes digitais onde as listas de presença são enviadas e consolidadas automaticamente na planilha central.  
*Plataforma: **Google Sheets***

**💹 Métricas Sociais**  
Registro de informações socioeconômicas e demográficas dos educandos, obtidas a partir do sistema municipal da assistência social do município, para acompanhamento e análise de vulnerabilidade social.

- **Identificação:** Nome do educando, coletivo, código de cadastro no sistema municipal, NIS, CPF.  
- **Contato:** Telefone, endereço, bairro, dois contatos de referência.  
- **Dados pessoais:** Data de nascimento, sexo, raça, escolaridade, se estuda, ocupação.  
- **Condição social:** Deficiência, renda pessoal, número de integrantes da família, renda familiar, renda per capita.

**👩‍⚕️ Atendimento Técnico e Pedagógico:** Registro de ocorrências e geração de relatórios técnicos.  

#### 📈 Métricas Comportamentais  
Registro e acompanhamento de faltas e ocorrências registradas nos cadastros dos educandos, permitindo análises comportamentais e intervenções pedagógicas mais precisas.

---

## 🗃️ Fluxo de Dados

O diagrama abaixo ilustra o fluxo de informações dentro do sistema, desde a coleta até a geração de relatórios.

```mermaid
graph TD
    %% Estilo dos nós
    classDef entrada fill:#E3F2FD,stroke:#2196F3,color:#0D47A1;
    classDef processamento fill:#FFF3E0,stroke:#FB8C00,color:#E65100;
    classDef saida fill:#E8F5E9,stroke:#43A047,color:#1B5E20;

    %% Entrada
    A[📝 Formulário de Matrícula]
    B[📋 Lista de Presença]
    C[📑 Registro de Atendimento]
    class A,B,C entrada

    %% Processamento
    D[📊 Planilha Mestra - Google Sheets]
    E[⚙️ Processamento com Fórmulas e Scripts]
    class D,E processamento

    %% Saída
    F[📄 Relatórios em PDF]
    G[📈 Painel Web de KPIs]
    H[📤 Exportação de Dados]
    class F,G,H saida

    %% Fluxo
    A --> D
    B --> D
    C --> D
    D --> E
    E --> F
    E --> G
    E --> H
