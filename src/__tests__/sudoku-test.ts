import { SudokuClass } from '../sudokus/sudoku-class';
test('Sudoku Constructor', () => {
	var sudoku = new SudokuClass();

	expect(sudoku.rowCount).toBe(9);
	expect(sudoku.rowPerBox).toBe(3);
	expect(sudoku.columnCount).toBe(9);
	expect(sudoku.columnPerBox).toBe(3);

	expect(sudoku.rules.length).toBe(3);

	expect(sudoku.get(1, 1).column).toBe(1);
	expect(sudoku.get(1, 1).row).toBe(1);
	expect(sudoku.get(1, 8).column).toBe(8);
	expect(sudoku.get(1, 8).row).toBe(1);
	expect(sudoku.get(2, 8).column).toBe(8);
	expect(sudoku.get(2, 8).row).toBe(2);
	expect(sudoku.get(9, 9).column).toBe(9);
	expect(sudoku.get(9, 9).row).toBe(9);

	expect(() => sudoku.set(1, 10, 1)).toThrowError();
	expect(() => sudoku.set(1, 1, 0)).toThrowError();
	expect(() => sudoku.set(10, 1, 1)).toThrowError();
});

test('Sudoku - Get Columns - Expect Error', () => {
	var sudoku = new SudokuClass();

	expect(() => sudoku.get(1, 0)).toThrowError();
	expect(() => sudoku.get(0, 1)).toThrowError();
	expect(() => sudoku.get(-1, -1)).toThrowError();
	expect(() => sudoku.get(10, 1)).toThrowError();
	expect(() => sudoku.get(1, 10)).toThrowError();
});

test('Classic Sudoku Create - Get Columns - Setters and Solve', () => {
	var sudoku = new SudokuClass();
	sudoku.set(1, 6, 2);
	sudoku.set(2, 3, 9);
	sudoku.set(2, 4, 1);
	sudoku.set(2, 9, 7);
	sudoku.set(3, 2, 6);
	sudoku.set(3, 3, 1);
	sudoku.set(3, 6, 4);
	sudoku.set(4, 3, 2);
	sudoku.set(4, 5, 9);
	sudoku.set(4, 9, 1);
	sudoku.set(5, 1, 7);
	sudoku.set(5, 3, 5);
	sudoku.set(6, 6, 3);
	sudoku.set(6, 7, 8);
	sudoku.set(6, 8, 4);
	sudoku.set(7, 2, 8);
	sudoku.set(7, 5, 3);
	sudoku.set(7, 8, 2);
	sudoku.set(8, 9, 8);
	sudoku.set(9, 6, 7);
	sudoku.set(9, 7, 4);
	sudoku.set(9, 8, 9);

	expect(sudoku.solve()).toBe(true);

	expect(sudoku.get(1, 1).value).toBe(3);
	expect(sudoku.get(1, 2).value).toBe(7);
	expect(sudoku.get(1, 3).value).toBe(8);
	expect(sudoku.get(1, 4).value).toBe(9);
	expect(sudoku.get(1, 5).value).toBe(6);
	expect(sudoku.get(1, 6).value).toBe(2);
	expect(sudoku.get(1, 7).value).toBe(1);
	expect(sudoku.get(1, 8).value).toBe(5);
	expect(sudoku.get(1, 9).value).toBe(4);
});
