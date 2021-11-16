Ext.define('TrainingJs.view.students.StudentView', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentview',
    reference: 'studentview',
    itemId: 'grid',
    controller: 'studentviewcontroller',
    //mandatory properties for grid => columns, store
    store: {
        type: 'students'
    },
    viewModel: {
        type: 'studentviewmodel'
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
            dataIndex: 'registrationNumber', //3/6
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
            bind: {
                disabled: '{!isAdmin}'
            }

        },
        {
            text: 'Details',
            bind: {
                disabled: '{!studentview.selection}'
            },
            // ui: 'btn-ui',
            handler: 'onDetailsButtonClick', //update
        },
        {
            text: 'Remove',
            bind: {
                disabled: '{!studentview.selection}'
            },
            handler: 'onRemoveButtonClick',
        },
        {
            text: 'Refresh',
            handler: 'onRefreshButtonClick',
        }, {
            text: 'Show Form',
            handler: 'onShowFormButtonClick',
        },
        {
            text: 'ToggleIsAdmin',
            handler: 'onToggleIsAdminButtonClick',
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