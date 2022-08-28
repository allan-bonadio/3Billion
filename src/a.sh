#!/bin/bash

doADir ( )
{
	cont=$1
	ing=$2

	lccont=`tr 'ACG' 'acg' <<<$cont`

	cp proto.js $lccont/$lccont.js
	sed -i '' "s/Proto/$lccont/g" $lccont/$lccont.js


#	cp proto.js $cont/A$cont.js
#	sed -i~ "s/Proto/A$cont/g" $cont/A$cont.js
#
#	cp proto.js $cont/${ing}In$cont.js
#	sed -i~ "s/Proto/${ing}In$cont/g" $cont/${ing}In$cont.js

}


doADir Genome Chromo
doADir Chromo Arm
doADir Arm Gene
doADir Gene Codon

ls -lR

