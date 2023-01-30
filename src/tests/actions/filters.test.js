import moment from 'moment';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';


test ('setTextFilter', ()=>
{
    const action=setTextFilter('date');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:'date'
    });
});

  test ('sortByDate', ()=>
{
    const action=sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});




test('this is set start date',()=> {
    const action =setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate :moment(0)
    });
})  