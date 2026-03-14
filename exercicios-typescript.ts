function calcularIMC(
  peso: number,
  altura: number
): number {
  return peso / (altura * altura);
}

function formatarNome(
  nome: string,
  sobrenome?: string
): string {
  if (sobrenome) {
    return nome + " " + sobrenome;
  }
  return nome;
}

function verificarMaioridade(
  idade: number
): boolean {
  return idade > 18;
}

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
}

function formatarProduto(produto: Produto): string {
  if (produto.descricao) {
    return produto.nome + " - R$ " + produto.preco + " (" + produto.descricao + ")";
  }
  return produto.nome + " - R$ " + produto.preco;
}

function filtrarPares(
  numeros: number[]
): number[] {
  return numeros.filter(numero => numero % 2 === 0);
}

type UnidadeTemperatura = "celsius" | "fahrenheit";

function converterTemperatura(
  valor: number,
  unidade: UnidadeTemperatura
): number {
  if (unidade === "celsius") {
    return (valor * 9/5) + 32;
  }
  
  return (valor - 32) * 5/9;
}

function contarOcorrencias<T>(
  array: T[],
  elemento: T
): number {
  return array.filter(item => item === elemento).length;
}

interface Aluno {
  nome: string;
  notas: number[];
  matricula: string;
}

function calcularMedia(aluno: Aluno): number {
  const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
  return soma / aluno.notas.length;
}

type ApiResponse<T> = {
  sucesso: boolean;
  dados: T | null;
  erro: string | null;
};

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

function buscarUsuarios(): ApiResponse<Usuario[]> {
  return {
    sucesso: true,
    dados: [
      { id: 1, nome: "João", email: "joao@email.com" },
      { id: 2, nome: "Maria", email: "maria@email.com" }
    ],
    erro: null
  };
}

import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

interface ListaTarefasProps {
  tarefas: Tarefa[];
  onToggle: (id: number) => void;
}

export default function ListaTarefas({
  tarefas,
  onToggle
}: ListaTarefasProps) {

  const [filtro, setFiltro] =
    useState<"todas" | "pendentes" | "concluidas">("todas");

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  return (
    <View>
      {tarefasFiltradas.map(tarefa => (
        <TouchableOpacity key={tarefa.id} onPress={() => onToggle(tarefa.id)}>
          <Text>
            {tarefa.concluida ? "✅ " : "⬜ "} {tarefa.titulo}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}