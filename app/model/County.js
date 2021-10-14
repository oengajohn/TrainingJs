Ext.define('TrainingJs.model.County', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'countyName', type: 'string' },
        { name: 'headquarter', type: 'string' }

    ]
});
