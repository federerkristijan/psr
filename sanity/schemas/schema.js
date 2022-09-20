import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import team from "./team";
import about from "./about";
import events from "./events";
import contact from "./contact";
import featured from "./featured";
import partners from "./partners";
import impressum from "./impressum";
import shop from "./shop";
import track from "./track";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    team,
    about,
    events,
    contact,
    featured,
    partners,
    impressum,
    shop,
    track
  ]),
});
