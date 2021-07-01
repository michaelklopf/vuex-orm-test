import { Model } from "@vuex-orm/core";

export default class Comment extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = "comments";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(null),
      email: this.attr(null),
      body: this.attr(null),
      post_id: this.attr(null),
    };
  }
}
