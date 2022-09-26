#!/bin/bash
# example usage: ./loadbalancing-test.sh localhost:49160
for i in `seq 1 100`; do \
  curl --connect-timeout 1 -s $1 && echo; \
done  | sort | uniq -c

