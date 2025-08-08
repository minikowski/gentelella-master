document.addEventListener('DOMContentLoaded', () => {
  const fatoresGerais = [
    "Assiduidade",
    "Pontualidade",
    "Relacionamento interpessoal",
    "Organização",
    "Responsabilidade",
    "Iniciativa",
    "Postura ética",
    "Trabalho em equipe",
    "Comprometimento",
    "Comunicação",
    "Zelo com materiais e patrimônio",
    "Cumprimento de normas"
  ];

  const fatoresEspecificos = [
    {
      titulo: "Planejamento",
      subitens: ["Organiza a rotina", "Prevê recursos", "Prevê avaliação", "Atende ao cronograma"]
    },
    {
      titulo: "Execução",
      subitens: ["Aplica recursos com coerência", "Mede o tempo da atividade", "Propõe diferentes estratégias", "Apresenta domínio de grupo"]
    },
    {
      titulo: "Conhecimento Técnico",
      subitens: ["Domina conteúdos específicos", "Domina conteúdos transversais", "Aplica conteúdo com sentido", "Aplica atividades com propósito"]
    },
    {
      titulo: "Acompanhamento",
      subitens: ["Acompanha as atividades", "Faz intervenções pertinentes", "Propõe atividades de reforço", "Aplica avaliação diagnóstica"]
    },
    {
      titulo: "Relacionamento com o Aprendiz",
      subitens: ["Respeita os alunos", "Mantém postura coerente", "Aplica limites com respeito", "Apresenta escuta ativa"]
    },
    {
      titulo: "Relacionamento com a Equipe",
      subitens: ["Participa de reuniões", "Troca experiências", "Colabora com colegas", "Respeita decisões da equipe"]
    },
    {
      titulo: "Relacionamento com a Gestão",
      subitens: ["Recebe orientações", "Aceita devolutivas", "Busca alinhar ações", "Colabora com sugestões"]
    },
    {
      titulo: "Desenvolvimento Profissional",
      subitens: ["Busca formação contínua", "Reconhece limitações", "Evolui nas ações", "Apresenta postura profissional"]
    }
  ];

  function gerarTabelaFatores(titulos, containerId, isEspecifico = false) {
    const container = document.getElementById(containerId);
    titulos.forEach((fator, i) => {
      let html = `<table class="table table-bordered table-striped table-sm avaliacao-table mt-3"><thead><tr>`;
      html += `<th>${isEspecifico ? fator.titulo : fator}</th>`;
      if (isEspecifico) {
        fator.subitens.forEach((sub, si) => {
          html += `<th>Subitem ${si + 1}<br><small>${sub}</small></th>`;
        });
      } else {
        html += `<th>Nota (0 a 10)</th>`;
      }
      html += `<th>Média</th></tr></thead><tbody><tr>`;

      if (isEspecifico) {
        html += `<td>${fator.titulo}</td>`;
        fator.subitens.forEach((_, si) => {
          html += `<td><input type="number" class="form-control subitem" data-grupo="${containerId}-${i}" min="0" max="10" step="0.1" /></td>`;
        });
        html += `<td class="total-cell" id="media-${containerId}-${i}">0.0</td>`;
      } else {
        html += `<td><input type="number" class="form-control geral" data-index="${i}" min="0" max="10" step="0.1" /></td>`;
        html += `<td class="total-cell" id="media-${containerId}-${i}">0.0</td>`;
      }

      html += `</tr></tbody></table>`;
      container.innerHTML += html;
    });
  }

  gerarTabelaFatores(fatoresGerais, "fatores-gerais");
  gerarTabelaFatores(fatoresEspecificos, "fatores-especificos", true);

  function atualizarMedias() {
    let somaGerais = 0;
    let countGerais = 0;

    document.querySelectorAll('.geral').forEach((input, i) => {
      const nota = parseFloat(input.value) || 0;
      somaGerais += nota;
      countGerais++;
      document.getElementById(`media-fatores-gerais-${i}`)?.innerText = nota.toFixed(1);
    });

    let somaEspecificos = 0;
    let countEspecificos = 0;
    fatoresEspecificos.forEach((_, i) => {
      const inputs = document.querySelectorAll(`input[data-grupo="fatores-especificos-${i}"]`);
      let soma = 0;
      let count = 0;
      inputs.forEach(input => {
        soma += parseFloat(input.value) || 0;
        count++;
      });
      const media = count ? (soma / count) : 0;
      document.getElementById(`media-fatores-especificos-${i}`)?.innerText = media.toFixed(1);
      somaEspecificos += media;
      countEspecificos++;
    });

    const mediaGerais = countGerais ? somaGerais / countGerais : 0;
    const mediaEspecificos = countEspecificos ? somaEspecificos / countEspecificos : 0;
    const mediaTotal = (mediaGerais + mediaEspecificos) / 2;

    document.getElementById('mediaGerais').innerText = mediaGerais.toFixed(1);
    document.getElementById('mediaEspecificos').innerText = mediaEspecificos.toFixed(1);
    document.getElementById('mediaTotal').innerText = mediaTotal.toFixed(1);
  }

  document.addEventListener('input', atualizarMedias);
  document.getElementById('dataAtual').innerText = new Date().toLocaleDateString('pt-BR');
});

function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'pt', 'a4');
  const form = document.getElementById("formulario");

  html2canvas(form).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const imgProps = doc.getImageProperties(imgData);
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let heightLeft = pdfHeight;
    let position = 0;

    doc.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
    heightLeft -= doc.internal.pageSize.getHeight();

    while (heightLeft >= 0) {
      position = heightLeft - pdfHeight;
      doc.addPage();
      doc.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= doc.internal.pageSize.getHeight();
    }

    doc.save('avaliacao.pdf');
  });
}

function exportarXLS() {
  const wb = XLSX.utils.book_new();
  const nome = document.querySelector('[name="nome"]').value || "";
  const cargo = document.querySelector('[name="cargo"]').value || "";
  const periodo = document.querySelector('[name="periodo"]').value || "";
  const admissao = document.querySelector('[name="admissao"]').value || "";
  const mediaGerais = document.getElementById("mediaGerais").innerText;
  const mediaEspecificos = document.getElementById("mediaEspecificos").innerText;
  const mediaTotal = document.getElementById("mediaTotal").innerText;

  const row = [nome, cargo, admissao, periodo, mediaGerais, mediaEspecificos, mediaTotal];
  const ws = XLSX.utils.aoa_to_sheet([["Nome", "Cargo", "Admissão", "Período", "Média Gerais", "Média Específicos", "Média Total"], row]);
  XLSX.utils.book_append_sheet(wb, ws, "Avaliação");
  XLSX.writeFile(wb, "avaliacao.xlsx");
}
