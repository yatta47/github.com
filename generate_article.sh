#!/bin/bash

TODAY=$(date "+%Y%m%d")
RANDOM_NUMBER=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 8 | head -n 1)

function usage {
    cat <<EOM
Usage: $(basename "$0") [OPTION]...
  -h          Display help
  -t VALUE    Create an article with the specified title
  -r          Create an article with the random charactors
EOM
    exit 1
}

if [ "$1" = "" ]
then
    usage
fi

while getopts rt:h optKey; do
    case "$optKey" in
        t )
            FILENAME=${OPTARG}
            ;;
        r )
            FILENAME="article_"${RANDOM_NUMBER}
            ;;
        h|*)
            usage
            ;;
        \? )
            usage
            ;;
    esac
done

hugo new posts/${TODAY}/${FILENAME}.md