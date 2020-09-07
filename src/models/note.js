export class Note {
    constructor(note = {}) {
        this.description = note.description || 'Description';
        this.priority = note.priority || 'Normal';
        this.status = note.status || false;
        this.date = note.date || new Date().getTime();
    }
}