import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

export const getFullDataArray = dataArr => {
  // console.log(dataArr);
  let billArr = [];
  dataArr.bills.map(bill => {
    // const start = moment(bill.startDate, 'MM-DD-YYYY');
    const start = bill.startDate;
    const end = moment(start).add(2, 'years');
    const range = moment.range(start, end);
    let data;
    switch (bill.repeat) {
      case 'Weekly':
        data = Array.from(range.by('weeks')).map(date => date);
        break;
      case 'Bi-Weekly':
        data = Array.from(range.by('weeks', { step: 2 })).map(date => date);
        break;
      case 'Monthly':
        data = Array.from(range.by('months')).map(date => date);
        break;
      default:
        data = [start];
        break;
    }
    return billArr.push(
      data.map(billDate => {
        return {
          bill: bill.bill,
          account: bill.account,
          amount: bill.amount,
          category: bill.category,
          description: bill.description,
          date: billDate
        };
      })
    );
  });
  return billArr;
};
