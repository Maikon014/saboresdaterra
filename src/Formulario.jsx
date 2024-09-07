import React, { useState } from "react";
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

function Formulario() {
  // Estado para armazenar os valores dos campos do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
    birthplace: "",
    mobile: "",
    phone: "",
    address: "",
    city: "",
    gender: "Masculino"
  });

  // Função para lidar com alterações nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário
    console.log(formData);
    // Exemplo de mensagem de sucesso
    alert('Formulário enviado com sucesso!');
    // Limpar o formulário após o envio
    setFormData({
      name: "",
      email: "",
      birthDate: "",
      birthplace: "",
      mobile: "",
      phone: "",
      address: "",
      city: "",
      gender: "Masculino"
    });
  };

  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="teal.500"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Formulário
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl as="form" display="flex" flexDir="column" gap="4" onSubmit={handleSubmit}>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="name">Nome Completo</FormLabel>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu e-mail"
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="birthDate">Data de Nascimento</FormLabel>
                <Input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="birthplace">Naturalidade</FormLabel>
                <Input
                  id="birthplace"
                  name="birthplace"
                  value={formData.birthplace}
                  onChange={handleChange}
                  placeholder="Digite sua naturalidade"
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="mobile">Celular</FormLabel>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Digite seu celular"
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="phone">Telefone</FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Digite seu telefone"
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="address">Endereço</FormLabel>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Digite seu endereço"
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="city">Cidade</FormLabel>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Digite sua cidade"
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup
                  name="gender"
                  value={formData.gender}
                  onChange={(value) => setFormData({ ...formData, gender: value })}
                >
                  <HStack spacing="24px">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Feminino">Feminino</Radio>
                    <Radio value="Outro">Outro</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <HStack justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="teal.600"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                _hover={{ bg: "teal.800" }}
              >
                Enviar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

export default Formulario;
