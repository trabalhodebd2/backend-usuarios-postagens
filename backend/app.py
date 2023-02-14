"""
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Os endpoints da API devem ser:

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/users/

POST => cria um novo usuário no sistema

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/users/<user_id>/

GET => retorna o usuário que possui id igual ao <user_id> informado
PUT => edita o usuário que possui id igual ao <user_id> informado
DELETE => remove o usuário que possui id igual ao <user_id> informado

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/users/<user_id>/posts/

GET => retorna todas as postagens do usuário que possui id igual ao <user_id> informado
POST => cria um novo post para o usuário que possui id igual ao <user_id> informado

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/users/<user_id>/posts/<post_id>/

GET => retorna a postagem que possui id igual ao <post_id> informado
PUT => edita a postagem que possui id igual ao <post_id> informado
DELETE => remove a postagem que possui id igual ao <post_id> informado

OBS: Bloquear PUT e DELETE caso o <user_id> seja diferente do ID do usuario logado

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
"""

from pydantic import BaseModel, Field
from fastapi import FastAPI


class UserSchema(BaseModel):
    name: str = Field(...)
    email: str = Field(...)
    password: str = Field(...)


app = FastAPI()


# /users/ => POST


@app.post("/users", tags=["User Endpoints"])
def create_users(body: UserSchema):
    return {}


# /users/<user_id>/ => GET, PUT, DELETE


@app.get("/users/{user_id}", tags=["User Endpoints"])
def retrieve_user(user_id: int):
    return {}


@app.put("/users/{user_id}", tags=["User Endpoints"])
def update_user(user_id: int):
    return {}


@app.delete("/users/{user_id}", tags=["User Endpoints"])
def delete_user(user_id: int):
    return {}


# /users/<user_id>/posts/ => GET, POST


@app.get("/users/{user_id}/posts", tags=["Post Endpoints"])
def get_user_posts(user_id: int):
    return {}


@app.post("/users/{user_id}/posts", tags=["Post Endpoints"])
def create_user_posts(user_id: int):
    return {}


# /users/<user_id>/posts/<post_id>/ => GET, PUT, DELETE


@app.get("/users/{user_id}/posts/{post_id}", tags=["Post Endpoints"])
def retrieve_user_post(user_id: int, post_id: int):
    return {}


@app.get("/users/{user_id}/posts/{post_id}", tags=["Post Endpoints"])
def update_user_post(user_id: int, post_id: int):
    return {}


@app.get("/users/{user_id}/posts/{post_id}", tags=["Post Endpoints"])
def delete_user_post(user_id: int, post_id: int):
    return {}
