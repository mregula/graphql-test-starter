import Db from '../../db/db';
import ProductType from './ProductType';

import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

const ContentType = new GraphQLObjectType({
  name: 'Content',
  description: 'This is a content of the product',
  fields: () => ({
    id: {
      type: GraphQLInt,
      /*resolve(parentValue) {
        return parentValue.id
      }*/
    },
    contentType: {
      type: GraphQLString,
      /*resolve(parentValue) {
        return parentValue.contentType;
      }*/
    },
    product: {
      type: ProductType,
      resolve(parentValue, args) {
        return Db.models.product.findOne({where: {id: parentValue.productId}});
      }
    }
  })
});

export default ContentType;