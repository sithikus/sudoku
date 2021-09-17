import { SixBySixSudokuClass } from '../sudokus/six-by-six-sudoku-class';
test('Sukano Constructor', () => {
	var sudoku = new SixBySixSudokuClass();

	expect(sudoku.rowCount).toBe(6);
	expect(sudoku.rowPerBox).toBe(2);
	expect(sudoku.columnCount).toBe(6);
	expect(sudoku.columnPerBox).toBe(3);

	expect(sudoku.rules.length).toBe(3);

	expect(sudoku.get(1, 1).column).toBe(1);
	expect(sudoku.get(1, 1).row).toBe(1);
	expect(sudoku.get(1, 6).column).toBe(6);
	expect(sudoku.get(1, 6).row).toBe(1);
	expect(sudoku.get(2, 6).column).toBe(6);
	expect(sudoku.get(2, 6).row).toBe(2);
});
