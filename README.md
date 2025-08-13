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

---

## 📂 Módulos Principais

- **📋 Gestão de Matrículas e Educandos:** Controle de matrículas, desligamentos e frequência.  
- **👩‍⚕️ Atendimento Técnico e Pedagógico:** Registro de ocorrências e geração de relatórios técnicos.  
- **📈 KPIs e Métricas Institucionais:** Acompanhamento de indicadores de desempenho e impacto.  
- **🖼️ Ferramentas de Comunicação:** Geradores de imagens e templates para comunicação externa.  
- **🌍 Gestão de Projetos Sociais:** Administração completa do ciclo de vida dos projetos.  
- **📊 Avaliação de Colaboradores:** Sistema de avaliação vertical mútua (180°), com geração automática de ofícios a serem assinados pelas partes. Permite o acompanhamento da evolução dos colaboradores por meio de visualizações detalhadas ou gráficos, além de acesso rápido para que educadores forneçam feedback sobre sua supervisão.  
- **📌 Orientação de Colaboradores:** Ferramenta para geração automática de ofícios voltados à orientação de colaboradores que necessitem de intervenção do RH. O conteúdo é adaptável à visão, missão e valores da instituição, promovendo alinhamento estratégico e humanizado.

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
