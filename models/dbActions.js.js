const config = require('./config');
const pgp = require('pg-promise')({});

const db = pgp(config);

const dbGetProducts = ( async (id) => {
    //db = pgp(config);
    let query;

    if(id) {
        query = 'SELECT name, price from products where id = ' + id;
    } else {     
        query = 'SELECT name, price from products;';
    }
    return await db.any(query);
});

const dbInsert = ( async (name, price) => {
    //db = pgp(config);
    let query = "INSERT INTO products (name, price) VALUES ('" + name + "', " + price + ');';
    console.log(query);

    return await db.any(query);
});

const dbDeleteProduct = ( async (id) => {
    //db = pgp(config);
    let query = 'DELETE FROM products WHERE id = ' + id;

    return await db.none(query);
});

/*
db.none('INSERT INTO inventory (name, quantity) VALUES($1, $2)', ['book', 101])
      .then(() => {
          console.log("success");
      })
      .catch(error => console.log(error))
*/
/*
db.one('INSERT INTO inventory (name, quantity) VALUES($1, $2) RETURNING id', ['phone', 102])
      .then((data) => {
          console.log(data);
      })
      .catch(error => console.log(error))
*/

/*
db.none('UPDATE inventory SET name= $1, value = $2 WHERE id = $3;', [])
.then(() => {
    console.log("UPDATED")
}).catch(error => console.log(error))


class PersonalizationAPI extends RESTDataSource {
  baseURL = 'https://personalization-api.example.com';

  willSendRequest(request: Request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getFavorites() {
    return this.get('favorites');
  }

  async getProgressFor(movieId: string) {
    return this.get('progress', {
      id: movieId,
    });
  }
}


You pass the data sources to use as an option to the 
ApolloServer constructor:

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      moviesAPI: new MoviesAPI(),
      personalizationAPI: new PersonalizationAPI(),
    };
  },
  context: () => {
    return {
      token:
        'foo',
    };
  }
});

Apollo Server will then put the data sources on the
context for every request, so you can access them from
your resolvers. It will also give your data sources access
to the context. (the reason for not having users put data
sources on the context directly is because that would lead
to a circlar dependency.)

  Query: {
    movie: async (_source, { id }, { dataSources }) => {
      return dataSources.moviesAPI.getMovie(id);
    },
    mostViewedMovies: async (_source, _args, { dataSources }) => {
      return dataSources.moviesAPI.getMostViewedMovies();
    },
    favorites: async (_source, _args, { dataSources }) => {
      return dataSources.personalizationAPI.getFavorites();
    },
  },

  What about DataLoader?
  DataLoader was designed by Facebook with a specific use
  case in mind: deduplicating and batching object loads
  from a data store. It provideds a memorization cache.
  Which avoids loading the same object multiple times
  during a single GraphQL request, and it coalesces loads
  that occur during a single tick of the event loop into
  a batched request that fetchs multiple objects at once.

  Although Dataloader is great for that use case, it's less
  helpful when loading data from REST APIs because its primary feature is batching,
  not catching. What we've found to be far more important when layering

  a design pattern that lets the GraphQL layer catche
  responses from underlying APIs and then assemble them
  into arbitrary query results without refetching from the server.
  

*/





module.exports = { dbGetProducts, dbInsert, dbDeleteProduct };
