import { Model } from "@vuex-orm/core";
import Comment from './comment.js';

export default class Post extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = "posts";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      id: this.attr(null),
      title: this.attr(null),
      body: this.attr(null),
      comments: this.hasMany(Comment, "post_id"),
    };
  }
}
