const app = Vue.createApp({
    data() {
        return {
            product: 'puzzle',
            authors: ['Jean Louis David','Jean Claude Killy','Gisèle Ruiz', 'Michel Le Déconneur'],
            dates: ["22/05/2020", "24/05/2020", "24/07/2020", "30/12/2020"],
            images: [
                {url:'images/puzzle.jpg'},
                {url:'images/team.jpg'},
                {url:"https://media.giphy.com/media/Af0RkOscO3KSHZTkMl/giphy.gif"},
                {url: "https://media.giphy.com/media/SuYaHVFzYytuU/giphy.gif"}
            ],
            messages: ['magnifique, je reconnais Joel surl a photo #je suis peeeeeeeeeeeense puzzle',
                         'ahah trop rigolo xptdr', 
                          "on est des déglingos", "LoL"
                        ],
        }
    }
})


// v3 :



// v1 : 
// const app = Vue.createApp({
//     data() {
//         return {
//             product: 'puzzle',
//             author: 'Jean Louis David',
//             date: "22/05/2020",
//             author2: 'Jean Claude Killy',
//             author3: 'Gisèle Ruiz',
//             image: 'images/puzzle.jpg',
//             image2: 'images/team.jpg',
//             message1: 'magnifique, je reconnais Joel surl a photo #je suis peeeeeeeeeeeense puzzle',
//             message2: 'ahah trop rigolo xptdr',
//             message3: "on est des déglingos",
//             gif: "https://media.giphy.com/media/Af0RkOscO3KSHZTkMl/giphy.gif"
//         }
//     }
// })