import Db from '../../db/db';
import ContentType from './ContentType';

import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const ProductType = new GraphQLObjectType({
  name: 'Product',
  description: 'This represents a Product',
  fields: () => ({ //arrow function which returns object with fields
    id: {
      type: GraphQLInt,
      /*resolve(product) {
        return product.id
      }*/
    },
    name: {
      type: GraphQLString,
      /*resolve(product) {
        return product.name
      }*/
    },
    sku: {
      type: GraphQLString,
      /*resolve(product) {
        return product.sku
      }*/
    },
    contents: {
      type: new GraphQLList(ContentType),
      args: {
        contentType: {
          type: new GraphQLList(GraphQLString)
        }
      },
      resolve(parentValue, args) {
        return Db.models.content.findAll({where: {...args, productId: parentValue.id}});
        //return parentValue.getContents(); //parentValue is an instance of
      }
    }
  })
});

export default ProductType;