import ProductType from '../Types/ProductType';
import Db from '../../db/db';

import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLInt
} from 'graphql';
import ContentType from "../Types/ContentType";

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'This is a root mutation',
  fields: () => {
    return {
      addProduct: {
        type: ProductType, //type of data which will return resolve function
        args: {
          name: {type: new GraphQLNonNull(GraphQLString)},
          sku: {type: new GraphQLNonNull(GraphQLString)}
        },
        resolve(parentValue, args) {
          return Db.models.product.create({...args});
        }
      },
      addContent: {
        type: ContentType,
        args: {
          contentType: {
            type: new GraphQLNonNull(new GraphQLEnumType({
              name: 'enum',
              values: {
                ov2d: {
                  value: "ov2d",
                },
                ov360: {
                  value: "ov360",
                },
                ovvideo: {
                  value: "ovvideo",
                },
                ovtour: {
                  value: "ovtour",
                },
              },
            }))
          },
          productId: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve(parentValue, args) {
          console.log(parentValue, args);
          return Db.models.content.create({...args});
        }
      }
    }
  }
});

export default RootMutation;