import sqlalchemy

database = {
    "DIALECT": "postgresql",
    "ENGINE": "psycopg2",  # driver
    "DATABASE_NAME": "bd2_usuarios_postagens",
    "DATABASE_USER": "postgres",
    "DATABASE_PASSWORD": "postgres",
    "DATABASE_HOST": "127.0.0.1",
    "DATABASE_PORT": "5432",
}

engine = sqlalchemy.create_engine(
    f"{database['DIALECT']}+{database['ENGINE']}://{database['DATABASE_USER']}:{database['DATABASE_PASSWORD']}@{database['DATABASE_HOST']}:{database['DATABASE_PORT']}/{database['DATABASE_NAME']}"
)
