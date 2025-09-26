import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native"
import { globalStyles } from '../styles/globalStyles';

export default function Formularios() {
    const [nome, setNome] = useState('');
    const [nomeErro, setNomeErro] = useState('');

    const [dataNascimento, setDataNascimento] = useState('');
    const [dataNascimentoErro, setDataNascimentoErro] = useState('');

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
    const [EmailErro, setEmailErro] = useState('');

    const [senha, setSenha] = useState('');
    const [senhaErro, setSenhaErro] = useState('');

    const [confSenha, setConfSenha] = useState('');
    const [confSenhaErro, setConfSenhaErro] = useState('');
    const regexNome = /^([A-ZÀ-Ú][a-zà-ú']{1,})(\s[A-ZÀ-Ú][a-zà-ú']{1,})+$/;
    const validateFormNome = () => {
        let isValid = true;
        if (!nome.trim()) {
            setNomeErro("Nome é obrigatório!");
            isValid = false
        } else {
            setNomeErro("");
        }
        return isValid;
    }

    const handleSubmit = () => {
        if (validateForm()) {
            const dados = { nome };
            console.log("Dados do formulário válidos", dados);
            Alert.alert("Sucesso!", "Formulário enviado.")
            alert("Sucesso!");
            setNome("");
        } else {
            Alert.alert("Erro!", "Formulário Erro.")
            alert("Erro!");
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
                                    style={globalStyles.input}
                                    placeholder=" Ex.: Maria da Silva Souza"
                                    value={nome}
                                    onChangeText={setNome}
                                />
                            </View>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Data de Nascimento:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="DD/MM/AAAA"
                                    value={dataNascimento}
                                    onChangeText={setDataNascimento}
                                />
                            </View>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>CPF:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="000.000.000-00"
                                    value={cpf}
                                    onChangeText={setCpf}
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Telefone Fixo:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="(11) 2345-6789"
                                    value={telefone}
                                    onChangeText={setTelefone}
                                    keyboardType="phone-pad"
                                />
                            </View>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Celular:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="(11) 91234-5678"
                                    value={celular}
                                    onChangeText={setCelular}
                                    keyboardType="phone-pad"
                                />
                            </View>
                        </View>

                        <View style={globalStyles.sectionContainer}>
                            <Text style={globalStyles.sectionTitle}>Informações Complementares para Menores</Text>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Nome do Pai:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="Ex.: João Carlos Souza"
                                    value={pai}
                                    onChangeText={setPai}
                                ></TextInput>
                            </View>
                            <View style={globalStyles.inputGroup}></View>
                            <Text style={globalStyles.inputLabel}>Nome da Mãe:</Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="Ex.: Ana Beatriz Oliveira Souza"
                                value={mae}
                                onChangeText={setMae}
                            ></TextInput>
                        </View>

                        <View style={globalStyles.sectionContainer}>
                            <Text style={globalStyles.sectionTitle}>Informações de Endereço</Text>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>CEP:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="00000-000"
                                    value={cep}
                                    onChangeText={setCep}
                                ></TextInput>
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Rua:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="Ex.: Rua das Flores"
                                    value={endereco}
                                    onChangeText={setEndereco}
                                ></TextInput>
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Número:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="Ex.: 123"
                                    value={numero}
                                    onChangeText={setNumero}
                                ></TextInput>
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
                                    style={globalStyles.input}
                                    placeholder="Ex.: São Paulo"
                                    value={cidade}
                                    onChangeText={setCidade}
                                ></TextInput>
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Estado:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="Ex.: SP"
                                    value={estado}
                                    onChangeText={setEstado}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={globalStyles.sectionContainer}>
                            <Text style={globalStyles.sectionTitle}>Informações da Conta</Text>
                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Email:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="exemplo@dominio.com"
                                    value={email}
                                    onChangeText={setEmail}
                                ></TextInput>
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Senha:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="Mínimo 8 caracteres"
                                    value={senha}
                                    onChangeText={setSenha}
                                ></TextInput>
                            </View>

                            <View style={globalStyles.inputGroup}>
                                <Text style={globalStyles.inputLabel}>Confirmar Senha:</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="Repita a senha"
                                    value={confSenha}
                                    onChangeText={setConfSenha}
                                ></TextInput>
                            </View>

                        </View>

                        <View>
                            <TouchableOpacity style={globalStyles.button}>
                                <Text style={globalStyles.buttonText}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}