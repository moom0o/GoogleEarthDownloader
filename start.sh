cat links.txt | parallel -j 10 --workdir $PWD --gnu "bash ./download.sh {}"
