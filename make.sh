#!/bin/bash
LOCAL_HOSTNAME=localhost
LOCAL_PORT=3000

REMOTE_HOSTNAME=http://52.36.245.117
REMOTE_PORT=80

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

echo meteor run ${TARGET} ${BUILD_PARAM} ${HOSTNAME}:${PORT};
meteor --verbose run ${TARGET} ${BUILD_PARAM} ${HOSTNAME}:${PORT}
