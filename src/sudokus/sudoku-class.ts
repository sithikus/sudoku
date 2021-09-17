import { AbstractSudokuClass } from '../models/abstract-sudoku-class';
import { Cell } from '../models/cell';

export class SudokuClass extends AbstractSudokuClass {
	rowPerBox: number;
	columnPerBox: number;
	rules: ((cell: Cell) => boolean)[];

	protected _cells: Cell[];

	constructor() {
		super(9, 9);
		this.rowPerBox = 3;
		this.columnPerBox = 3;

		this._cells = this.rows.flatMap((r) => r.cells);

		this.rules = [
			(cell) =>
				this._cells.filter((c) => c.row === cell.row && c.column !== cell.column && c.value === cell.value).length ===
				0, // row uniqueness
			(cell) =>
				this._cells.filter((c) => c.column === cell.column && c.row !== cell.row && c.value === cell.value).length ===
				0, // column uniqueness
			(cell) =>
				this._cells.filter(
					(c) =>
						Math.ceil(c.column / (this.maxValue / this.columnPerBox)) ===
							Math.ceil(cell.column / (this.maxValue / this.columnPerBox)) &&
						Math.ceil(c.row / (this.maxValue / this.rowPerBox)) ===
							Math.ceil(cell.row / (this.maxValue / this.rowPerBox)) &&
						c.row !== cell.row &&
						c.column !== cell.column &&
						c.value === cell.value,
				).length === 0,
		];
	}
}
