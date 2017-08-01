import moment from 'moment';

function formatTime(dateTime) {
    return moment(dateTime).format('LL');
}

export default formatTime;
