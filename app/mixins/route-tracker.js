import Ember from 'ember';

export default Ember.Mixin.create({
	actions: {
        didTransition () {
            this._super.apply(this, arguments);
            _paq.push(['trackEvent', 'Vists', 'RouteTraversed', this.routeName]);
        }
    }
});
