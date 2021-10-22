Ext.define('TrainingJs.model.SubCounty', {
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
            name: 'countyId',
            type: 'int'
        }
    ]

});