#!/bin/bash

echo "stop server"
kill -3 `cat ./process.pid`

