/*
** dnaData -- data tables for use by arm.js thru genome.js
** Copyright (C) 2022-2022 Tactile Interactive, all rights reserved
*/
/* eslint-disable eqeqeq */


/* ******************************************************************* chromos */
// not all useful right now but maybe someday
//Chromosome  BasePairs Variations Protein-codinggenes
//		Pseudo-genes TotalLongncRNA TotalsmallncRNA
//		miRNA rRNA snRNA snoRNA MiscncRNA
export const chromoCounts = {
1: {bases: 248387328, vars: 12151146, proteins: 2058,
	pseudo: 1220, totLong: 1200, totSmall: 496,
	miRna: 134, rRna: 66, snRna: 221, snoRna: 145, misc: 192},
2: {bases: 242696752, vars: 12945965, proteins: 1309,
	pseudo: 1023, totLong: 1037, totSmall: 375,
	miRna: 115, rRna: 40, snRna: 161, snoRna: 117, misc: 176},
3: {bases: 201105948, vars: 10638715, proteins: 1078,
	pseudo: 763, totLong: 711, totSmall: 298,
	miRna: 99, rRna: 29, snRna: 138, snoRna: 87, misc: 134},
4: {bases: 193574945, vars: 10165685, proteins: 752,
	pseudo: 727, totLong: 657, totSmall: 228,
	miRna: 92, rRna: 24, snRna: 120, snoRna: 56, misc: 104},
5: {bases: 182045439, vars: 9519995, proteins: 876,
	pseudo: 721, totLong: 844, totSmall: 235,
	miRna: 83, rRna: 25, snRna: 106, snoRna: 61, misc: 119},
6: {bases: 172126628, vars: 9130476, proteins: 1048,
	pseudo: 801, totLong: 639, totSmall: 234,
	miRna: 81, rRna: 26, snRna: 111, snoRna: 73, misc: 105},
7: {bases: 160567428, vars: 8613298, proteins: 989,
	pseudo: 885, totLong: 605, totSmall: 208,
	miRna: 90, rRna: 24, snRna: 90, snoRna: 76, misc: 143},
8: {bases: 146259331, vars: 8221520, proteins: 677,
	pseudo: 613, totLong: 735, totSmall: 214,
	miRna: 80, rRna: 28, snRna: 86, snoRna: 52, misc: 82},
9: {bases: 150617247, vars: 6590811, proteins: 786,
	pseudo: 661, totLong: 491, totSmall: 190,
	miRna: 69, rRna: 19, snRna: 66, snoRna: 51, misc: 96},
10: {bases: 134758134, vars: 7223944, proteins: 733,
	pseudo: 568, totLong: 579, totSmall: 204,
	miRna: 64, rRna: 32, snRna: 87, snoRna: 56, misc: 89},
11: {bases: 135127769, vars: 7535370, proteins: 1298,
	pseudo: 821, totLong: 710, totSmall: 233,
	miRna: 63, rRna: 24, snRna: 74, snoRna: 76, misc: 97},
12: {bases: 133324548, vars: 7228129, proteins: 1034,
	pseudo: 617, totLong: 848, totSmall: 227,
	miRna: 72, rRna: 27, snRna: 106, snoRna: 62, misc: 115},
13: {bases: 113566686, vars: 5082574, proteins: 327,
	pseudo: 372, totLong: 397, totSmall: 104,
	miRna: 42, rRna: 16, snRna: 45, snoRna: 34, misc: 75},
14: {bases: 101161492, vars: 4865950, proteins: 830,
	pseudo: 523, totLong: 533, totSmall: 239,
	miRna: 92, rRna: 10, snRna: 65, snoRna: 97, misc: 79},
15: {bases: 99753195, vars: 4515076, proteins: 613,
	pseudo: 510, totLong: 639, totSmall: 250,
	miRna: 78, rRna: 13, snRna: 63, snoRna: 136, misc: 93},
16: {bases: 96330374, vars: 5101702, proteins: 873,
	pseudo: 465, totLong: 799, totSmall: 187,
	miRna: 52, rRna: 32, snRna: 53, snoRna: 58, misc: 51},
17: {bases: 84276897, vars: 4614972, proteins: 1197,
	pseudo: 531, totLong: 834, totSmall: 235,
	miRna: 61, rRna: 15, snRna: 80, snoRna: 71, misc: 99},
18: {bases: 80542538, vars: 4035966, proteins: 270,
	pseudo: 247, totLong: 453, totSmall: 109,
	miRna: 32, rRna: 13, snRna: 51, snoRna: 36, misc: 41},
19: {bases: 61707364, vars: 3858269, proteins: 1472,
	pseudo: 512, totLong: 628, totSmall: 179,
	miRna: 110, rRna: 13, snRna: 29, snoRna: 31, misc: 61},
20: {bases: 66210255, vars: 3439621, proteins: 544,
	pseudo: 249, totLong: 384, totSmall: 131,
	miRna: 57, rRna: 15, snRna: 46, snoRna: 37, misc: 68},
21: {bases: 45090682, vars: 2049697, proteins: 234,
	pseudo: 185, totLong: 305, totSmall: 71,
	miRna: 16, rRna: 5, snRna: 21, snoRna: 19, misc: 24},
22: {bases: 51324926, vars: 2135311, proteins: 488,
	pseudo: 324, totLong: 357, totSmall: 78,
	miRna: 31, rRna: 5, snRna: 23, snoRna: 23, misc: 62},
X: {bases: 154259566, vars: 5753881, proteins: 842,
	pseudo: 874, totLong: 271, totSmall: 258,
	miRna: 128, rRna: 22, snRna: 85, snoRna: 64, misc: 100},
Y: {bases: 62460029, vars: 211643, proteins: 71,
	pseudo: 388, totLong: 71, totSmall: 30,
	miRna: 15, rRna: 7, snRna: 17, snoRna: 3, misc: 8},
mtDNA: {bases: 16569, vars: 929, proteins: 13,
	pseudo: 0, totLong: 0, totSmall: 24,
	miRna: 0, rRna: 2, snRna: 0, snoRna: 0, misc: 0},
XX23: {bases: 3054815472, vars: 0, proteins: 20328,
	pseudo: 14212, totLong: 14656, totSmall: 4983,
	miRna: 1741, rRna: 523, snRna: 1927, snoRna: 1518, misc: 2205},
XY23: {bases: 2963015935, vars: 0, proteins: 19557,
	pseudo: 13726, totLong: 14456, totSmall: 4755,
	miRna: 1628, rRna: 508, snRna: 1859, snoRna: 1457, misc: 2113},
};

