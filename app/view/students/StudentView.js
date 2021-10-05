Ext.define('TrainingJs.view.students.StudentView', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentview',
    controller: 'studentviewcontroller',
    //mandatory properties for grid => columns, store
    store: {
        type: 'students'
    },
    columns: [{
            text: 'ID',
            dataIndex: 'id',
            hidden: true, //fixed
        },
        {
            text: 'Name',
            dataIndex: 'name', //2/6
            flex: 2
        },
        {
            text: 'Registration Number',
            dataIndex: 'regNo', //3/6
            flex: 3
        },
        {
            text: 'County',
            dataIndex: 'county', //1/6
            flex: 1
        }

    ],
    tbar: [{
            text: 'Add',
            handler: 'onAddButtonClick',
        },
        {
            text: 'Details',
            handler: 'onDetailsButtonClick', //update
        },
        {
            text: 'Remove',
            handler: 'onRemoveButtonClick',
        },
        {
            text: 'Refresh',
            handler: 'onRefreshButtonClick',
        }


    ],
    selModel: 'checkboxmodel',
    //  {
    //     selType: 'checkboxmodel',
    //     mode: 'MULTI'
    // },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }

})