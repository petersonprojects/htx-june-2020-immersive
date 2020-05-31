#!/bin/bash

weeks=( week01 week02 week03 week04 week05 week06 week07 week08 week09 week10 week11 week12 week13 week14 week15 week16 week17 )
days=(1-Monday 2-Tuesday 3-Wednesday 4-Thursday 5-Friday)
for week in "${weeks[@]}"
do
	echo $i
    mkdir "${week}"
    
    for day in "${days[@]}"
    do
        echo $day
        mkdir "${week}/${day}"
         
        mkdir "${week}/${day}/labs"
        touch "${week}/${day}/labs/.gitignore"

        mkdir "${week}/${day}/preLectureNotes"
        touch "${week}/${day}/preLectureNotes/.gitignore"

        mkdir "${week}/${day}/postLectureNotes"
        touch "${week}/${day}/postLectureNotes/.gitignore"
    done
done