// function printChromoStats() {
// 	for (let name in chromoCounts) {
// 		let ch = chromoCounts[name];
// 		let genoThings = ch.proteins +
// 			ch.pseudo + ch.totLong + ch.totSmall +
// 			ch.miRna + ch.rRna + ch.snRna + ch.snoRna + ch.misc;
// 		console.log(`${name}  bases/prots=${ch.bases / ch.proteins}     bases/things=${ch.bases / genoThings}`);
// 	}
// }
//printChromoStats();

// size is in kbp - um not always in agreement with the above.
// telomere length is 'arbitrary' units.  thanks a lot.
export const chromoArmSizes = {
 '1p': {size: 124.3, teloLen: 14.38},
 '1q': {size: 122.7, teloLen: 13.24},
 '2p': {size: 93.3, teloLen: 12.74},
 '2q': {size: 149.7, teloLen: 10.55},
 '3p': {size: 91.7, teloLen: 14.46},
 '3q': {size: 108.3, teloLen: 13.00},
 '4p': {size: 50.8, teloLen: 13.32},
 '4q': {size: 140.2, teloLen: 14.02},
 '5p': {size: 47.7, teloLen: 12.74},
 '5q': {size: 133.3, teloLen: 13.13},
 '6p': {size: 60.5, teloLen: 11.53},
 '6q': {size: 110.5, teloLen: 13.53},
 '7p': {size: 59.1, teloLen: 12.57},
 '7q': {size: 99.9, teloLen: 14.00},
 '8p': {size: 45.2, teloLen: 12.87},
 '8q': {size: 100.8, teloLen: 13.55},
 '9p': {size: 51.8, teloLen: 11.62},
 '9q': {size: 88.2, teloLen: 11.83},
 '10p': {size: 40.3, teloLen: 11.45},
 '10q': {size: 94.7, teloLen: 14.04},
 '11p': {size: 52.9, teloLen: 12.22},
 '11q': {size: 81.1, teloLen: 14.23},
 '12p': {size: 35.4, teloLen: 10.62},
 '12q': {size: 96.6, teloLen: 13.14},
 '13p': {size: 16.0, teloLen: 11.46},
 '13q': {size: 98.0, teloLen: 13.82},
 '14p': {size: 15.6, teloLen: 11.24},
 '14q': {size: 90.4, teloLen: 13.29},
 '15p': {size: 17.0, teloLen: 11.57},
 '15q': {size: 83.0, teloLen: 12.52},
 '16p': {size: 38.2, teloLen: 11.28},
 '16q': {size: 50.8, teloLen: 11.78},
 '17p': {size: 22.2, teloLen: 10.69},
 '17q': {size: 56.8, teloLen: 10.82},
 '18p': {size: 16.1, teloLen: 11.57},
 '18q': {size: 59.9, teloLen: 12.24},
 '19p': {size: 28.5, teloLen: 9.82},
 '19q': {size: 35.5, teloLen: 10.38},
 '20p': {size: 27.1, teloLen: 12.76},
 '20q': {size: 34.9, teloLen: 10.18},
 '21p': {size: 12.3, teloLen: 10.60},
 '21q': {size: 34.7, teloLen: 10.87},
 '22p': {size: 11.8, teloLen: 10.24},
 '22q': {size: 38.2, teloLen: 11.19},
 'Xp': {size: 59.5, teloLen: 13.92},
 'Xq': {size: 95.5, teloLen: 12.64},
 'Yp': {size: 11.3, teloLen: 10.06},
 'Yq': {size: 46.7, teloLen: 6.75},
};


