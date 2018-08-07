import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

export const getFullDataArray = dataArr => {
  // console.log(dataArr);
  let billArr = [];
  dataArr.bills.bills.map(bill => {
    const start = moment(bill.startDate, 'MM-DD-YYYY');
    const end = moment(start).add(2, 'years');
    const range = moment.range(start, end);
    let data;
    switch (bill.repeat) {
      case 'Weekly':
        data = Array.from(range.by('weeks')).map(date =>
          date.format('MM-DD-YYYY')
        );
        break;
      case 'Bi-Weekly':
        data = Array.from(range.by('weeks', { step: 2 })).map(date =>
          date.format('MM-DD-YYYY')
        );
        break;
      case 'Monthly':
        data = Array.from(range.by('months')).map(date =>
          date.format('MM-DD-YYYY')
        );
        break;
      default:
        data = [start.format('MM-DD-YYYY')];
        break;
    }
    return billArr.push(
      data.map(billDate => {
        return {
          [billDate]: {
            bill: bill.bill,
            account: bill.account,
            amount: bill.amount,
            category: bill.category,
            description: bill.description
          }
        };
      })
    );
  });
  return billArr;
};
