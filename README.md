
## Data Model
There's 5 layers of data to view in the model, it forms a big tree (not all of which exists at any time).

- genome
- chromosome
- arm
- gene
- codon

The directories, and the classes for the data (model) are in lower case (same as above).
Each is a subclass of dnaObject.
Typically, a reference is prefaced with 'the' as in theChromo or theGene.
Each has a name, a formula, a list, and a populate() method to fill in the list.
The name is a string, unique within its parent.
The formula is a function for pseudo-random generation.
list lists all the children dnaObjects.

dnaObject is the superclass of the model classes.

## Viewing Components

Then, the upper case classes are React components.
eg AChromo is a panel to display a chromosome, and all of its arms.
And each arm in that list is an ArmInChromo.
Opening that will zip the user to the AnArm component.

## other files & components

ThreeBillion is the overall app component.
formulate is the seeded random number generator (too much work to download all the data)
dnaData is tables of stuff I downloaded from various places, hacked.

All files ending with .test.js are test scripts; not really used now.

## React infrastructure

All of these come automatically with React and create-react-app.

index.js and index.html are the top level files that are initially loaded.
public directory has files in the root of the web-served site.
package.json describes the whole JS/node.js package.
manifest.json is for running the app independently after downloading it.  (I've never tried it.)
robots.txt guides web spiders like Google's who are buiding its index.



