#!/bin/bash
LOCAL_HOSTNAME=192.168.25.15
LOCAL_PORT=3000

REMOTE_HOSTNAME=https://lightchat-teste-deciomoritz.c9users.io
REMOTE_PORT=8080

# default
HOSTNAME=${LOCAL_HOSTNAME}
PORT=${LOCAL_PORT}

TARGET=""
PARAMS=$1$2

BUILD_PARAM="-p"

if [[ "${PARAMS}" = *"android-device"* ]]; then
	TARGET="android-device"
	BUILD_PARAM="--mobile-server"
elif [[ "${PARAMS}" = *"android-emulator"* ]]; then
	TARGET="android"
	BUILD_PARAM="--mobile-server"
fi

if [[ "${PARAMS}" = *"remote"* ]]; then
	HOSTNAME=${REMOTE_HOSTNAME}
	PORT=${REMOTE_PORT}
fi

# export MONGO_URL="mongodb://https://lightchat-teste-deciomoritz.c9users.io:8081/meteor"
echo meteor run ${TARGET} ${BUILD_PARAM} ${HOSTNAME}:${PORT};
meteor run ${TARGET} ${BUILD_PARAM} ${HOSTNAME}:${PORT}
