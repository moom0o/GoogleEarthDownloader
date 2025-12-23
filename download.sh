# Here you start the script that will download links.txt links.
# Sorry its kinda a mess ;)
if test -z "$1"; then
    echo "Missing variable, are you sure you want to use this script? Use start.sh instead"
fi
URL=$1
X=${URL##*x=}
XX=${X%&y=*}
Y=${X##*y=}
YY=${Y%&z=*}
Z=${X##*&z=}
mkdir -p ./images
mkdir -p ./images/${Z}
mkdir -p ./images/${Z}/${XX}
wget -U "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36" "$1" -O "./images/${Z}/${XX}/${XX}_${YY}.jpeg"