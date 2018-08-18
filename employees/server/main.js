import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';

import _ from 'lodash';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // good place to generate data

  // check if we need to generate data
  // - does collection have any records?
  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);
  if (!numberRecords) {
    // no records, generate data...
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();
      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }
});
