#!/bin/bash
# example usage: ./loadtesting.sh "localhost:80?process_ms=2000" 3
for i in `seq 1 $2`; do \
  curl -s $1 && echo & \
done | sort | uniq -c

wait