# 📊 Sistema Unificado de Gestão – SCFV

Sistema desenvolvido por **Victor Luis Minikowski**  
✉️ victorlmnk@gmail.com

---

## 🧠 Visão Geral

Este sistema foi desenvolvido com foco em **simplicidade, acessibilidade e baixo custo**, utilizando o **Google Sheets como backend** principal para entrada, processamento e saída de dados. Foi projetado inicialmente para atender serviços públicos com baixa infraestrutura, como o **SCFV (Serviço de Convivência e Fortalecimento de Vínculos)**, mas pode ser adaptado para diversas realidades.

---

## ⚙️ Estratégia Técnica

### ✅ Entrada de dados
- Formulários criados diretamente no **Google Forms**, com validação automática
- Integração nativa com **Google Sheets**, evitando codificação manual

### ⚙️ Processamento
- Aplicação de **fórmulas no Sheets** para:
  - Unificar a lista de alunos
  - Controlar presença automaticamente
  - Gerar dados limpos para visualização

### 📤 Saída de dados
- Relatórios estruturados em **HTML com layout profissional**
- Exportação fácil para **PDF**
- Acesso direto via links no arquivo `UNIFICADO.html`

---

## ✅ Vantagens da Arquitetura Atual

- 💸 **Gratuito**: sem custos com servidores ou bancos de dados
- 🚀 **Leve e funcional**: ideal para protótipos e MVPs
- 🛠️ **Fácil manutenção**: dados editáveis diretamente em planilhas
- 📄 **Visual profissional**: pronto para relatórios e apresentações formais

---

## 🔄 Escalabilidade e Evolução

O sistema foi estruturado para **evoluir progressivamente**, conforme a demanda e os recursos disponíveis:

- 📊 Migração futura para **banco de dados SQL** (MySQL/PostgreSQL)
- 🔐 Implementação de **autenticação real com PHP/Python**
- 🔗 Criação de **APIs RESTful**
- ☁️ Hospedagem profissional (Heroku, Render, VPS)
- 🔧 Integração com o front-end **Gentelella Bootstrap Admin**
- 👥 Desenvolvimento de **painel administrativo com perfis e permissões**

---

## 🧱 Tecnologias Utilizadas

- **Google Sheets**
- **Google Forms**
- **HTML5**
- **CSS3 (via Gentelella Template)**
- **JavaScript (leve e não-dependente de frameworks)**
- **PDF manual via impressão do navegador**

---

## 📄 Subpáginas do Sistema

Abaixo estão listadas todas as subpáginas funcionais atualmente implementadas ou em desenvolvimento. Cada uma possui um propósito específico dentro da rotina do serviço, permitindo organização e controle eficientes.  

> 🔧 *Descreva abaixo, com seus próprios termos, o que cada subpágina faz e como ela é utilizada no dia a dia.*

### 🗂️ Agendas de Matrícula
<!-- Descrição aqui -->

---

### 🧑‍⚕️ Atendimento Técnico-Social
<!-- Descrição aqui -->

---

### 📘 Indicadores Pedagógicos
<!-- Descrição aqui -->

---

### 📊 Indicadores KPI
<!-- Descrição aqui -->

---

### 📝 Avaliações
<!-- Descrição aqui -->

---

### 📋 Orientações – Colaboradores
<!-- Descrição aqui -->

---

### 🎨 Oficinas CMDCA
<!-- Descrição aqui -->

---

### 🖼️ Gerador de Imagens
<!-- Descrição aqui -->

---

### 🧠 Autoavaliação Psicossocial
<!-- Descrição aqui -->

---

### 🧾 Sistema PCE
<!-- Descrição aqui -->

---

## 🛤️ Próximos Passos

- [ ] Refatorar back-end usando **Python + SQLite** (inicialmente)
- [ ] Integrar com APIs de autenticação (Google ou JWT)
- [ ] Modularizar as planilhas e padronizar cadastros
- [ ] Substituir links manuais por geração dinâmica de relatórios
- [ ] Implementar painel web com permissões

---


## 🚀 Automatizações com Google Apps Script

O sistema também utiliza **Google Apps Script** para criar automações que reduzem o trabalho manual da equipe.

### ✉️ Envio automático de e-mails
- **Objetivo:** Cobrar o preenchimento de indicadores e formulários pendentes.
- **Funcionamento:** 
  - O Apps Script verifica periodicamente o estado dos dados nas planilhas.
  - Caso campos estejam em branco ou incompletos, um e-mail personalizado é enviado automaticamente para os responsáveis.
  - A mensagem inclui links diretos para o formulário ou documento que precisa ser atualizado.
- **Benefícios:**
  - Redução de retrabalho por esquecimento
  - Aumento da regularidade no preenchimento de dados
  - Comunicação direta com a equipe, sem depender de controle manual

## 📬 Contato

**Victor Luis Minikowski**  
📧 victorlmnk@gmail.com

---