/* ******************************************************************* Codons */

const rawAminos = [
	{name: 'Isoleucine', abbr: 'Ile', slc: 'I', codons: 'ATT, ATC, ATA'},
	{name: 'Leucine', abbr: 'Leu', slc: 'L', codons: 'CTT, CTC, CTA, CTG, TTA, TTG'},
	{name: 'Valine', abbr: 'Val', slc: 'V', codons: 'GTT, GTC, GTA, GTG'},
	{name: 'Phenylalanine', abbr: 'Phe', slc: 'F', codons: 'TTT, TTC'},
	{name: 'Methionine', abbr: 'Met', slc: 'M', codons: 'ATG'},
	{name: 'Cysteine', abbr: 'Cys', slc: 'C', codons: 'TGT, TGC'},
	{name: 'Alanine', abbr: 'Ala', slc: 'A', codons: 'GCT, GCC, GCA, GCG'},
	{name: 'Glycine', abbr: 'Gly', slc: 'G', codons: 'GGT, GGC, GGA, GGG'},
	{name: 'Proline', abbr: 'Pro', slc: 'P', codons: 'CCT, CCC, CCA, CCG'},
	{name: 'Threonine', abbr: 'Thr', slc: 'T', codons: 'ACT, ACC, ACA, ACG'},
	{name: 'Serine', abbr: 'Ser', slc: 'S', codons: 'TCT, TCC, TCA, TCG, AGT, AGC'},
	{name: 'Tyrosine', abbr: 'Tyr', slc: 'Y', codons: 'TAT, TAC'},
	{name: 'Tryptophan', abbr: 'Trp', slc: 'W', codons: 'TGG'},
	{name: 'Glutamine', abbr: 'Gln', slc: 'Q', codons: 'CAA, CAG'},
	{name: 'Asparagine', abbr: 'Asn', slc: 'N', codons: 'AAT, AAC'},
	{name: 'Histidine', abbr: 'His', slc: 'H', codons: 'CAT, CAC'},
	{name: 'Glutamic acid', abbr: 'Glu', slc: 'E', codons: 'GAA, GAG'},
	{name: 'Aspartic acid', abbr: 'Asp', slc: 'D', codons: 'GAT, GAC'},
	{name: 'Lysine', abbr: 'Lys', slc: 'K', codons: 'AAA, AAG'},
	{name: 'Arginine', abbr: 'Arg', slc: 'R', codons: 'CGT, CGC, CGA, CGG, AGA, AGG'},
	{name: 'Stop', abbr: 'Stop', slc: '*', codons: 'TAA, TAG, TGA'},
];

// maps codons to which amino acid they create
export const codonToAmino= {
};

// convert & build
rawAminos.forEach(amino => {
	let codons = amino.codons.split(', ');
	codons.forEach(codon =>codonToAmino[codon] = amino.abbr );
});

// console.info('codonToAmino: ', codonToAmino)
