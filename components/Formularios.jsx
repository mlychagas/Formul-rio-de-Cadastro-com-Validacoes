import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native"
import { globalStyles } from '../styles/globalStyles';

export default function Formularios() {
    const [nome, setNome] = useState('');
    const [nomeErro, setNomeErro] = useState('');

    const [dataNascimento, setDataNascimento] = useState('');
    const [dataNascimentoErro, setDataNascimentoErro] = useState('');

    const [idade, setIdade] = useState('');

    const [cpf, setCpf] = useState('');
    const [cpfErro, setCpfErro] = useState('');

    const [telefone, setTelefone] = useState('');
    const [telefoneErro, setTelefoneErro] = useState('');

    const [celular, setCelular] = useState('');
    const [celularErro, setCelularErro] = useState('');

    const [pai, setPai] = useState('');
    const [paiErro, setPaiErro] = useState('');

    const [mae, setMae] = useState('');
    const [maeErro, setMaeErro] = useState('');

    const [cep, setCep] = useState('');
    const [cepErro, setCepErro] = useState('');

    const [endereco, setEndereco] = useState('');
    const [enderecoErro, setEnderecoErro] = useState('');

    const [numero, setNumero] = useState('');
    const [numeroErro, setNumeroErro] = useState('');

    const [complemento, setComplemento] = useState('');
    const [complementoErro, setComplementoErro] = useState('');

    const [cidade, setCidade] = useState('');
    const [cidadeErro, setCidadeErro] = useState('');

    const [estado, setEstado] = useState('');
    const [estadoErro, setEstadoErro] = useState('');

    const [email, setEmail] = useState('');
    const [emailErro, setEmailErro] = useState('');

    const [senha, setSenha] = useState('');
    const [senhaErro, setSenhaErro] = useState('');

    const [confSenha, setConfSenha] = useState('');
    const [confSenhaErro, setConfSenhaErro] = useState('');

    const validateNome = (currentNome) => {
        const regexNome = /^([A-ZÀ-Ú][a-zà-ú']{1,})(\s[A-ZÀ-Ú][a-zà-ú']{1,})+$/;
        if (!currentNome.trim()) {
            setNomeErro("Nome completo é obrigatório");
            return false;
        } else if (!regexNome.test(currentNome)) {
            setNomeErro("Formato inválido! Use Nome e Sobrenome com iniciais maiúsculas.");
            return false;
        }
        setNomeErro("");
        return true;
    }

    const validateDataNascimento = (currentDataNascimento) => {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (!currentDataNascimento.trim()) {
            setDataNascimentoErro("Data de nascimento é obrigatória!");
            return false;
        } else if (!regex.test(currentDataNascimento)) {
            setDataNascimentoErro("Formato inválido! Use DD/MM/AAAA");
            return false;
        }

        const [dia, mes, ano] = currentDataNascimento.split('/').map(Number);
        const hj = new Date();
        const dataNasc = new Date(ano, mes - 1, dia);
        let idade = hj.getFullYear() - dataNasc.getFullYear();
        const m = hj.getMonth() - dataNasc.getMonth();
        if (m < 0 || m === 0 && hj.getDate() < dataNasc.getDate()) {
            idade--;
        }
        setIdade(idade);
        setDataNascimentoErro("");
        return true;
    }

    const validateCpf = (currentCpf) => {
        const numeros = currentCpf.replace(/[^\d]/g, '');
        if (!numeros.trim()) {
            setCpfErro("CPF é obrigatório!");
            return false;
        }
        if (numeros.length !== 11 || /^(\d)\1+$/.test(numeros)) {
            setCpfErro("CPF inválido!");
            return false;
        }
        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(numeros.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(numeros.substring(9, 10))) {
            setCpfErro("CPF inválido!");
            return false;
        }
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(numeros.substring(i - 1, i)) * (12 - i);
        }

        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(numeros.substring(10, 11))) {
            setCpfErro("CPF inválido.");
            return false;
        }

        setCpfErro("");
        return true;
    };

    const validateTelefone = (currentTelefone) => {
        const regexTelefone = /^\(\d{2}\)\s\d{4}-\d{4}$/;
        if (!currentTelefone.trim()) {
            setTelefoneErro("Telefone é obrigatório!");
            return false;
        } else if (!regexTelefone.test(currentTelefone)) {
            setTelefoneErro("Formato inválido! Use (XX) XXXX-XXXX.");
            return false;
        }
        setTelefoneErro("");
        return true;
    };

    const validateCelular = (currentCelular) => {
        const regexCelular = /^\(\d{2}\)\s9\d{4}-\d{4}$/;
        if (!currentCelular.trim()) {
            setCelularErro("O celular é obrigatório.");
            return false;
        } else if (!regexCelular.test(currentCelular)) {
            setCelularErro("Formato inválido! Use (XX) 9XXXX-XXXX.");
            return false;
        }
        setCelularErro("");
        return true;
    };
    const validateNomePai = (currentPai) => {
        const regexPai = /^([A-ZÀ-Ú][a-zà-ú']{1,})(\s[A-ZÀ-Ú][a-zà-ú']{1,})+$/;
        if (!currentPai.trim()) {
            setPaiErro("O nome do pai é obrigatório.");
            return false;
        } else if (!regexPai.test(currentPai)) {
            setPaiErro("Formato inválido! Use Nome e Sobrenome com iniciais maiúsculas");
            return false;
        }
        setPaiErro("");
        return true;
    }
    const validateNomeMae = (currentMae) => {
        const regexMae = /^([A-ZÀ-Ú][a-zà-ú']{1,})(\s[A-ZÀ-Ú][a-zà-ú']{1,})+$/;
        if (!currentMae.trim()) {
            setMaeErro("O nome da mãe é obrigatório.");
            return false;
        } else if (!regexMae.test(currentMae)) {
            setMaeErro("Formato inválido! Use Nome e Sobrenome com iniciais maiúsculas");
            return false;
        }
        setMaeErro("");
        return true;
    }
    const validateCep = (currentCep) => {
        const regexCep = /^(\d{5}-?\d{3})$/;
        if (!currentCep.trim()) {
            setCepErro("O CEP é obrigatório.");
            return false;
        } else if (!regexCep.test(currentCep)) {
            setCepErro("Formato inválido!");
            return false;
        }
        setCepErro("");
        return true;
    }
    const validateEndereco = (currentEndereco) => {
        const regexRua = /^[a-zA-ZÀ-ú0-9\s.,'-]+$/;
        if (!currentEndereco.trim()) {
            setEnderecoErro("O nome da rua é obrigatório");
            return false;
        } else if (!regexRua.test(currentEndereco)) {
            setEnderecoErro("Formato inválido!");
            return false;
        }
        setEnderecoErro("");
        return true;
    }
    const validateNumero = (currentNumero) => {
        const regexNumero = /^(\d+|[sS]\/[nN])$/;
        if (!currentNumero.trim()) {
            setNumeroErro("O número é obrigatório.");
            return false;
        } else if (!regexNumero.test(currentNumero)) {
            setNumeroErro("Formato inválido!");
            return false;
        }
        setNumeroErro("");
        return true;
    }
    const validateCidade = (currentCidade) => {
        const regexCidade = /^[a-zA-ZÀ-ú\s'-]+$/;
        if (!currentCidade.trim()) {
            setCidadeErro("O nome da cidade é obrigatório.");
            return false;
        } else if (!regexCidade.test(currentCidade)) {
            setCidadeErro("Formato inválido!");
            return false;
        }
        setCidadeErro("");
        return true;
    }
    const validateEstado = (currentEstado) => {
        const regexEstado = /^[A-Z]{2}$/;
        if (!currentEstado.trim()) {
            setEstadoErro("O estado (UF) é obrigatório.");
            return false;
        } else if (!regexEstado.test(currentEstado)) {
            setEstadoErro("Formato inválido! Use a sigla com 2 letras maiúsculas (Ex: SP).");
            return false;
        }
        setEstadoErro("");
        return true;
    }


    const validateEmail = (currentEmail) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!currentEmail.trim()) {
            setEmailErro("O email é obrigatório.");
            return false;
        } else if (!regexEmail.test(currentEmail)) {
            setEmailErro("Formato de email inválido.");
            return false;
        }
        setEmailErro("");
        return true;
    };

    const validateSenha = (currentSenha) => {
        const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!currentSenha) {
            setSenhaErro("A senha é obrigatória.");
            return false;
        } else if (currentSenha.length < 8) {
            setSenhaErro("A senha deve ter no mínimo 8 caracteres.");
            return false;
        } else if (!regexSenha.test(currentSenha)) {
            setSenhaErro("A senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caractere especial.");
            return false;
        }
        setSenhaErro("");
        return true;
    }

    const validateConfSenha = (currentConfSenha) => {

        if (!currentConfSenha) {
            setConfSenhaErro("A confirmação de senha é obrigatória.");
            return false;
        } else if (currentConfSenha !== senha) {
            setConfSenhaErro("As senhas não coincidem.");
            return false;
        }
        setConfSenhaErro("");
        return true;
    }


    const handleSubmit = () => {
        
        const isNomeValid = validateNome(nome);
        const isDataValid = validateDataNascimento(dataNascimento);
        const isCpfValid = validateCpf(cpf);
        const isTelefoneValid = validateTelefone(telefone);
        const isCelularValid = validateCelular(celular);
        const isEmailValid = validateEmail(email);
        const isSenhaValid = validateSenha(senha);
        const isConfSenhaValid = validateConfSenha(confSenha);
        const isCepValid = validateCep(cep);
        const isEnderecoValid = validateEndereco(endereco);
        const isNumeroValid = validateNumero(numero);
        const isCidadeValid = validateCidade(cidade);
        const isEstadoValid = validateEstado(estado);

        let isFormularioValido = 
        isNomeValid && 
        isDataValid && 
        isCpfValid && 
        isTelefoneValid && 
        isCelularValid && 
        isEmailValid && 
        isSenhaValid && 
        isConfSenhaValid && 
        isCepValid && 
        isEnderecoValid && 
        isNumeroValid && 
        isCidadeValid && 
        isEstadoValid;

        // se for menor de idade, valida também os campos dos pais
        if (idade > 0 && idade < 18) {
            const isPaiValid = validateNomePai(pai);
            const isMaeValid = validateNomeMae(mae);
            isFormularioValido = isFormularioValido && isPaiValid && isMaeValid; 
        }

        // verifica o resultado final
        if (isFormularioValido) {
            const dados = { nome, dataNascimento, cpf, telefone, celular, email, cep, endereco, numero, cidade, estado, pai, mae };
            console.log("Dados do formulário válidos", dados);
            alert("Sucesso! Formulário enviado.");
        } else {
            alert("Erro! Por favor, verifique os campos destacados.");
        }
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollView}>
            <View style={globalStyles.container}>
                <View style={globalStyles.scrollContent}>
                    <Text style={globalStyles.title}>Formulário</Text>
                    <View style={globalStyles.inputContainer} >

                        <View style={globalStyles.sectionContainer}>
                            <Text style={globalStyles.sectionTitle}>Informações Pessoais</Text>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Nome Completo:</Text>
                                <TextInput
                                    style={[globalStyles.input, nomeErro ? globalStyles.inputError : null]}
                                    placeholder=" Ex.: Maria da Silva Souza"
                                    value={nome}
                                    onChangeText={(text) => {
                                        setNome(text);
                                        validateNome(text);
                                    }}

                                />
                                {nomeErro ? <Text style={globalStyles.errorText}>{nomeErro}</Text> : null}
                            </View>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Data de Nascimento:</Text>
                                <TextInput
                                    style={[globalStyles.input, dataNascimentoErro ? globalStyles.inputError : null]}
                                    placeholder="DD/MM/AAAA"
                                    value={dataNascimento}
                                    onChangeText={(text) => {
                                        setDataNascimento(text);
                                        validateDataNascimento(text);
                                    }}
                                />
                                {dataNascimentoErro ? <Text style={globalStyles.errorText}>{dataNascimentoErro}</Text> : null}
                            </View>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>CPF:</Text>
                                <TextInput
                                    style={[globalStyles.input, cpfErro ? globalStyles.inputError : null]}
                                    placeholder="000.000.000-00"
                                    value={cpf}
                                    onChangeText={(text) => {
                                        setCpf(text);
                                        validateCpf(text);
                                    }}
                                    keyboardType="numeric"
                                />
                                {cpfErro ? <Text style={globalStyles.errorText}>{cpfErro}</Text> : null}
                            </View>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Telefone Fixo:</Text>
                                <TextInput
                                    style={[globalStyles.input, telefoneErro ? globalStyles.inputError : null]}
                                    placeholder="(11) 2345-6789"
                                    value={telefone}
                                    onChangeText={(text) => {
                                        setTelefone(text);
                                        validateTelefone(text);
                                    }}
                                    keyboardType="phone-pad"
                                />
                                {telefoneErro ? <Text style={globalStyles.errorText}>{telefoneErro}</Text> : null}
                            </View>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Celular:</Text>
                                <TextInput
                                    style={[globalStyles.input, celularErro ? globalStyles.inputError : null]}
                                    placeholder="(11) 91234-5678"
                                    value={celular}
                                    onChangeText={(text) => {
                                        setCelular(text);
                                        validateCelular(text);
                                    }}
                                    keyboardType="phone-pad"
                                />
                                {celularErro ? <Text style={globalStyles.errorText}>{celularErro}</Text> : null}
                            </View>
                        </View>

                        {idade > 0 && idade < 18 && (
                            <View style={globalStyles.sectionContainer}>
                                <Text style={globalStyles.sectionTitle}>Informações Complementares para Menores</Text>
                                <View style={globalStyles.inputGroup}>
                                    <Text style={globalStyles.inputLabel}>Nome do Pai:</Text>
                                    <TextInput
                                        style={[globalStyles.input, paiErro ? globalStyles.inputError : null]}
                                        placeholder="Ex.: João Carlos Souza"
                                        value={pai}
                                        onChangeText={(text) => {
                                            setPai(text);
                                            validateNomePai(text);
                                        }}
                                    ></TextInput>
                                    {paiErro ? <Text style={globalStyles.errorText}>{paiErro}</Text> : null}
                                </View>
                                <View style={globalStyles.inputGroup}>
                                    <Text style={globalStyles.inputLabel}>Nome da Mãe:</Text>
                                    <TextInput
                                        style={[globalStyles.input, maeErro ? globalStyles.inputError : null]}
                                        placeholder="Ex.: Ana Beatriz Oliveira Souza"
                                        value={mae}
                                        onChangeText={(text) => {
                                            setMae(text);
                                            validateNomeMae(text);
                                        }}
                                    ></TextInput>
                                    {maeErro ? <Text style={globalStyles.errorText}>{maeErro}</Text> : null}
                                </View>
                            </View>
                        )}

                        <View style={globalStyles.sectionContainer}>
                            <Text style={globalStyles.sectionTitle}>Informações de Endereço</Text>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>CEP:</Text>
                                <TextInput
                                    style={[globalStyles.input, cepErro ? globalStyles.inputError : null]}
                                    placeholder="00000-000"
                                    value={cep}
                                    onChangeText={(text) => {
                                        setCep(text);
                                        validateCep(text);
                                    }}
                                ></TextInput>
                                {cepErro ? <Text style={globalStyles.errorText}>{cepErro}</Text> : null}
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Rua:</Text>
                                <TextInput
                                    style={[globalStyles.input, enderecoErro ? globalStyles.inputError : null]}
                                    placeholder="Ex.: Rua das Flores"
                                    value={endereco}
                                    onChangeText={(text) => {
                                        setEndereco(text);
                                        validateEndereco(text);
                                    }}
                                ></TextInput>
                                {enderecoErro ? <Text style={globalStyles.errorText}>{enderecoErro}</Text> : null}
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Número:</Text>
                                <TextInput
                                    style={[globalStyles.input, numeroErro ? globalStyles.inputError : null]}
                                    placeholder="Ex.: 123"
                                    value={numero}
                                    onChangeText={(text) => {
                                        setNumero(text);
                                        validateNumero(text);
                                    }}
                                ></TextInput>
                                {numeroErro ? <Text style={globalStyles.errorText}>{numeroErro}</Text> : null}
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Complemento:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="Ex.: Apto 45, Bloco B"
                                    value={complemento}
                                    onChangeText={setComplemento}
                                ></TextInput>
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Cidade:</Text>
                                <TextInput
                                    style={[globalStyles.input, cidadeErro ? globalStyles.inputError : null]}
                                    placeholder="Ex.: São Paulo"
                                    value={cidade}
                                    onChangeText={(text) => {
                                        setCidade(text);
                                        validateCidade(text);
                                    }}
                                ></TextInput>
                                {cidadeErro ? <Text style={globalStyles.errorText}>{cidadeErro}</Text> : null}
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Estado:</Text>
                                <TextInput
                                    style={[globalStyles.input, estadoErro ? globalStyles.inputError : null]}
                                    placeholder="Ex.: SP"
                                    value={estado}
                                    onChangeText={(text) => {
                                        setEstado(text);
                                        validateEstado(text);
                                    }}
                                ></TextInput>
                                {estadoErro ? <Text style={globalStyles.errorText}>{estadoErro}</Text> : null}
                            </View>

                        </View>
                        <View style={globalStyles.sectionContainer}>
                            <Text style={globalStyles.sectionTitle}>Informações da Conta</Text>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Email:</Text>
                                <TextInput
                                    style={[globalStyles.input, emailErro ? globalStyles.inputError : null]}
                                    placeholder="exemplo@dominio.com"
                                    value={email}
                                    onChangeText={(text) => {
                                        setEmail(text);
                                        validateEmail(text);
                                    }}
                                ></TextInput>
                                {emailErro ? <Text style={globalStyles.errorText}>{emailErro}</Text> : null}
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Senha:</Text>
                                <TextInput
                                    style={[globalStyles.input, senhaErro ? globalStyles.inputError : null]}
                                    placeholder="Mínimo 8 caracteres"
                                    value={senha}
                                    secureTextEntry
                                    onChangeText={(text) => {
                                        setSenha(text);
                                        validateSenha(text);
                                    }}
                                ></TextInput>
                                {senhaErro ? <Text style={globalStyles.errorText}>{senhaErro}</Text> : null}
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Confirmar Senha:</Text>
                                <TextInput
                                    style={[globalStyles.input, confSenhaErro ? globalStyles.inputError : null]}
                                    placeholder="Repita a senha"
                                    value={confSenha}
                                    secureTextEntry
                                    onChangeText={(text) => {
                                        setConfSenha(text);
                                        validateConfSenha(text);
                                    }}
                                ></TextInput>
                                {confSenhaErro ? <Text style={globalStyles.errorText}>{confSenhaErro}</Text> : null}
                            </View>

                        </View>

                        <View>
                            <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
                                <Text style={globalStyles.buttonText}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}