import { SixBySixSudoku, Sudoku, Sukano, UprightSixBySixSudoku } from '../index';
import { SixBySixSudokuClass } from '../sudokus/six-by-six-sudoku-class';
import { SudokuClass } from '../sudokus/sudoku-class';
import { SukanoClass } from '../sudokus/sukano-class';
import { UprightSixBySixSudokuClass } from '../sudokus/upright-six-by-six-sudoku-class';

var sukanoExpected = new SukanoClass(
	[
		'2*|8|14|6*|15',
		'9|4*|9|6*|17',
		'22|19|4*',
		'17|11|17',
		'16|18|11',
		'28|7*|10',
		'8*|16|18|3',
		'27|18',
		'7|5*|22|11',
	],
	['45', '29|6|10', '7|24|9|5*', '9|28|8', '36|9*', '43|2*', '45', '13|3*|13|16', '26|19'],
);

test('Sukano Constructor - Single Array', () => {
	var singleArrayCreation = Sukano([
		'2*|8|14|6*|15',
		'9|4*|9|6*|17',
		'22|19|4*',
		'17|11|17',
		'16|18|11',
		'28|7*|10',
		'8*|16|18|3',
		'27|18',
		'7|5*|22|11',
		'45',
		'29|6|10',
		'7|24|9|5*',
		'9|28|8',
		'36|9*',
		'43|2*',
		'45',
		'13|3*|13|16',
		'26|19',
	]);

	expect(JSON.stringify(sukanoExpected)).toStrictEqual(JSON.stringify(singleArrayCreation));
});

test('Sukano Constructor - Two Arrays', () => {
	var twoArraysCreation = Sukano(
		[
			'2*|8|14|6*|15',
			'9|4*|9|6*|17',
			'22|19|4*',
			'17|11|17',
			'16|18|11',
			'28|7*|10',
			'8*|16|18|3',
			'27|18',
			'7|5*|22|11',
		],
		['45', '29|6|10', '7|24|9|5*', '9|28|8', '36|9*', '43|2*', '45', '13|3*|13|16', '26|19'],
	);

	expect(JSON.stringify(sukanoExpected)).toStrictEqual(JSON.stringify(twoArraysCreation));
});

test('Sukano Constructor - Single String', () => {
	var singleStringCreation = Sukano(
		'2*|8|14|6*|15||9|4*|9|6*|17||22|19|4*||17|11|17||16|18|11||28|7*|10||8*|16|18|3||27|18||7|5*|22|11||45||29|6|10||7|24|9|5*||9|28|8||36|9*||43|2*||45||13|3*|13|16||26|19',
	);

	expect(JSON.stringify(sukanoExpected)).toStrictEqual(JSON.stringify(singleStringCreation));
});
test('Sukano Constructor - Two Strings', () => {
	var twoStringsCreation = Sukano(
		'2*|8|14|6*|15||9|4*|9|6*|17||22|19|4*||17|11|17||16|18|11||28|7*|10||8*|16|18|3||27|18||7|5*|22|11',
		'45||29|6|10||7|24|9|5*||9|28|8||36|9*||43|2*||45||13|3*|13|16||26|19',
	);

	expect(JSON.stringify(sukanoExpected)).toStrictEqual(JSON.stringify(twoStringsCreation));
});
test('Sudoku Constructor', () => {
	expect(JSON.stringify(Sudoku())).toStrictEqual(JSON.stringify(new SudokuClass()));
});
test('Six by Six Constructor', () => {
	expect(JSON.stringify(SixBySixSudoku())).toStrictEqual(JSON.stringify(new SixBySixSudokuClass()));
});
test('Upright Six by Six Constructor', () => {
	expect(JSON.stringify(UprightSixBySixSudoku())).toStrictEqual(JSON.stringify(new UprightSixBySixSudokuClass()));
});
