#!/bin/bash
docker-compose --env-file .env up -d
docker-compose down -v  