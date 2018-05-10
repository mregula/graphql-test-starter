import { ProductQuery, ProductsQuery } from './ProductsQuery';
import { ContentQuery, ContentsQuery } from './ContentsQuery';

import {
  GraphQLObjectType,
} from 'graphql';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: "This is a root query",
  fields: () => {
    return {
      products: ProductsQuery,
      product: ProductQuery,
      contents: ContentsQuery,
      content: ContentQuery
    }
  }
});

export default RootQuery;