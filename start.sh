cat links.txt | parallel -j 50 --workdir $PWD --gnu "bash ./download.sh {}"
