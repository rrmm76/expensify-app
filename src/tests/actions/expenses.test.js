
import {addExpense,editExpense,removeExpense} from '../../actions/expenses' ;

test ('it is should be ', ()=>
{
    const action=removeExpense({id:'1234abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
    id :'1234abc'
    });
});


test ('item edit ', ()=>
{
    const action=editExpense('1234abc' , {note :'the new note value'});
    
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'1234abc',
        updates: {
        note :'the new note value'}
    });
});


test('adding test ',() => {
    const expenseDate = {
      description :'test desc',
      note :'test note',
      amount :2000,
      createdAt :1095
    };
    const action=addExpense(expenseDate);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense :{
            ...expenseDate,
            id : expect.any(String)
        }

    });
});


test('adding test2 ',() => {
    
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description : '',
            note : '',
            amount : 0,
            createdAt : 0
    }
    });
});
