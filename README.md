#  Projeto Frontend Vite + AWS Cloud Integration

Este repositório contém o **frontend** de uma aplicação moderna desenvolvida com **Vite** que interage diretamente com diversos serviços da **AWS**, compondo uma solução completa de cloud computing.  

O projeto foi inicializado pela **FATEC Votorantim** como parte do aprendizado e prática de desenvolvimento e arquitetura em nuvem.

---

##  Arquitetura e Hospedagem

A aplicação front-end se comunica com uma API hospedada em **EC2** que, por sua vez, acessa bancos de dados MongoDB e MySQL, também hospedados em instâncias EC2 e no serviço gerenciado RDS, respectivamente.  

Além disso, o sistema utiliza buckets S3 para armazenar arquivos em dois ambientes distintos:

- **Bucket de Produção**
- **Bucket de Homologação**  
  Com regras configuradas para replicação automática entre os buckets, garantindo alta disponibilidade e sincronização de dados.

Todas as requisições e métricas são monitoradas em tempo real via **CloudWatch**, permitindo acompanhamento e alertas sobre o desempenho e saúde da aplicação.

---

## 🔧 Serviços AWS Utilizados

| Serviço              | Uso                                           |
|----------------------|-----------------------------------------------|
| **EC2 (API)**        | Hospedagem da API que serve dados ao frontend |
| **EC2 (MongoDB)**    | Banco NoSQL gerenciado em instância EC2       |
| **EC2 (Frontend)**   | Hospedagem do frontend Vite                     |
| **RDS (MySQL)**      | Banco relacional gerenciado para dados críticos|
| **S3 Buckets**       | Armazenamento de arquivos com replicação       |
| **CloudWatch**       | Monitoramento e logs de todas as requisições   |

---

## ⚙️ CI/CD e Docker

O repositório do frontend conta com um pipeline automatizado configurado via arquivo `.github/workflows/deploy.yml` que executa as seguintes tarefas:

- Build da aplicação Vite
- Testes automatizados
- Construção da imagem Docker
- Deploy automático para a instância EC2 de frontend

Esse processo de CI/CD garante entregas rápidas, confiáveis e rastreáveis a cada alteração no código.

---

## 🔗 Repositório da API

O backend pode ser encontrado neste link:  
[https://github.com/garibaldii/api-aws2.git](https://github.com/garibaldii/api-aws2.git)

---

## 🚀 Como rodar localmente



   ```bash
   git clone https://github.com/garibaldii/frontend-aws.git
   cd frontend-aws
   npm install
   npm run dev
   
