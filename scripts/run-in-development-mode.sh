#!/bin/bash -e

CMD=$(basename $BASH_SOURCE)

. .virtualenv/bin/activate

FLASK_APP=beachfront/__init__.py FLASK_DEBUG=1 STATIC_BASEURL=http://localhost:8080 flask run --port 8000 &
PIDS[1]=$!

cd beachfront-ui
npm run dev &
PIDS[0]=$!

trap "kill ${PIDS[*]}" SIGINT

wait
