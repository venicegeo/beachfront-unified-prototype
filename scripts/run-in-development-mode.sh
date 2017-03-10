#!/bin/bash -e

CMD=$(basename $BASH_SOURCE)

. .virtualenv/bin/activate

export FLASK_APP=beachfront/__init__.py
export FLASK_DEBUG=1
export STATIC_BASEURL=http://localhost:8079

flask run --port 8080 &
PIDS[1]=$!

cd ui
npm run dev &
PIDS[0]=$!

trap "kill ${PIDS[*]}" SIGINT

wait
