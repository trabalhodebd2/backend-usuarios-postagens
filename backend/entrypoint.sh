#!/bin/bash

# installing dependencies

npm i

# creating database and altering user to the default one

database_name="bd2_usuarios_postagens"

echo "drop database ${database_name};" | sudo -u postgres psql

echo "create database ${database_name};" | sudo -u postgres psql
echo "alter database ${database_name} owner to postgres;" | sudo -u postgres psql
