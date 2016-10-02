import {Sheet} from "./Sheet";

export class Block03GSheet extends Sheet {
  constructor(spreadsheet, range) {
    super(spreadsheet);
    this._sheetName = 'block03-generic';
    this._activate();
    this.range = this._sheet.getRange(range);
    this.values = this.range.getValues();
  }

  _getNote(row) {
    const basename = this.values[row][0];
    let _temp = {};
    _temp[basename] = {
      name: this.values[row][1],
      img: this.values[row][2],
      link: this.values[row][3]
    };
    return _temp;
  }

}


