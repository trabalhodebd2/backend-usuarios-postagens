#!/bin/bash

# kill -9 "$(lsof -i :3000 | awk '{print $2}' | xargs -n 2 | awk '{print $2}')" # versao antiga resolvendo a expressao e passando para kill -9
# lsof -i :3000 | awk '{print $2}' | xargs -n 2 | awk '{print $2}' | xargs kill -9 # versao mais recente passando o resultado de tudo para o kill -9 com auxilio de xargs

# lsof -i :3000 lista os processos com seus respectivos PID's, retornando algo do tipo:

# COMMAND  PID   USER       ...
# node     0000  user_name  ...


# awk '{print $2}' pega a coluna do PID, retornando:

# PID
# 0000

# xargs -n 2 é pra organizar essa coluna horizontalmente (2 por linha, por isso o -n 2)
# deixando dessa forma:

# PID 0000

# ou seja, agora o PID esta exatamente na segunda coluna novamente, entao eu uso awk '{print $2}' denovo
# e fico exatamente com o valor do PID:

# 0000

# aí depois disso, o resultado é passado para o kill -9 com auxilio de xargs


############# VERSAO MAIS ATUAL DO SCRIPT ################

lsof -i :3000 -t | xargs kill -9

# pega o processo que ta rodando na porta 3000, e o -t ja retorna direto o numero do PID dele!
# aí depois passa esse numero de PID para o kill -9 com auxilio do xargs.

# PS: tanto faz a ordem do -t, desde que o -i e o :3000 estejam juntos (-t nao pode vir entre eles)
