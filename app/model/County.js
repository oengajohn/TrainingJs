Ext.define('TrainingJs.model.County', {
    extend: 'Ext.data.Model',

    fields: [{
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'code',
            type: 'string'
        }

    ]
});