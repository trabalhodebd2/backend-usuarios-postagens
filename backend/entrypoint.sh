#!/bin/bash

# creating env and installing dependencies

python3 -m venv env
env/bin/pip install -r requirements.txt

# creating database and altering user to the default one

database_name="bd2_usuarios_postagens"

echo "drop database ${database_name};" | sudo -u postgres psql

echo "create database ${database_name};" | sudo -u postgres psql
echo "alter database ${database_name} owner to postgres;" | sudo -u postgres psql
