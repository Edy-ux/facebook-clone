

## Resolver problema de autencicação no git usando username e password. Em vez disso usar Personal access token
1. Follow this link
https://github.com/settings/tokens
2. Personal access tokens -> generate token -> fill out form and generate token

In Command Line:
3. git remote set-url origin https://<Username>:<token>@github.com/<Username>/<YourRepo>.git
4. git push origin master


5. Você também pode precisar atualizar a origem do seu repositório, se definido como https:

git remote -v 
git remote remove origin 
git remote add origin git@github.com:user/repo.git  


## React DOM v6 
react-router-dom v6 Switch foi substituído por Routes e o component={() => <>Home</>} por element={<>Home</>}

## fallback 

**Segundo a Wikipedia** é uma opção de contingência, ou seja, algo é usado quando sua opção original não está disponível por alguma razão.


Eu adoro café e chá, eles realmente me ajudam a pensar,

## Atualizar node com nvm no
- instalando 
1. Baixa repositorio 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
2. Verifica versões disponivél 
nvm ls-remote 
3. install 
nvm install #.#.#” nvm install 16.13.2


