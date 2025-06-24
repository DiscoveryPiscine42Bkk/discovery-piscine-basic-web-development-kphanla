#!/bin/bash

echo "Script name       : $0"
echo "First argument    : $1"
echo "Second argument   : $2"
echo "third argument   : $3"
echo "All arguments     : $@"
echo "Number of arguments: $#"

bash argv.sh 1 2 3
