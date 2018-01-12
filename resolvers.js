const authors = [
    {
        id: 1,
        age: 33,
        username:  "Ann Clam",
        Publications: ["Whats the word", "Lost in here"]
    },
    {
        id: 2,
        age: 63,
        username:  "Bane Shame",
        Publications: ["Rock Trident", "Lavina diggers"]
    },
    {   
        id: 3,
        age: 27,
        username:  "Jane Cain",
        Publications: ["Out of Clubs", "How to fix: broken bulbs"]
    },
    {
        id: 4,
        age: 21,
        username:  "Chayne Lane",
        Publications: ["All bout spades", "Cleaning out the closet"]
    }

];

const resolvers = {
    Query: { 
        authors: () => {
            return authors
        },
        author: (root, {id}) => {
          return authors.find(author => author.id === id)
        }
    }
}

export default resolvers;