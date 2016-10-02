import {Sheet} from "./Sheet";

export class Block03MSheet extends Sheet {
  constructor(spreadsheet, range) {
    super(spreadsheet);
    this._sheetName = 'block03-medical';
    this._activate();
    this.range = this._sheet.getRange(range);
    this.values = this.range.getValues();
  }

  _getNote(row) {
    const basename = this.values[row][0];
    let _temp = {};
    _temp[basename] = {
      name: this.values[row][1],
      vol: this.values[row][2]
    };
    return _temp;
  }

}


