Ext.define('TrainingJs.model.User', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        }, {
            name: 'username',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'string'
        },
        {
            name: 'website',
            type: 'string'
        },
        {
            name: 'street',
            type: 'string',
            mapping: 'address.street'
        },
        {
            name: 'suite',
            type: 'string',
            mapping: 'address.suite'
        }, {
            name: 'city',
            type: 'string',
            mapping: 'address.city'
        }, {
            name: 'zipcode',
            type: 'string',
            mapping: 'address.zipcode'
        }, {
            name: 'lat',
            type: 'string',
            mapping: 'address.geo.lat'
        }, {
            name: 'lng',
            type: 'string',
            mapping: 'address.geo.lng'
        },
        {
            name: 'companyName',
            type: 'string',
            mapping: 'company.companyName'
        }, {
            name: 'catchPhrase',
            type: 'string',
            mapping: 'company.catchPhrase'
        },
        {
            name: 'bs',
            type: 'string',
            mapping: 'company.bs'
        },

    ],

});