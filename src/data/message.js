export default class message{
    constructor(id, channel_id, author, message, date) {
        this.id = id;
        this.channel_id = channel_id;
        this.author = author;
        this.message = message;
        this.date = date;
    }
}