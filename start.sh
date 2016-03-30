#!/bin/sh
HOSTNAME=localhost
PORT=3000

ROOT_URL=http://${HOSTNAME}:${PORT}/ meteor run $1
