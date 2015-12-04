import Ember from 'ember';

export default Ember.Component.extend({
	setupComponent: function () {
		var data = [
        {
            "hc-key": "eu",
            "value": 0
        },
        {
            "hc-key": "oc",
            "value": 1
        },
        {
            "hc-key": "af",
            "value": 2
        },
        {
            "hc-key": "as",
            "value": 3
        },
        {
            "hc-key": "na",
            "value": 4
        },
        {
            "hc-key": "sa",
            "value": 5
        },
        {
            "hc-key": "in",
            "value": 6
        }
    ];
    this.$().highcharts('Map', {
		    title : {
	            text : 'World Map'
	        },
	        mapNavigation: {
	            enabled: true,
	            buttonOptions: {
	                verticalAlign: 'bottom'
	            }
	        },
	        credits: {
	        	enabled: false
	        },
	        colorAxis: {
	            min: 0
	        },
	        series : [{
	            data : data,
	            mapData: Highcharts.maps['custom/world'],
	            joinBy: 'hc-key',
	            name: 'Random data',
	            states: {
	                hover: {
	                    color: '#BADA55'
	                }
	            },
	            dataLabels: {
	                enabled: true,
	                format: '{point.name}'
	            }
	        }]
	    });
	}.on('didInsertElement')
});
