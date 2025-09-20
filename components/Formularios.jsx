import React, {useState} from "react";
import {Text, View, TextInput, TouchableOpacity, Alert, ScrollViewBase} from "react-native"
import { globalStyles} from '../styles/globalStyles';

export default function Formularios(){
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
        if(!nome.trim()){
            setNomeErro("Nome é obrigatório!");
            isValid = false
        }else{
            setNomeErro("");
        }
        return isValid;
    }

    const handleSubmit = () =>{
        if(validateForm()){
            const dados = {nome};
            console.log("Dados do formulário válidos", dados);
            Alert.alert("Sucesso!", "Formulário enviado.")
            alert("Sucesso!");
            setNome("");
        }else{
            Alert.alert("Erro!", "Formulário Erro.")
            alert("Erro!");
        }
    };

    return(
        <View style={globalStyles.container}>
        <View style={globalStyles.scrollContent}>
        <Text style={globalStyles.title}>Formulário</Text>
        <View style={globalStyles.inputContainer} >
        
        <TextInput
            style={globalStyles.input}
            placeholder="Nome Completo..."
            value={nome}
            onChangeText={setNome}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="DD/MM/AAAA"
            value={dataNascimento}
            onChangeText={setDataNascimento}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="XXX.XXX.XXX-XX"
            value={cpf}
            onChangeText={setCpf}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="telefone"
            value={telefone}
            onChangeText={setTelefone}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="celular"
            value={celular}
            onChangeText={setCelular}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="pai"
            value={pai}
            onChangeText={setPai}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="mae"
            value={mae}
            onChangeText={setMae}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="cep"
            value={cep}
            onChangeText={setCep}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="endereço"
            value={endereco}
            onChangeText={setEndereco}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="numero"
            value={numero}
            onChangeText={setNumero}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="complemento"
            value={complemento}
            onChangeText={setComplemento}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="cidade"
            value={cidade}
            onChangeText={setCidade}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="estado"
            value={estado}
            onChangeText={setEstado}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="senha"
            value={senha}
            onChangeText={setSenha}
        ></TextInput>
        <TextInput
            style={globalStyles.input}
            placeholder="confirmar senha"
            value={confSenha}
            onChangeText={setConfSenha}
        ></TextInput>
        <View>
            <TouchableOpacity style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
        </View>
    )
       
    
    
}