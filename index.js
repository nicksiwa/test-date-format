const moment = require('moment');

moment.locale('th');

const buddhishDate = (date, format) => {
  return moment(date).add(543, 'years').format(format);
}

const birthDateOfAge = (birthDate) => {
  if (birthDate) {
    const diffTime = moment(moment()).diff(moment(birthDate));
    const duration = moment.duration(diffTime);
    const years = duration.years();
    const month = duration.months();
    const days = duration.days();
    return { y: years, m: month, d: days };
  }
  return { y: '', m: '', d: '' };
};

module.exports = {
  buddhishDate,
  birthDateOfAge
};
