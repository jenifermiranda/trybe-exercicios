async function getRepos(endpoint) {
  const response = await fetch(endpoint);
  const repos = await response.json();
  return repos;
}

async function start() {
  const endpoint = 'https://api.github.com/users/lu-anderson/repos';
  const repos = await getRepos(endpoint);
  // console.log(repos);

  // Primeiro desafio
  // Limpar as informações que são estão em repos
  // Atualmente repos é um array de objetos com muitas propriedades seu desafio é transformar em uma array com objetos que contenham apenas as seguintes propriedades: name, url e linguage.
  // A propriedade url deve ser o valor que está em html_url

  const reposData = repos.map((repo) => ({ name: repo.name, language: repo.language, url: repo.html_url }));

  // Segundo desafio
  // Agora que já temos os repositórios com as informações limpas nós vamos modificar algumas propriedades
  // Você deve criar um novo array contendo as informações dos repositório, porém, você deve substituir para linguage: Outra linguagem qualquer positório que possua linguagem diferente de javascript

  const languageTeste = reposData.map(repo => ({
    ...repo,
    language: repo.language !== 'JavaScript' ? 'Outra linguagem' : repo.language,
  }));
  // console.log(languageTeste);
  // Terceiro desafio
  // Filtre os repositórios da variável 'repos' que possuem apenas a linguagem javascript

  const reposWithJS = languageTeste.filter(
    ({ language }) => language === 'JavaScript'
  );
  console.log(reposWithJS);

}

start();

const formaMaisModerna = Object.keys(objeto1).filter(key => objeto1[key] !== objeto2[key]);