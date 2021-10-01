Ext.define('TrainingJs.model.Student', {
    extend: 'Ext.data.Model',
    // idProperty:'studentId',
    fields: [{
            // name: 'studentId',
            name: 'id',
            type: 'integer'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'regNo',
            type: 'string'
        },
        {
            name: 'county',
            type: 'string'
        },
    ],
    validators: {
        regNo: 'presence'

    }


});