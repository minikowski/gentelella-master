# 📊 Sistema Unificado de Gestão – SCFV

**Sistema desenvolvido por Victor Luis Minikowski**  
✉️ victorlmnk@gmail.com  

---

## 🧠 Visão Geral

Sistema focado em **simplicidade, acessibilidade e baixo custo**, utilizando **Google Sheets como backend** para:  
✔ Entrada de dados  
✔ Processamento  
✔ Saída de informações  

Projetado inicialmente para o **SCFV (Serviço de Convivência e Fortalecimento de Vínculos)**, mas adaptável a diversos contextos.

---

## ⚙️ Arquitetura do Sistema

### 📥 Entrada de Dados
- **Google Forms** com validação automática
- Integração nativa com **Google Sheets**
- Interface simplificada para usuários finais

### ⚡ Processamento
- **Fórmulas avançadas** no Sheets para:
  - Consolidação de dados
  - Controle automático de presenças
  - Padronização de informações

### 📤 Saída de Dados
- Relatórios em **HTML profissional**
- Exportação para **PDF** com um clique
- Navegação via `UNIFICADO.html`

---

## ✨ Vantagens

| Benefício | Descrição |
|-----------|-----------|
| 💸 Zero custo | Sem necessidade de servidores ou bancos de dados pagos |
| 🚀 Implementação rápida | Funcional em poucas horas |
| 🛠️ Manutenção simplificada | Edição direta nas planilhas |
| 📄 Saída profissional | Layout pronto para relatórios oficiais |

---

## 🔄 Roadmap de Evolução

1. **Fase Atual**
   - Google Sheets como backend
   - Formulários básicos
   - Relatórios estáticos

2. **Próximas Etapas**
   - Migração para banco de dados SQL
   - Autenticação com PHP/Python
   - APIs RESTful
   - Painel administrativo completo

3. **Futuro**
   - Hospedagem profissional
   - Integração com Gentelella Admin
   - Sistema de permissões granular

---

## 🛠️ Stack Tecnológico

- **Frontend**: HTML5, CSS3 (Gentelella Template), JavaScript vanilla
- **Backend**: Google Sheets + Apps Script
- **Relatórios**: HTML to PDF via browser
- **Forms**: Google Forms com validação

---

## 📂 Módulos Principais

### 📋 Gestão de Matrículas
- Agendamento automático
- Integração com metas
- Painel de acompanhamento

### 👩‍⚕️ Atendimento Técnico
- Registro de ocorrências
- Histórico completo
- Relatórios por técnico

### 📊 Indicadores Pedagógicos
- Alinhamento com diretrizes municipais
- Geração automática de relatórios
- Integração com sistemas da prefeitura

### 📈 KPIs Institucionais
- Tempo médio de atendimento
- Efetividade pedagógica
- Avaliação de eventos
- Cumprimento de metas

### 🖼️ Ferramentas de Comunicação
- Gerador de imagens para redes sociais
- Modelos para WhatsApp
- Templates institucionais

---
layout: default
title: Gestão de Projetos Sociais
nav_order: 5
---

# 🌍 Gestão de Projetos Sociais

Módulo completo para administração de projetos sociais, integrado ao fluxo de educandos e métricas institucionais.

## 🧩 Funcionalidades Principais

### 👥 Gestão de Participantes
<div class="funcionalidade">
  <div class="icon">person_add</div>
  <div class="content">
    <h3>Realizar Matrícula</h3>
    <p>Formulário unificado com validação automática e geração de ficha cadastral</p>
    <div class="badge">Google Forms</div>
  </div>
</div>

<div class="funcionalidade">
  <div class="icon">person_remove</div>
  <div class="content">
    <h3>Desligamento</h3>
    <p>Registro de saída com motivos pré-definidos e relatório automático</p>
  </div>
</div>

### 📊 Controle Operacional
<div class="funcionalidade">
  <div class="icon">check_circle</div>
  <div class="content">
    <h3>Frequência</h3>
    <p>Sistema de malotes digitais com consolidação automática</p>
    <div class="badge">Google Sheets</div>
  </div>
</div>

<div class="funcionalidade">
  <div class="icon">analytics</div>
  <div class="content">
    <h3>Métricas Sociais</h3>
    <p>Painel com indicadores de evasão, frequência e impacto social</p>
  </div>
</div>

## 🗃️ Estrutura de Dados

```mermaid
graph TD
  A[Formulário de Matrícula] --> B[Planilha Mestra]
  B --> C{Processamento}
  C --> D[Relatórios PDF]
  C --> E[Painel Web]
  C --> F[Exportação AGML]
---

## 🤖 Automações (Google Apps Script)

### ✉️ Lembrete Automático
- Verificação diária de formulários pendentes
- Envio de e-mails personalizados
- Links diretos para preenchimento

**Fluxo**:  
Planilha → Verificação → Notificação → Preenchimento

---

## 📅 Próximas Implementações

- [ ] Backend em Python + SQLite
- [ ] Sistema de autenticação
- [ ] Geração dinâmica de relatórios
- [ ] Painel administrativo
- [ ] API RESTful

---

## 📬 Contato

**Victor Luis Minikowski**  
📧 victorlmnk@gmail.com 
