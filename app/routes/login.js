import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        didTransition () {
            this._super.apply(this, arguments);
            _paq.push(['trackEvent', 'Vists', 'RouteTraversed', 'Login']);
        }
    }
});
