#!/bin/bash
LOCAL_HOSTNAME=localhost
LOCAL_PORT=3000

REMOTE_HOSTNAME=https://lightchat-teste-deciomoritz.c9users.io/
REMOTE_PORT=80

TARGET=""
if [ "$1" = "android-device" ]; then
	TARGET="android-device"
elif [ $1 = "android-emulator" ]; then
	TARGET="android"
fi

if [[ "$2" = "remote" ]]; then
	HOSTNAME=REMOTE_HOSTNAME
	PORT=REMOTE_PORT
else
	HOSTNAME=LOCAL_HOSTNAME
	PORT=LOCAL_PORT
fi

meteor run ${TARGET} --mobile-server ${HOSTNAME}:${PORT}
