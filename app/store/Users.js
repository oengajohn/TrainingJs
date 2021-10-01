//Ext.data.store

Ext.define('TrainingJs.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    //model
    //fields
    fields: [{
            name: 'id'
        },
        {
            name: 'first'
        },
        {
            name: 'last'
        },
        {
            name: 'handle'
        },
    ],
    data: [{
            id: 1,
            first: 'Kevin',
            last: 'Kimanthi',
            handle: '@kimathiKevin',

        },
        {
            id: 2,
            first: 'Odikor',
            last: 'Samuel',
            handle: '@odikor',

        },
        {
            id: 3,
            first: 'Nancy',
            last: 'Ruto',
            handle: '@nancy',

        }


    ]
});