Feature: Autenticação

    Scenario: Login de usuario

        Given que estou na página inicial
        When eu faço o login como ususario com "<email>" e "<senha>"
        Then o usuario é logado com sucesso e seu email aparecer na pagina de perfil

        Examples:
            | email             | senha  |
            | cliente@teste.com | 123456 |