let series = {
    titulo: 'flash',
    diretor: 'Andy Muschietti',
    genero: ['açao', 'aventura'],
    ano_lancamento: 2013,
    nr_temporadas: 9,
    episodios: [
        {
            temporada: 1,
            nr_episodio: 1,
            titulo: 'piloto',
            duracao: '45min'
        },
        {
            temporada: 2,
            nr_episodio: 2,
            titulo: 'flash de dois mundos',
            duracao: '45min'
        },
        {
            temporada: 3,
            nr_episodio: 15,
            titulo: 'A ira de Savitar',
            duracao: '45min'
        }
    ]

}

console.log(series.episodios[2].titulo);
console.log(series.episodios[2].duracao);
console.log(series.episodios[2].temporada);
