function pesquisar() {
    // Obtém a referência ao elemento com o ID "resultados-pesquisa"
    // Este elemento será usado para exibir os resultados da pesquisa
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhuma aula encontrada. tente digitar AULA</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

  
    // Itera sobre cada item (aula) na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

        // Constrói uma string HTML para cada aula, incluindo o título, link e descrição
      // A sintaxe de template literal (``) permite a inserção de variáveis dentro da string
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="${dado.link}" target="_blank">
                  ${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
            </div>
          `
        }     
    
    }

    if (!resultados) {
        resultados = "<p> Nada foi encontrado</p>"
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }