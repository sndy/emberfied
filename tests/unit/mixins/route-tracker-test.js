import Ember from 'ember';
import RouteTrackerMixin from '../../../mixins/route-tracker';
import { module, test } from 'qunit';

module('Unit | Mixin | route tracker');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteTrackerObject = Ember.Object.extend(RouteTrackerMixin);
  let subject = RouteTrackerObject.create();
  assert.ok(subject);
});
