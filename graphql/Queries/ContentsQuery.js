import Db from "../../db/db";
import ContentType from "../Types/ContentType";

import {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

export const ContentsQuery = {
  type: new GraphQLList(ContentType),
  args: {
    id: {
      type: new GraphQLList(GraphQLInt),
    },
    contentType: {
      type: new GraphQLList(GraphQLString),
    }
  },
  resolve(parentValue, args) {
    return Db.models.content.findAll({where: args});
  }
};

export const ContentQuery = {
  type: ContentType,
  args: {
    id: {
      type: GraphQLInt,
    }
  },
  resolve(parentValue, args) {
    return Db.models.content.findOne({where: args});
  }
};