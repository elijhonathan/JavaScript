const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do herói: ', (nomeHeroi) => {
  rl.question('Digite a quantidade de experiência: ', (quantidadeExperiencia) => {
    const niveisExperiencia = [
      { min: 0, max: 1000, nivel: "Ferro", mensagem: "Todo mundo começa de algum lugar. Continue avançando!..." },
      { min: 1001, max: 2000, nivel: "Bronze", mensagem: "Você está progredindo e aprendendo. Continue assim!" },
      { min: 2001, max: 5000, nivel: "Prata", mensagem: "Seu esforço está valendo a pena. Continue crescendo!" },
      { min: 5001, max: 7000, nivel: "Ouro", mensagem: "Você está se tornando mais habilidoso a cada dia. Mantenha o bom trabalho!" },
      { min: 7001, max: 8000, nivel: "Platina", mensagem: "Você está no caminho certo para o sucesso. Continue aprimorando suas habilidades." },
      { min: 8001, max: 9000, nivel: "Ascendente", mensagem: "Sua dedicação está dando frutos. Continue a se superar!" },
      { min: 9001, max: 10000, nivel: "Imortal", mensagem: "Você está próximo da excelência. Continue buscando a perfeição!" },
      { min: 10001, max: Infinity, nivel: "Radiante", mensagem: "Você é incrivelmente imbatível. Parabéns, você é o melhor!" }
    ];

    const experiencia = parseInt(quantidadeExperiencia);

    const { nivel, mensagem } = niveisExperiencia.find(({ min, max }) => experiencia >= min && experiencia <= max);

    console.log(`O seu herói chamado ${nomeHeroi} está com ${quantidadeExperiencia} de XP, está no nível ${nivel}, ${mensagem}`);
    
    rl.close();
  });
});
