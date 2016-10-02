export class Sheet{
  constructor(spreadsheet) {
    this._spreadSheet = spreadsheet;
    this._sheet = '';
  }

  _activate() {
    this._sheet = this._spreadSheet.getSheetByName(this._sheetName);
    this._sheet.activate();
  }

  _getNote() {
  }

  getNotes() {
    const maxNum = this.range.getNumRows();
    const notes = [];
    for (var i in this.values){
      const _note = this._getNote(i);
      notes.push(_note);
    }
    return notes;
  }

  log() {
  }
}