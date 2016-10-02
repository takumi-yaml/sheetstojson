import {Sheet} from "./Sheet";

export class Block02Sheet extends Sheet {
  constructor(spreadsheet, range) {
    super(spreadsheet);
    this._sheetName = 'block02';
    this._activate();
    this.range = this._sheet.getRange(range);
    this.values = this.range.getValues();
  }

  _getNote(row) {
    const basename = this.values[row][0];
    let _temp = {};
    _temp[basename] = {
      paragraph: this.values[row][1]
    };
    return _temp;
  }

}


